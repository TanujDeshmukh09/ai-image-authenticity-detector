from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil
import uuid

# 🔥 IMPORT FINAL HYBRID ML BODY
from core.final_ai_image_detector import analyze_image

app = FastAPI(title="AI Image Authenticity Detector")

# -----------------------------
# CORS (for frontend)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # change later if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# ROOT CHECK
# -----------------------------
@app.get("/")
def root():
    return {"status": "Backend running"}

# -----------------------------
# IMAGE ANALYSIS ENDPOINT
# -----------------------------
@app.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    # Create temp upload folder
    UPLOAD_DIR = "temp_uploads"
    os.makedirs(UPLOAD_DIR, exist_ok=True)

    # Unique filename (avoid overwrite)
    filename = f"{uuid.uuid4()}_{file.filename}"
    image_path = os.path.join(UPLOAD_DIR, filename)

    # Save uploaded image
    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        # 🔥 CALL HYBRID ML + SIGHTENGINE
        result = analyze_image(image_path)

        response = {
            "prediction": result["prediction"],
            "confidence": result["confidence"],
            "decision_source": result["decision_source"],
            "ml_probability": result["ml_probability"],
            "stat_probability": result["stat_probability"],
            "final_probability": result["final_probability"]
        }

        return response

    except Exception as e:
        return {"error": str(e)}

    finally:
        # Cleanup temp image
        if os.path.exists(image_path):
            os.remove(image_path)
