import os
import joblib
import numpy as np

from core.fft_detector import extract_features as fft_features
from core.wavelet_detector import extract_features as wavelet_features
from core.pixel_detector import extract_features as pixel_features
from core.probability_engine import final_decision

# -----------------------------
# LOAD MODEL & SCALER
# -----------------------------
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

LR_MODEL = joblib.load(
    os.path.join(BASE_DIR, "models", "ai_image_lr_model.pkl")
)

SCALER = joblib.load(
    os.path.join(BASE_DIR, "models", "scaler.pkl")
)

# -----------------------------
# MAIN PIPELINE
# -----------------------------
def analyze_image(image_path: str):

    # 1️⃣ Feature extraction (RAW FEATURES)
    fft_out = fft_features(image_path)
    wavelet_out = wavelet_features(image_path)
    pixel_out = pixel_features(image_path)

    features = np.hstack([
        fft_out,
        wavelet_out,
        pixel_out
    ])

    # 2️⃣ ML probability (LR)
    features_scaled = SCALER.transform(features.reshape(1, -1))
    lr_prob = LR_MODEL.predict_proba(features_scaled)[0][1]

    # 3️⃣ Final decision (Stat + LR)
    result = final_decision(features.tolist(), lr_prob)

    return result
