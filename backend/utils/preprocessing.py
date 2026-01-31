import cv2

def preprocess_image(gray_image, size=(256, 256)):
    """
    Resize and normalize image.
    """
    resized = cv2.resize(gray_image, size)
    normalized = resized / 255.0
    return normalized
