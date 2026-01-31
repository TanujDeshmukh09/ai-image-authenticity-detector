import os
import json
import math
import numpy as np

# -----------------------------
# LOAD FEATURE STATS SAFELY
# -----------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATS_PATH = os.path.join(BASE_DIR, "..", "models", "feature_stats.json")

with open(STATS_PATH, "r") as f:
    STATS = json.load(f)

# -----------------------------
# GAUSSIAN LOG LIKELIHOOD
# -----------------------------
def gaussian_log_likelihood(x, mu, sigma):
    """
    log P(x | mu, sigma) for numerical stability
    """
    if sigma == 0:
        return -1e9
    return -0.5 * math.log(2 * math.pi * sigma * sigma) - ((x - mu) ** 2) / (2 * sigma * sigma)

# -----------------------------
# STATISTICAL PROBABILITY
# -----------------------------
def statistical_probability(features):
    """
    Compute P(AI) and P(REAL) using learned feature distributions
    """
    log_p_real = 0.0
    log_p_ai = 0.0

    for i, x in enumerate(features):
        key = f"f{i}"

        mu_r = STATS["real"][key]["mean"]
        sd_r = STATS["real"][key]["std"]

        mu_a = STATS["ai"][key]["mean"]
        sd_a = STATS["ai"][key]["std"]

        log_p_real += gaussian_log_likelihood(x, mu_r, sd_r)
        log_p_ai   += gaussian_log_likelihood(x, mu_a, sd_a)

    # Convert log-likelihoods to probabilities
    max_log = max(log_p_real, log_p_ai)
    p_real = math.exp(log_p_real - max_log)
    p_ai   = math.exp(log_p_ai   - max_log)

    # Normalize
    total = p_real + p_ai
    p_real /= total
    p_ai   /= total

    return {
        "p_real_stat": round(p_real, 4),
        "p_ai_stat": round(p_ai, 4)
    }

# -----------------------------
# QUICK LOCAL TEST
# -----------------------------
if __name__ == "__main__":
    dummy = np.random.rand(12).tolist()
    print(statistical_probability(dummy))
