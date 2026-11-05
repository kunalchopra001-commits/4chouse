# 4C House WhatsApp assistant: setup

Instant, natural WhatsApp replies in the customer's language, lead qualification, the free-diagnostic booking link, a Google Sheet lead log, and alerts to Kunal. When Kunal replies to a chat himself, the assistant stays quiet in that chat for 12 hours.

| Part | Where |
|---|---|
| `worker.js` | The assistant. Runs on Cloudflare Workers (free plan). The instructions and knowledge are in the `SYSTEM_PROMPT` section near the top. |
| `apps-script.gs` | Lead sheet and email alerts. Runs in a Google Sheet. |

Nothing here is part of the website deploy.

## 1. Claude API key
1. https://console.anthropic.com → sign up with hello@4chouse.com → add a payment method and a monthly spend limit (start with USD 20).
2. API keys → Create key → name it `whatsapp-assistant` → copy it (shown once).

## 2. Lead sheet and email alerts
1. Create a Google Sheet called **4C House WhatsApp leads**.
2. Extensions → Apps Script → replace everything with `apps-script.gs`.
3. Change `SECRET` to a long random text (keep it for step 3).
4. Deploy → New deployment → type **Web app** → Execute as **Me** → Who has access **Anyone** → Deploy → allow access → copy the **Web app URL**.

## 3. Cloudflare Worker
1. https://dash.cloudflare.com → sign up (free) → **Workers & Pages** → **Create** → **Create Worker** → name `4c-whatsapp` → Deploy.
2. **Edit code** → replace everything with `worker.js` → **Deploy**.
3. Storage & Databases → **KV** → Create namespace `4c-whatsapp-chats`.
4. Worker → Settings → **Bindings** → Add → KV namespace → variable name `CHATS` → the namespace above.
5. Worker → Settings → **Variables and secrets**: add the settings listed at the top of `worker.js`.
6. Copy the Worker's address, e.g. `https://4c-whatsapp.<your-name>.workers.dev`. This is the **webhook URL**.

## 4. Connect WhatsApp
Pick one route.

**A. Keep the number on the WhatsApp Business app too (coexistence), through 360dialog**
1. Sign up at 360dialog and connect **+971 52 453 4410** with their **Coexistence** option (the number must have used the WhatsApp Business app for at least 7 days). Scan the QR code in the app when asked.
2. Create an API key → put it in `WA_TOKEN`, and set `WA_MODE` = `360dialog`.
3. Set the webhook URL (step 3.6) in 360dialog.

**B. Meta directly (Cloud API)**
1. https://developers.facebook.com → My apps → Create app → type **Business** → add **WhatsApp**, in the **4C House** business portfolio.
2. Add the phone number and verify it. A number can only be on the Cloud API *or* the plain app unless it is onboarded with coexistence, which is normally offered through a Meta partner.
3. Create a **System user** with a permanent token (Business settings → Users → System users) → put it in `WA_TOKEN`; put the phone number ID in `WA_PHONE_NUMBER_ID`; set `WA_MODE` = `meta`.
4. WhatsApp → Configuration → Webhook: callback URL = the Worker URL, verify token = `VERIFY_TOKEN` → subscribe to **messages** (and **smb_message_echoes** if available).

## 5. Alerts to Kunal on WhatsApp
- `OWNER_NUMBER` must be a **different** WhatsApp number from the business number; a number cannot message itself.
- WhatsApp only allows free-form messages within 24 hours of the last message from that person. For reliable alerts, create a **Utility** message template named `lead_alert`, language English, body `New WhatsApp lead: {{1}}`, and set `OWNER_TEMPLATE` = `lead_alert` once approved.
- Email alerts to hello@4chouse.com come from the Google Sheet and work in every case.

## 6. Test before going live
Message the business number from another phone in English, then Arabic. Check: the reply arrives within about 10 seconds, the lead appears in the sheet, the alert arrives when you ask for "a person", and the assistant stays quiet after you reply yourself from the app.

## Changing what it says
Edit the `SYSTEM_PROMPT` section in `worker.js` in the Cloudflare editor and click Deploy. Keep this file in the repo in step.
