# Vercel – Frontend Deployment (Step-by-Step)

Your backend is live at: **https://madesh-m-portfolio-with-ai-chatbot.onrender.com**  
This guide deploys the **frontend** (React) on Vercel and connects it to that backend.

---

## Prerequisites

- Code pushed to GitHub: **https://github.com/madesh6554/Madesh-M-Portfolio-with-AI-Chatbot-Portfolio**
- A [Vercel](https://vercel.com) account (sign up with GitHub if needed)

---

## Step 1: Open Vercel and import the repo

1. Go to **https://vercel.com** and sign in (use “Continue with GitHub”).
2. Click **“Add New…”** → **“Project”**.
3. Under **Import Git Repository**, find **madesh6554/Madesh-M-Portfolio-with-AI-Chatbot-Portfolio**.
4. Click **“Import”** next to that repo.

---

## Step 2: Configure the project (important)

On the import screen, set these **before** deploying:

| Field | Value |
|--------|--------|
| **Project Name** | e.g. `madesh-portfolio` (or leave default) |
| **Framework Preset** | **Create React App** (Vercel usually detects it) |
| **Root Directory** | Click **“Edit”** and set to **`frontend`** |
| **Build Command** | `npm run build` (default) |
| **Output Directory** | `build` (default for Create React App) |
| **Install Command** | `npm install` (default) |

**Root Directory must be `frontend`** so Vercel builds the React app, not the repo root.

---

## Step 3: Environment variable (optional but recommended)

1. Expand **“Environment Variables”**.
2. Add one variable:
   - **Name:** `REACT_APP_API_URL`
   - **Value:** `https://madesh-m-portfolio-with-ai-chatbot.onrender.com`
   - **Environment:** Production (and Preview if you want)
3. Click **“Add”**.

*(The app already defaults to this URL in production, but setting it here keeps the config clear.)*

---

## Step 4: Deploy

1. Click **“Deploy”**.
2. Wait for the build to finish (usually 1–2 minutes).
3. When it’s done, you’ll see **“Congratulations!”** and a link like **https://madesh-portfolio-xxx.vercel.app**.

---

## Step 5: Test

1. Open the Vercel URL.
2. Use the **chatbot** on the site; it should talk to your Render backend.
3. If the chatbot fails, check:
   - Render service is running: https://madesh-m-portfolio-with-ai-chatbot.onrender.com
   - In Vercel → **Settings** → **Environment Variables**: `REACT_APP_API_URL` is set and you **Redeploy**ed after adding it.

---

## Later: redeploy after code changes

- **Automatic:** Push to the `main` branch on GitHub; Vercel will redeploy.
- **Manual:** Vercel dashboard → your project → **Deployments** → **⋯** on latest → **Redeploy**.

---

## Quick checklist

- [ ] Signed in to Vercel with GitHub  
- [ ] New Project → imported **Madesh-M-Portfolio-with-AI-Chatbot-Portfolio**  
- [ ] **Root Directory** = `frontend`  
- [ ] **REACT_APP_API_URL** = `https://madesh-m-portfolio-with-ai-chatbot.onrender.com` (optional)  
- [ ] Clicked **Deploy**  
- [ ] Opened the live URL and tested the chatbot  
