from fft_detector import fft_analysis
from wavelet_detector import wavelet_analysis
from pixel_detector import pixel_artifact_analysis

def hybrid_analysis(image_path):
    fft = fft_analysis(image_path, visualize=False)
    wav = wavelet_analysis(image_path)
    pix = pixel_artifact_analysis(image_path)

    fft_score = fft["fft_score"]
    dir_imb = wav["directional_imbalance"]
    entropy = pix["noise_entropy"]
    corr = pix["noise_correlation"]

    # FINAL LOGIC (RESEARCH-GRADE)
    if fft_score > 0.75 and entropy < 7.5 and corr > 0.15:
        label = "AI-GENERATED"
    elif fft_score > 0.6 and dir_imb > 0.2:
        label = "FILTERED / EDITED"
    else:
        label = "REAL"

    return {
        "fft_score": round(fft_score, 4),
        "directional_imbalance": round(dir_imb, 4),
        "noise_entropy": round(entropy, 4),
        "noise_correlation": round(corr, 4),
        "label": label
    }

    # FINAL LOGIC (NON-RESEARCH-GRADE)
    # if fft_score > 0.75 and entropy < 7.5 and corr > 0.15:
    #     label = "AI-GENERATED"
    # elif fft_score > 0.6 and dir_imb > 0.2:
    #     label = "FILTERED / EDITED"
    # else:
    #     label = "REAL"

    # return {
    #     "fft_score": round(fft_score, 4),
    #     "directional_imbalance": round(dir_imb, 4),
    #     "noise_entropy": round(entropy, 4),
    #     "noise_correlation": round(corr, 4),
    #     "label": label
    # }