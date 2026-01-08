# 🚀 Free Deployment Guide

Follow these steps to host your portfolio with the AI Assistant for free.

## 1. Backend (Host on [Render](https://render.com/))

**Service Type**: Web Service

1.  **Connect Repo**: Connect your GitHub repository.
2.  **Root Directory**: `backend` (CRITICAL: Set this to `backend`)
3.  **Environment Variables**:
    - `HUGGINGFACE_API_KEY`: Your HuggingFace Token.
    - `LLM_PROVIDER`: `huggingface`
    - `PYTHON_VERSION`: `3.9.0`
4.  **Runtime**: Python 3
5.  **Build Command**: `pip install -r requirements.txt`
6.  **Start Command**: `gunicorn app:app`

---

## 2. Frontend (Host on [Vercel](https://vercel.com/))

1.  **Connect Repo**: Import your GitHub repository.
2.  **Root Directory**: `frontend` (CRITICAL: Set this to `frontend`)
3.  **Environment Variables**:
    - `REACT_APP_API_URL`: Your Render backend URL (e.g., `https://your-api.onrender.com`)
4.  **Framework Preset**: `Create React App`
5.  **Build Command**: `npm run build`
6.  **Output Directory**: `build`

---

## 💡 Important Notes
- **Cold Starts**: Render's free tier spins down after inactivity. The first time you open the chatbot, it might take 30-60 seconds to wake up.
- **Port**: Render automatically handles the port; you don't need to change anything in `app.py`.
- **API URL**: Make sure your `REACT_APP_API_URL` DOES NOT have a trailing slash (e.g., use `...com` not `...com/`).

---

## ✅ Local Quick Start
If you want to run it locally again:
1. **Backend**: `cd backend && python app.py`
2. **Frontend**: `cd frontend && npm start`
