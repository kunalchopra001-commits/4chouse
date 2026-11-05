# 4C House WhatsApp assistant: setup

Instant, natural WhatsApp replies in the customer's language, lead qualification, the free-diagnostic booking link, a Google Sheet lead log, email alerts, and a private mobile inbox where Kunal reads every chat, replies himself and switches the AI off or on per chat. When Kunal replies in a chat, the AI stays quiet there for 12 hours.

| Part | Where |
|---|---|
| `worker.js` | The assistant and the inbox. Runs on Cloudflare Workers (free plan). The instructions and knowledge are in the `SYSTEM_PROMPT` section near the top. |
| `apps-script.gs` | Lead sheet and email alerts. Runs in a Google Sheet. |

Nothing here is part of the website deploy. Keys and passwords go only into Cloudflare and Apps Script settings.

## 1. Claude API key (done)
platform.claude.com → workspace "WhatsApp assistant" with a monthly spend limit → API key.

## 2. Lead sheet and email alerts (done)
Google Sheet **4C House WhatsApp leads** (hello@4chouse.com) with `apps-script.gs` deployed as a web app (Execute as Me, access Anyone). Test with `testSetup` → Run.

## 3. Cloudflare Worker
1. https://dash.cloudflare.com → sign up (free) → **Workers & Pages** → **Create** → **Create Worker** → name `4c-whatsapp` → Deploy.
2. **Edit code** → replace everything with `worker.js` → **Deploy**.
3. Storage & Databases → **KV** → Create namespace `4c-whatsapp-chats`.
4. Worker → Settings → **Bindings** → Add → KV namespace → variable name `CHATS` → the namespace above.
5. Worker → Settings → **Variables and secrets** (use **Secret** for anything marked secret):
   - `ANTHROPIC_API_KEY` (secret), `SHEET_WEBHOOK_URL` (text), `SHEET_SECRET` (secret), `INBOX_PASSWORD` (secret), `VERIFY_TOKEN` (secret)
   - after step 4: `WA_TOKEN` (secret), `WA_PHONE_NUMBER_ID` (text), optionally `APP_SECRET` (secret)
6. Note the Worker's address, e.g. `https://4c-whatsapp.<your-name>.workers.dev`. This is the **webhook URL**; the inbox is at the same address plus `/inbox` (username `kunal`).

## 4. Meta: WhatsApp Cloud API on +971 52 453 4410
Important: a number on the Cloud API cannot stay in the WhatsApp or WhatsApp Business app. Before moving it, export any chats you want to keep (in the app: chat → ⋮ → More → Export chat), then delete the WhatsApp account from the app (Settings → Account → Delete account). Contacts can keep messaging the same number; replies then come from the assistant and the inbox.
1. https://developers.facebook.com → My apps → **Create app** → use case **Connect with customers through WhatsApp** → business portfolio **4C House** (not Skyloov).
2. WhatsApp → **API Setup** → **Add phone number** → display name **4C House of Advertising**, category, then verify **+971 52 453 4410** by SMS or voice call.
3. Copy the **Phone number ID** → `WA_PHONE_NUMBER_ID`.
4. Business settings → Users → **System users** → Add (Admin) → **Assign assets**: the app (full control) and the WhatsApp account (full control) → **Generate token** for the app with permissions `whatsapp_business_messaging` and `whatsapp_business_management`, expiry **Never** → `WA_TOKEN`.
5. WhatsApp → **Configuration** → Webhook → **Edit**: Callback URL = the Worker URL, Verify token = `VERIFY_TOKEN` → Verify and save → **Manage** → subscribe to **messages**.
6. Optional: App settings → Basic → **App secret** → `APP_SECRET`.
7. Set the WhatsApp profile (photo = 4C tile, about, description, website, email) in WhatsApp Manager → Phone numbers → Profile.
8. Add a payment method in WhatsApp Manager (needed for any paid messages later) and start **Business verification** in Business settings → Security centre, which raises sending limits.

## 5. Test before going live
Message the business number from another phone in English, then Arabic. Check: the reply arrives within about 10 seconds; the lead appears in the sheet; asking for "a person" sends an alert email with an inbox link; the chat shows in the inbox; replying from the inbox reaches the phone and pauses the AI; switching AI on resumes it.

## Daily use
- Open the inbox on your phone and choose **Add to Home Screen**; it opens like an app.
- WhatsApp allows free replies only within 24 hours of the customer's last message. The inbox warns you when a chat is outside that window.

## Changing what it says
Edit the `SYSTEM_PROMPT` section in `worker.js` in the Cloudflare editor and click Deploy. Keep this file in the repo in step.
