# Render – Environment Variables Setup

Use these in **Render** → your Web Service → **Environment** → **Add Environment Variable**.

---

## Memory (avoid “Out of memory” and “No open ports”)

- **Free tier (512 MB)** can be too small for the **chatbot**: ChromaDB loads a ~80 MB embedding model on the first request and may exceed 512 MB.
- The app now **starts without loading the chatbot** (lazy init), so the service can bind to the port and pass health checks. The **first** time someone uses the chatbot, the model loads; if you see **“Out of memory”** in the logs, upgrade the instance.
- **Recommendation:** For a working chatbot, use at least **Starter ($7/mo)** or **Standard**. Free tier may work for the rest of the site (contact form, health check); the first chatbot request might trigger OOM.

---

## Required – Python version (fix ChromaDB on Render)

Render’s default Python can be 3.14; ChromaDB does not support it yet. Set:

| Key | Value |
|-----|--------|
| **PYTHON_VERSION** | `3.12.7` |

Or rely on the **`.python-version`** file in `backend/` (contains `3.12`). If the build still uses 3.14, set **PYTHON_VERSION** in Render env to `3.12.7`.

---

## Required for chatbot (pick one)

| Key | Value | Notes |
|-----|--------|--------|
| **GEMINI_API_KEY** | Your API key | Get free key: [Google AI Studio](https://aistudio.google.com/apikey). Recommended. |
| **OPENAI_API_KEY** | Your API key | Or use [OpenAI](https://platform.openai.com/api-keys) if you prefer. |
| **LLM_PROVIDER** | `gemini` or `openai` | Optional. If not set, backend uses whichever API key is present (Gemini first). |

- Add **either** `GEMINI_API_KEY` **or** `OPENAI_API_KEY` (or both; set `LLM_PROVIDER` to choose).
- If neither is set, the chatbot will not work properly.

---

## Optional – contact form email (Gmail)

Only if you want the backend to send you an email when someone submits the contact form.

| Key | Value |
|-----|--------|
| **SENDER_EMAIL** | Your Gmail address (e.g. madesh6554@gmail.com) |
| **SENDER_PASSWORD** | Gmail **App Password** (not your normal password). See [Gmail App Passwords](https://support.google.com/accounts/answer/185833). |
| **RECIPIENT_EMAIL** | Where to receive contact messages (e.g. same as SENDER_EMAIL) |
| **SMTP_SERVER** | `smtp.gmail.com` (default) |
| **SMTP_PORT** | `587` (default) |

If you leave `SENDER_PASSWORD` empty, the app still runs; it will only log contact messages to the Render logs instead of sending email.

---

## Do not add on Render

- **PORT** – Render sets this automatically; do not override it.

---

## Summary – minimum to add on Render

1. **GEMINI_API_KEY** = (paste your key from [Google AI Studio](https://aistudio.google.com/apikey))  
   **or**  
   **OPENAI_API_KEY** = (paste your key from OpenAI)

2. Optionally: **LLM_PROVIDER** = `gemini` if you use Gemini.

3. Optionally: **SENDER_EMAIL**, **SENDER_PASSWORD**, **RECIPIENT_EMAIL** for contact form email.

After adding variables, save and let Render redeploy.
