<br/>

<p align="center">
  <img src="resources/logo.jpeg" alt="Logo" width="220" height="220">
</p>

<h2 align="center">AI Image Authenticity Detector</h2>

<p align="center">
  An AI-based system to detect real vs AI-generated images using image forensics.
  <br/><br/>
  <b>Live Demo:</b> NOT DEPLOYED
</p>

---

## 📌 About The Project

**AI Image Authenticity Detector** is a student-built system designed to analyze images and determine whether they are **real** or **AI-generated**.

Instead of relying on heavy deep learning models, this project focuses on **image forensics techniques** combined with **classical machine learning**, making it lightweight, explainable, and suitable for real-world deployment.

The system addresses the growing problem of **AI-generated misinformation** and visually deceptive content.

> ⚠️ This project was developed as a **student project for learning and demonstration purposes**.

---

## ✨ Key Features

- 🔍 **Image Forensics Analysis**
  - Frequency-domain analysis using FFT
  - Texture analysis using Wavelet Transform
  - Pixel-level noise and artifact detection

- 🧠 **Hybrid Decision System**
  - Classical ML models (Logistic Regression & Random Forest)
  - Statistical probability engine
  - Confidence-weighted fusion

- 🔁 **Smart API Fallback**
  - External Sightengine API used **only when confidence is low**
  - Minimizes dependency on third-party services

- 🌐 **Web-Based Interface**
  - Clean, modern UI
  - Image upload & instant prediction
  - Confidence-aware output

---

## 🛠️ Built With

### Backend
- Python
- FastAPI
- Scikit-learn
- NumPy, OpenCV
- Custom image forensics pipelines
- Pre-trained `.pkl` models

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- NextUI

### External Service
- Sightengine API (fallback only)

---

## ⚙️ How It Works

1. User uploads an image via the web interface  
2. Backend extracts forensic features  
3. Classical ML models evaluate authenticity  
4. Statistical probabilities are fused  
5. External API used only for borderline confidence  
6. Final prediction returned with confidence score  

---

## 📸 Application Screenshots
 🔹 Landing Page
<img width="1896" height="869" alt="landing" src="https://github.com/user-attachments/assets/c696ff98-1b61-4b3f-abeb-7c1cb6b1b1d8" />
🔹 Model Page
<img width="1885" height="867" alt="model" src="https://github.com/user-attachments/assets/46550bfa-4e4b-4b38-a06b-d79fbb8ecba8" />
🔹 Result Page
<img width="1906" height="863" alt="code" src="https://github.com/user-attachments/assets/400551fd-0c8d-47bb-97c8-124742c1def9" />


## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/TanujDeshmukh09/ai-image-authenticity-detector.git
cd ai-image-authenticity-detector



