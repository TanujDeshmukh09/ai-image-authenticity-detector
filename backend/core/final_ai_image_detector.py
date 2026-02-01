import sys
import os
import numpy as np
import joblib

from core.fft_detector import extract_features as fft_features
from core.wavelet_detector import extract_features as wavelet_features
from core.pixel_detector import extract_features as pixel_features
from core.probability_engine import statistical_probability
from core.sightengine_helper import sightengine_check

# -----------------------------
# SAFE PATH SETUP
# -----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "..", "models")

MODEL_PATH = os.path.join(MODEL_DIR, "ai_image_lr_model.pkl")
SCALER_PATH = os.path.join(MODEL_DIR, "scaler.pkl")

# -----------------------------
# LOAD TRAINED ML COMPONENTS
# -----------------------------
model = joblib.load(MODEL_PATH)
scaler = joblib.load(SCALER_PATH)

# -----------------------------
# SYSTEM PARAMETERS
# -----------------------------
ALPHA = 0.6
STRONG_LOW = 0.20
STRONG_HIGH = 0.80


# ✅ NEW: SAFE CONFIDENCE HELPER
def to_confidence(prob):
    """
    Convert probability (0–1) → percentage (0–100)
    with hard safety clamp
    """
    conf = prob * 100
    return round(max(0, min(conf, 100)), 2)


def analyze_image(image_path):
    # -----------------------------
    # 1. FEATURE EXTRACTION
    # -----------------------------
    features = []
    features += fft_features(image_path)
    features += wavelet_features(image_path)
    features += pixel_features(image_path)

    features_np = np.array(features).reshape(1, -1)

    # -----------------------------
    # 2. ML PROBABILITY
    # -----------------------------
    X_scaled = scaler.transform(features_np)
    p_ml_ai = model.predict_proba(X_scaled)[0][1]

    # -----------------------------
    # 3. STATISTICAL PROBABILITY
    # -----------------------------
    stat_probs = statistical_probability(features)
    p_stat_ai = stat_probs["p_ai_stat"]

    # -----------------------------
    # 4. FUSION (LOCAL)
    # -----------------------------
    p_final_ai = (ALPHA * p_ml_ai) + ((1 - ALPHA) * p_stat_ai)

    # -----------------------------
    # 5. FINAL DECISION LOGIC
    # -----------------------------
    if p_final_ai <= STRONG_LOW or p_final_ai >= STRONG_HIGH:

        if 0.05 < p_stat_ai < 0.95:
            se_prob = sightengine_check(image_path)

            if se_prob is not None:
                p_fused = (p_final_ai + se_prob) / 2
                label = "AI GENERATED" if p_fused >= 0.5 else "REAL IMAGE"
                confidence = to_confidence(max(p_fused, 1 - p_fused))
                source = "Hybrid (ML + Sightengine)"
            else:
                label = "AI GENERATED" if p_final_ai >= 0.5 else "REAL IMAGE"
                confidence = to_confidence(max(p_final_ai, 1 - p_final_ai))
                source = "Local ML (Fallback)"
        else:
            label = "AI GENERATED" if p_final_ai >= 0.5 else "REAL IMAGE"
            confidence = to_confidence(max(p_final_ai, 1 - p_final_ai))
            source = "Local ML"

    else:
        se_prob = sightengine_check(image_path)

        if se_prob is not None:
            p_fused = (p_final_ai + se_prob) / 2
            label = "AI GENERATED" if p_fused >= 0.5 else "REAL IMAGE"
            confidence = to_confidence(max(p_fused, 1 - p_fused))
            source = "Hybrid (ML + Sightengine)"
        else:
            label = "AI GENERATED" if p_final_ai >= 0.5 else "REAL IMAGE"
            confidence = to_confidence(max(p_final_ai, 1 - p_final_ai))
            source = "Local ML (Fallback)"

    return {
        "prediction": label,
        "confidence": confidence,
        "ml_probability": round(p_ml_ai, 4),
        "stat_probability": round(p_stat_ai, 4),
        "final_probability": round(p_final_ai, 4),
        "decision_source": source
    }


# -----------------------------
# CLI ENTRY
# -----------------------------
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python final_ai_image_detector.py <image_path>")
        sys.exit(1)

    result = analyze_image(sys.argv[1])

    print("\n🧠 FINAL AI IMAGE DETECTOR (HYBRID SYSTEM)")
    print("----------------------------------------")
    print(f"Prediction       : {result['prediction']}")
    print(f"Confidence       : {result['confidence']}%")
    print(f"ML Probability   : {result['ml_probability']}")
    print(f"Stat Probability : {result['stat_probability']}")
    print(f"Final AI Prob    : {result['final_probability']}")
    print(f"Decision Source  : {result['decision_source']}")
    print("----------------------------------------\n")
