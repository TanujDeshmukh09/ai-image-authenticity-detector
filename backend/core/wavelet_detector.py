import cv2
import numpy as np
import pywt

def extract_features(image_path):
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError("Image not found")

    img = cv2.resize(img, (256, 256))
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray = gray / 255.0

    LL, (LH, HL, HH) = pywt.dwt2(gray, 'haar')

    e_LH = np.mean(np.abs(LH))
    e_HL = np.mean(np.abs(HL))
    e_HH = np.mean(np.abs(HH))

    directional_imbalance = abs(e_LH - e_HL) / (e_LH + e_HL + 1e-6)
    texture_uniformity = e_HH / (e_LH + e_HL + 1e-6)

    return [
        round(e_LH, 4),
        round(e_HL, 4),
        round(e_HH, 4),
        round(directional_imbalance, 4),
        round(texture_uniformity, 4)
    ]
