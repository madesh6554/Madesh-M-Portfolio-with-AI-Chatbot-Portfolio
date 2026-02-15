# Portfolio Deployment Guide

Deploy the **frontend** (React) on **Vercel** and the **backend** (Flask) on **Render** (or Railway). Then connect them with environment variables.

---

## Prerequisites

- GitHub account
- [Vercel](https://vercel.com) account (frontend)
- [Render](https://render.com) account (backend) — or Railway / similar
- Your repo pushed to GitHub (e.g. `https://github.com/madesh6554/Madesh-M-Portfolio-with-AI-Chatbot-Portfolio`)

---

## Part 1: Deploy Backend (Flask) on Render

### 1.1 Push backend to GitHub

Ensure your repo has this structure (or equivalent):

```
your-repo/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── data/          (all .txt files for RAG)
│   ├── ai/
│   └── routes/
├── frontend/
│   ├── package.json
│   └── src/
└── DEPLOYMENT.md
```

### 1.2 Create a Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com) → **New** → **Web Service**.
2. Connect your GitHub account and select the repo (e.g. `Madesh-M-Portfolio-with-AI-Chatbot-Portfolio`).
3. Configure:
   - **Name:** `portfolio-backend` (or any name)
   - **Region:** Choose nearest (e.g. Oregon)
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app --bind 0.0.0.0:$PORT`
4. **Advanced** → **Add Environment Variable** → add:
   - `PORT` = `10000` (Render sets this automatically; you can add for clarity)
   - `GEMINI_API_KEY` = your Gemini API key (for chatbot) — get from [Google AI Studio](https://aistudio.google.com/apikey)
   - Or `OPENAI_API_KEY` if you use OpenAI instead
   - Optional: `LLM_PROVIDER` = `gemini` or `openai`
   - Optional (contact form email): `SENDER_EMAIL`, `SENDER_PASSWORD`, `RECIPIENT_EMAIL`, `SMTP_SERVER`, `SMTP_PORT`
5. Click **Create Web Service**. Wait for the first deploy to finish.
6. Copy your backend URL, e.g. `https://portfolio-backend-xxxx.onrender.com` (no trailing slash).

---

## Part 2: Deploy Frontend (React) on Vercel

### 2.1 Create project on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard) → **Add New** → **Project**.
2. Import your GitHub repo (same repo as above).
3. Configure:
   - **Framework Preset:** Create React App (or Vite if you use that)
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

### 2.2 Environment variables (Vercel)

1. In the project → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `REACT_APP_API_URL`  
   - **Value:** your backend URL from Part 1, e.g. `https://portfolio-backend-xxxx.onrender.com`  
   - **Environment:** Production (and Preview if you want)
3. Save and trigger a **Redeploy** (Deployments → ⋮ → Redeploy).

---

## Part 3: Allow frontend to call backend (CORS)

Your Flask app already uses `Flask-CORS`. For production, ensure the backend allows your Vercel domain:

- In `backend/app.py`, `CORS(app)` without arguments allows all origins. For production you can restrict:
  - `CORS(app, origins=["https://your-frontend.vercel.app"])`
- Or keep `CORS(app)` for simplicity during testing.

Redeploy the backend after any code change.

---

## Part 4: Summary checklist

| Step | Where | What |
|------|--------|------|
| 1 | Render | New Web Service, root = `backend`, start = `gunicorn app:app --bind 0.0.0.0:$PORT` |
| 2 | Render | Env vars: `GEMINI_API_KEY` (or `OPENAI_API_KEY`), optional email vars |
| 3 | Vercel | New Project, root = `frontend`, build = `npm run build` |
| 4 | Vercel | Env var: `REACT_APP_API_URL` = backend URL |
| 5 | Both | Redeploy after changes |

---

## Optional: Run backend port from env (Render)

Render sets `PORT`. Ensure your app uses it. In `app.py` you have:

```python
if __name__ == '__main__':
    init_db()
    app.run(debug=True, host='0.0.0.0', port=5000)
```

For **local** runs this is fine. On Render, the **start command** is `gunicorn app:app --bind 0.0.0.0:$PORT`, so the platform’s `PORT` is used automatically. No change needed in `app.py` for Render.

---

## Troubleshooting

- **Frontend can’t reach backend:** Check `REACT_APP_API_URL` has no trailing slash; check backend URL is HTTPS.
- **Chatbot not replying:** Ensure `GEMINI_API_KEY` (or `OPENAI_API_KEY`) is set on Render and backend logs show no errors.
- **Build fails on Vercel:** Ensure ESLint passes (your project has rules set to `off` for the previous errors).
- **Backend build fails on Render:** Ensure `backend/requirements.txt` includes `gunicorn`, `chromadb`, `openai`, `google-generativeai` (see updated `requirements.txt`).
