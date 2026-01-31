import cv2
import numpy as np
from scipy.fftpack import fft2, fftshift

def extract_features(image_path):
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError("Image not found or path is incorrect")

    img = cv2.resize(img, (256, 256))
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    f = fft2(gray)
    fshift = fftshift(f)
    magnitude = np.log(np.abs(fshift) + 1)

    mean_energy = np.mean(magnitude)
    std_energy = np.std(magnitude)

    h, w = magnitude.shape
    center_size = 30

    center = magnitude[
        h//2-center_size:h//2+center_size,
        w//2-center_size:w//2+center_size
    ]

    outer = magnitude.copy()
    outer[
        h//2-center_size:h//2+center_size,
        w//2-center_size:w//2+center_size
    ] = 0

    high_freq_ratio = np.mean(outer) / (np.mean(center) + 1e-6)

    fft_score = (
        0.4 * (mean_energy / 10) +
        0.6 * high_freq_ratio
    )
    fft_score = min(max(fft_score, 0), 1)

    return [
        round(mean_energy, 4),
        round(std_energy, 4),
        round(high_freq_ratio, 4),
        round(fft_score, 4)
    ]
