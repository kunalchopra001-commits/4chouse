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

## 4. Meta: WhatsApp Cloud API on a second number
The assistant runs on a **second number**. +971 52 453 4410 stays in the WhatsApp Business app as it is. The second number must not be registered on WhatsApp (delete any WhatsApp account on it first) and must be able to receive one SMS or voice call.
1. https://developers.facebook.com → My apps → **Create app** → use case **Connect with customers through WhatsApp** → business portfolio **4C House** (not Skyloov).
2. WhatsApp → **API Setup** → **Add phone number** → display name **4C House of Advertising**, category, then verify the second number by SMS or voice call.
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

## Status and next steps (22 Nov 2026)
- Done: the Claude key, the lead sheet, the Cloudflare Worker and the inbox. The Meta app "4C Website Assistant" exists in the 4C House portfolio.
- Meta gave the app a free **test number**, +1 555-168-1653 (display name "Test Number", unverified). Use it to test the whole flow now:
  1. In WhatsApp → API Setup, choose the test number as the sender, copy its **Phone number ID** into `WA_PHONE_NUMBER_ID`, and add up to 5 recipient phones (Kunal's own) to the "To" list.
  2. Create a system-user token (step 4 above) and put it in `WA_TOKEN`. The 24-hour temporary token also works for a quick test.
  3. Set the webhook (step 5) and subscribe to **messages**.
  4. From Kunal's phone, message the test number and run the checks in section 5.
- The test number can't be shown to customers or renamed. Going live needs the second real number (step 4.2), followed by display-name approval.
- **Meta business verification** was rejected and Kunal is reapplying. Common causes:
  - the legal name doesn't match the trade licence exactly ("4C House of Advertising LLC")
  - the address doesn't match across documents
  - the documents are unreadable
  - the domain or phone can't be confirmed
  Use the trade licence (533880), a document showing the same address, the verified domain 4chouse.com and hello@4chouse.com.
- Once the second number is live, the website's WhatsApp buttons (currently +971 52 453 4410, eight links in `index.html`) can point to it, if Kunal wants the AI to answer website enquiries.
