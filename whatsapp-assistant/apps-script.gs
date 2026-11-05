// 4C House WhatsApp assistant: lead log and email alerts (Google Apps Script)
// Paste into a Google Sheet: Extensions → Apps Script. See SETUP.md.

const SECRET = "PASTE-THE-SAME-RANDOM-TEXT-AS-SHEET_SECRET";
const ALERT_EMAIL = "hello@4chouse.com";
const HEADERS = ["Phone", "WhatsApp name", "Name", "Company", "Industry", "Team size", "Main problem", "Language", "Stage", "Notes", "Last message", "First seen", "Last update", "Last alert"];

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.secret !== SECRET) return ContentService.createTextOutput("forbidden");

  const sheet = getSheet_("Leads", HEADERS);
  const values = sheet.getDataRange().getValues();
  let row = values.findIndex((r, i) => i > 0 && String(r[0]) === data.phone) + 1;
  const now = new Date();
  const lead = data.lead || {};
  const existing = row ? values[row - 1] : [];
  const pick = (val, idx) => (val !== undefined && val !== "" ? val : existing[idx] || "");
  const record = [
    data.phone, data.profileName || existing[1] || "",
    pick(lead.name, 2), pick(lead.company, 3), pick(lead.industry, 4), pick(lead.team_size, 5),
    pick(lead.main_problem, 6), pick(lead.language, 7), pick(lead.stage, 8), pick(lead.notes, 9),
    data.lastMessage || existing[10] || "", existing[11] || now, now,
    data.alert ? data.alert.reason + ": " + data.alert.summary : existing[13] || "",
  ];
  if (row) sheet.getRange(row, 1, 1, record.length).setValues([record]);
  else sheet.appendRow(record);

  if (data.alert) {
    getSheet_("Alerts", ["Time", "Phone", "Reason", "Summary"]).appendRow([now, data.phone, data.alert.reason, data.alert.summary]);
    const who = [lead.name || data.profileName, lead.company].filter(String).join(", ") || data.phone;
    MailApp.sendEmail({
      to: ALERT_EMAIL,
      subject: "WhatsApp lead: " + who + " (" + data.alert.reason + ")",
      body: data.alert.summary + "\n\nPhone: " + data.phone + "\nOpen chat: https://wa.me/" + data.phone.replace(/\D/g, "") +
            "\nStage: " + (lead.stage || "") + "\nLast message: " + (data.lastMessage || "") + "\n\nLead sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    });
  }
  return ContentService.createTextOutput("ok");
}

function getSheet_(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(headers);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, headers.length).setFontWeight("bold");
  }
  return sh;
}
