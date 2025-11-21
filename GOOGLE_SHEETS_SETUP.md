# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the contact form.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your project ID

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, go to **APIs & Services** > **Library**
2. Search for "Google Sheets API"
3. Click on it and press **Enable**

## Step 3: Create a Service Account

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Fill in the service account details:
   - Name: `delta-dmc-contact-form` (or any name you prefer)
   - Description: `Service account for contact form submissions`
4. Click **Create and Continue**
5. Skip the optional steps and click **Done**

## Step 4: Create and Download Service Account Key

1. In the **Credentials** page, find your newly created service account
2. Click on the service account email
3. Go to the **Keys** tab
4. Click **Add Key** > **Create New Key**
5. Select **JSON** format
6. Click **Create** - this will download a JSON file to your computer
7. **Keep this file secure!** It contains sensitive credentials

## Step 5: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Delta DMC Contact Form Submissions" (or any name you prefer)
4. In the first row (header row), add these column names:
   - A1: `Timestamp`
   - B1: `First Name`
   - C1: `Last Name`
   - D1: `Email`
   - E1: `Company`
   - F1: `Subject`
   - G1: `Inquiry Type`
   - H1: `Message`
5. Copy the **Spreadsheet ID** from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part

## Step 6: Share the Sheet with Service Account

1. In your Google Sheet, click the **Share** button
2. Paste the service account email (found in the JSON file as `client_email`)
   - It looks like: `your-service-account@your-project.iam.gserviceaccount.com`
3. Give it **Editor** access
4. Uncheck "Notify people"
5. Click **Share**

## Step 7: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Update the following variables:

### GOOGLE_SHEET_ID
Replace with your spreadsheet ID from Step 5:
```
GOOGLE_SHEET_ID=your-actual-spreadsheet-id
```

### GOOGLE_SHEETS_CREDENTIALS
Open the JSON file you downloaded in Step 4 and copy its entire content. Then:
1. Minify the JSON (remove all line breaks and extra spaces)
2. Replace the value in `.env.local`

Example:
```
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"your-project","private_key_id":"abc123","private_key":"-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n","client_email":"your-service@project.iam.gserviceaccount.com","client_id":"123456","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs/your-service"}
```

**Important:** Make sure the entire JSON is on one line!

### Email Configuration (Optional)
If you want email notifications as well:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

To get a Gmail App Password:
1. Go to your Google Account settings
2. Security > 2-Step Verification (enable if not already)
3. App passwords > Select app: Mail, Select device: Other
4. Generate and copy the password

## Step 8: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to the contact page: `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check your Google Sheet - you should see a new row with the form data!

## Troubleshooting

### Error: "Google Sheets API has not been used in project"
- Make sure you enabled the Google Sheets API in Step 2

### Error: "The caller does not have permission"
- Make sure you shared the sheet with the service account email in Step 6
- Verify the service account has Editor access

### Error: "Invalid credentials"
- Check that the JSON in GOOGLE_SHEETS_CREDENTIALS is properly formatted
- Make sure there are no extra spaces or line breaks
- Verify the JSON is valid

### Data not appearing in sheet
- Check the browser console for errors
- Check the server logs for error messages
- Verify the GOOGLE_SHEET_ID is correct
- Make sure the sheet name is "Sheet1" or update the range in the code

## Security Notes

- **Never commit `.env.local` to version control**
- The `.env.local` file is already in `.gitignore`
- Keep your service account JSON file secure
- Don't share your credentials publicly
- Rotate credentials if they are ever exposed

## Support

If you encounter any issues, check:
1. Google Cloud Console for API quotas and errors
2. Browser console for client-side errors
3. Server logs for backend errors
4. Google Sheet permissions

