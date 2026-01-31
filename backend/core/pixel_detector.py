import cv2
import numpy as np

def extract_features(image_path):
    img = cv2.imread(image_path)
    if img is None:
        raise ValueError("Image not found")

    img = cv2.resize(img, (256, 256))
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    blur = cv2.GaussianBlur(gray, (5,5), 0)
    noise = gray.astype(np.float32) - blur.astype(np.float32)

    noise_var = np.var(noise)

    hist, _ = np.histogram(noise, bins=256, density=True)
    hist += 1e-6
    entropy = -np.sum(hist * np.log2(hist))

    shifted = np.roll(noise, 1, axis=0)
    corr = np.corrcoef(noise.flatten(), shifted.flatten())[0,1]

    return [
        round(noise_var, 4),
        round(entropy, 4),
        round(corr, 4)
    ]
