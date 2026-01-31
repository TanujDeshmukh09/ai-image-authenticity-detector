import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_USER = os.getenv("SIGHTENGINE_API_USER")
API_SECRET = os.getenv("SIGHTENGINE_API_SECRET")

def sightengine_check(image_path):
    """
    Returns probability that image is AI-generated
    """
    url = "https://api.sightengine.com/1.0/check.json"

    data = {
        "models": "genai",
        "api_user": API_USER,
        "api_secret": API_SECRET
    }

    with open(image_path, "rb") as f:
        files = {"media": f}
        response = requests.post(url, data=data, files=files)

    result = response.json()

    if "type" in result and "ai_generated" in result["type"]:
        return result["type"]["ai_generated"]

    # fallback
    return None
