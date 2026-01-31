import cv2
import numpy as np

def load_image(file_bytes):
    """
    Load image from uploaded bytes and convert to grayscale.
    """
    image_array = np.frombuffer(file_bytes, np.uint8)
    image = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    if image is None:
        raise ValueError("Invalid image file")

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return gray
