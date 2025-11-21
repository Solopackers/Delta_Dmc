# Final Setup Steps - Google Sheets Integration

## ✅ Configuration Complete!

I've already configured your `.env.local` file with your existing Google Sheets credentials.

## 🎯 What You Need to Do Now:

### Step 1: Open Your Google Sheet

1. Go to your existing Google Sheet with ID: `1tGQ46q41DlADFUnnsLu3Si-Bo_q-P2ymouAgdOpE2BI`
2. You can access it directly here:
   ```
   https://docs.google.com/spreadsheets/d/1tGQ46q41DlADFUnnsLu3Si-Bo_q-P2ymouAgdOpE2BI/edit
   ```

### Step 2: Create a New Tab

1. At the bottom of the sheet, click the **"+"** button to add a new tab
2. Rename the new tab to: **"Delta DMC Contacts"** (exactly as shown)
3. Or you can name it something else, but then update the `.env.local` file with the new name

### Step 3: Add Headers

In the new tab, add these headers in **Row 1**:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | First Name | Last Name | Email | Company | Subject | Inquiry Type | Message |

Just copy and paste these into cells A1 through H1:
```
Timestamp
First Name
Last Name
Email
Company
Subject
Inquiry Type
Message
```

### Step 4: Restart Your Development Server

1. Stop the current server (press `Ctrl + C` in the terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

### Step 5: Test It!

1. Open your browser and go to: `http://localhost:3000/contact`
2. Fill out the contact form with test data
3. Submit the form
4. Check your Google Sheet's "Delta DMC Contacts" tab
5. You should see a new row with the form data! 🎉

---

## 📋 Current Configuration

Your `.env.local` is configured with:

- ✅ **Sheet ID**: `1tGQ46q41DlADFUnnsLu3Si-Bo_q-P2ymouAgdOpE2BI`
- ✅ **Tab Name**: `Delta DMC Contacts`
- ✅ **Service Account**: `lead-form-bali@landing-page-bali.iam.gserviceaccount.com`
- ✅ **Credentials**: Already configured

---

## 🔧 If You Want to Use a Different Tab Name

If you want to name your tab something different (e.g., "Contact Forms" or "Leads"):

1. Create the tab with your preferred name
2. Update `.env.local`:
   ```env
   GOOGLE_SHEET_TAB_NAME=Your Tab Name Here
   ```
3. Restart the server

---

## 🆘 Troubleshooting

### "Permission denied" error
- The sheet is already shared with your service account, so this shouldn't happen
- If it does, make sure the tab name matches exactly (case-sensitive)

### "Sheet not found" error
- Check that the tab name in `.env.local` matches the actual tab name
- Tab names are case-sensitive: "Delta DMC Contacts" ≠ "delta dmc contacts"

### Data not appearing
- Check browser console for errors (F12)
- Check server terminal for error messages
- Verify the tab name is correct
- Make sure you restarted the server after changing `.env.local`

---

## 📊 What Happens When Form is Submitted

1. User fills out the contact form
2. Data is sent to the API
3. **New row is added to Google Sheets** with timestamp
4. Email notification is sent (if configured)
5. User sees success message

---

## 🎉 You're Almost Done!

Just complete Steps 1-5 above and you'll be all set!

The integration will:
- ✅ Save all form submissions to Google Sheets automatically
- ✅ Include timestamp for each submission
- ✅ Work alongside your existing Bali landing page forms
- ✅ Keep data organized in separate tabs

---

## 📧 Email Configuration (Optional)

If you want email notifications when forms are submitted:

1. Update `.env.local`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   ```

2. To get Gmail App Password:
   - Go to Google Account Settings
   - Security > 2-Step Verification (enable it)
   - App passwords > Generate new password
   - Copy and paste into `.env.local`

3. Restart the server

---

Need help? Let me know! 😊

