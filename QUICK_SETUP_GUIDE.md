# Quick Setup Guide - Google Sheets Integration

## What You Need

1. A Google Cloud Project with Google Sheets API enabled
2. A Service Account with JSON credentials
3. A Google Sheet shared with the service account
4. Environment variables configured

## Quick Steps

### 1. Google Cloud Setup (5 minutes)
- Create project at [console.cloud.google.com](https://console.cloud.google.com/)
- Enable Google Sheets API
- Create Service Account
- Download JSON key file

### 2. Google Sheet Setup (2 minutes)
- Create a new Google Sheet
- Add headers: `Timestamp | First Name | Last Name | Email | Company | Subject | Inquiry Type | Message`
- Copy the Sheet ID from URL
- Share sheet with service account email (from JSON file)

### 3. Environment Variables (2 minutes)
Edit `.env.local` file:

```env
GOOGLE_SHEET_ID=paste-your-sheet-id-here
GOOGLE_SHEETS_CREDENTIALS=paste-entire-json-content-as-single-line
```

### 4. Test
```bash
npm run dev
```
Visit `/contact` and submit a form!

## Need Help?

See `GOOGLE_SHEETS_SETUP.md` for detailed step-by-step instructions.

## Form Data Structure

When a user submits the contact form, the following data is saved to Google Sheets:

| Column | Data |
|--------|------|
| Timestamp | Submission date and time |
| First Name | User's first name |
| Last Name | User's last name |
| Email | User's email address |
| Company | Company/Agency name |
| Subject | Form subject |
| Inquiry Type | Type of inquiry selected |
| Message | User's message |

## Features

✅ Automatic data saving to Google Sheets  
✅ Email notifications (optional)  
✅ Timestamp for each submission  
✅ Secure credential management  
✅ Error handling - form still works if Sheets fails  

## Important Notes

- Keep your `.env.local` file secure and never commit it
- The service account JSON must be on a single line in the env variable
- Make sure to share the Google Sheet with the service account email
- Restart the dev server after changing environment variables

