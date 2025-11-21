# Setup Guide - Using Existing Google Sheets Account

Since you already have Google Sheets connected to another website, you can reuse the same credentials!

## Two Options:

### Option 1: Add New Tab to Existing Sheet (Recommended)

**Pros:** All form data in one place, easier to manage  
**Cons:** Both websites share the same spreadsheet

#### Steps:

1. **Open your existing Google Sheet** (the one used for your other website)

2. **Create a new tab:**
   - Click the "+" button at the bottom left of the sheet
   - Rename it to "Delta DMC Contacts" (or any name you prefer)

3. **Add headers in Row 1:**
   ```
   Timestamp | First Name | Last Name | Email | Company | Subject | Inquiry Type | Message
   ```

4. **Get your existing credentials:**
   - You should have a JSON file from your previous setup
   - If not, you can download it again from Google Cloud Console

5. **Update `.env.local` file:**
   ```env
   # Use the SAME Sheet ID as your other website
   GOOGLE_SHEET_ID=paste-your-existing-sheet-id-here
   
   # Name of the new tab you created
   GOOGLE_SHEET_TAB_NAME=Delta DMC Contacts
   
   # Paste the SAME credentials JSON (as single line)
   GOOGLE_SHEETS_CREDENTIALS={"type":"service_account",...entire json here...}
   ```

6. **Restart your server:**
   ```bash
   npm run dev
   ```

7. **Test it!**
   - Go to `/contact`
   - Submit a form
   - Check the "Delta DMC Contacts" tab in your sheet

---

### Option 2: Create Separate Sheet

**Pros:** Completely separate data for each website  
**Cons:** Need to manage multiple sheets

#### Steps:

1. **Create a new Google Sheet:**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Click "Blank" to create new sheet
   - Name it "Delta DMC Contact Forms"

2. **Add headers in Row 1:**
   ```
   Timestamp | First Name | Last Name | Email | Company | Subject | Inquiry Type | Message
   ```

3. **Share with your service account:**
   - Click "Share" button
   - Paste your service account email (from your JSON credentials file)
   - It looks like: `your-service@project-name.iam.gserviceaccount.com`
   - Give it "Editor" access
   - Uncheck "Notify people"
   - Click "Share"

4. **Copy the new Sheet ID:**
   - From URL: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - Copy the `SHEET_ID` part

5. **Update `.env.local` file:**
   ```env
   # Use the NEW Sheet ID
   GOOGLE_SHEET_ID=paste-new-sheet-id-here
   
   # Tab name (default is Sheet1)
   GOOGLE_SHEET_TAB_NAME=Sheet1
   
   # Use the SAME credentials JSON from your other website
   GOOGLE_SHEETS_CREDENTIALS={"type":"service_account",...entire json here...}
   ```

6. **Restart your server:**
   ```bash
   npm run dev
   ```

---

## Quick Checklist

- [ ] Decided which option to use (same sheet or new sheet)
- [ ] Created new tab or new sheet with proper headers
- [ ] Have your service account JSON credentials ready
- [ ] Updated `.env.local` with correct values
- [ ] Restarted the development server
- [ ] Tested the form submission

## Environment Variables Explained

```env
# The ID of your Google Sheet (from the URL)
GOOGLE_SHEET_ID=1abc123xyz...

# The name of the tab/sheet within the spreadsheet
GOOGLE_SHEET_TAB_NAME=Delta DMC Contacts

# Your service account credentials (entire JSON as one line)
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"..."}
```

## Finding Your Existing Credentials

If you can't find your JSON credentials file:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to **IAM & Admin** > **Service Accounts**
4. Find your service account
5. Click on it > **Keys** tab
6. Click **Add Key** > **Create New Key** > **JSON**
7. Download the file

## Need Help?

Common issues:

**"Permission denied"**
- Make sure the sheet is shared with the service account email
- Check that it has "Editor" access

**"Sheet not found"**
- Verify the GOOGLE_SHEET_ID is correct
- Check the GOOGLE_SHEET_TAB_NAME matches exactly (case-sensitive)

**"Invalid credentials"**
- Make sure the JSON is on a single line
- No extra spaces or line breaks
- Valid JSON format

## Testing

After setup, test by:
1. Going to `http://localhost:3000/contact`
2. Filling out the form
3. Submitting
4. Checking your Google Sheet for the new row

The data should appear instantly!

