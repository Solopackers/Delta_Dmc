# Environment Variables Setup

For the contact form to work, you need to set up environment variables. Create a file named `.env.local` in the root of your project with the following content:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Important: App Password Setup

For security reasons, Gmail requires an "App Password" rather than your regular password when using it with applications:

1. Go to your Google Account → Security → 2-Step Verification → App passwords
2. Select "Mail" as the app and "Other" as the device (name it "Delta DMC Website")
3. Click "Generate" and copy the 16-character password
4. Use this generated password in your `.env.local` file

Your actual Gmail password will not work directly with this application due to Google's security policies.

## After Setting Up

1. Make sure the `.env.local` file is in your project root
2. Restart your development server: `npm run dev`
3. Test the contact form to ensure emails are being received

## Security Notes

- NEVER commit the `.env.local` file to version control
- The `.env.local` file is already in your `.gitignore` file
- For production, set up these environment variables in your hosting platform's dashboard 