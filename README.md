# MediNest 🏥✨

> **Personalized AI-driven health insurance recommendations based on your true medical profile.**

MediNest is a full-stack application built to simplify health insurance. It leverages the power of Large Language Models (LLMs) like Google's Gemini to deeply analyze a user's health conditions, demographics, and family details to recommend the most optimal insurance plans.

---

## 🌟 Key Features

- **🔐 Secure Authentication**: JWT-based user login and signup flow.
- **🧑‍⚕️ Comprehensive Health Profiles**: Store and manage user details, pre-existing medical conditions, family members, location, and preferred hospitals.
- **🤖 AI-Powered Recommendations**: Uses Google Gemini to generate highly personalized insurance plan suggestions. It analyzes specific diseases, outlines coverage details, estimates risk factors, and flags important exclusions.
- **🛡️ Strict Profile Validation**: Recommendations are strictly tailored; the system ensures all critical profile data (Age, Gender, City, Conditions) is thoroughly filled before computing plans.

---

## 🛠️ Tech Stack

### Frontend 🎨
- **React 18** (via Vite)
- **React Router v6** for client-side routing
- **Vanilla CSS / Modern UI**

### Backend ⚙️                                     
- **FastAPI** (Python 3)
- **SQLite3** mapped with **SQLAlchemy ORM**
- **Passlib / python-jose** for secure JWT Authentication
- Integrated AI Prompt Engineering

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
# Navigate to the project directory
cd "Final Code of Hackathon"
```

### 2. Backend Setup
```bash
cd backend

# Create a virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload
```
The backend will run on `http://127.0.0.1:8000`. 
Available endpoints: `/auth`, `/profile`, `/insurance`, `/recommendations`.

### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Set up your environment variables
# Create a .env file and add your Google Gemini API Key:
echo "VITE_GEMINI_API_KEY=your_gemini_api_key_here" > .env

# Run the development server
npm run dev
```
The frontend will run on `http://localhost:5173`.

---

## 🔑 Environment Variables

To run the AI features, you need a Gemini API Key.
1. Get an API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Add the API key to a `.env` file in your `frontend/` directory:
   ```env
   VITE_GEMINI_API_KEY=YOUR_API_KEY
   ```
3. *(Optional)* Backend `.env` variables:
   ```env
   JWT_SECRET_KEY=change-this-secret-in-production
   DATABASE_URL=sqlite:///./medinest.db
   ```

---

## 📸 How it Works                  how it works can be guessed by using some other things

1. **Sign Up / Login**: Users create their account safely.
2. **Build Medical Profile**: Input crucial parameters such as **Pre-existing Diseases** (e.g., Diabetes, Hypertension), **Age**, and **City**.
3. **Generate Recommendations**: Navigating to the recommendations tab validates the profile. If complete, a specialized prompt is sent to the LLM.
4. **Insights Delivered**: The LLM parses the diseases and returns curated insurance plans, identifying what is covered (like Day Care Procedures or Chronic Management) and explaining *why* it matches the user's explicit profile score.

---

Team Members:
- Siddhesh Murkute
- Jalmesh Mhatre
- Pritesh Mahajan  
---
*Built for MumbaiHack2025.*

