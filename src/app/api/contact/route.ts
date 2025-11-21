import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Function to append data to Google Sheets
async function appendToGoogleSheet(formData: any) {
  try {
    // Parse the service account credentials from environment variable
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || '{}');

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Prepare the row data
    const values = [
      [
        new Date().toLocaleString(), // Timestamp
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.mobile,
        formData.company,
        formData.subject,
        formData.inquiryType,
        formData.message,
      ],
    ];

    // Append the data to the sheet
    // Change 'Delta DMC Contacts' to match your tab name
    const sheetName = process.env.GOOGLE_SHEET_TAB_NAME || 'Sheet1';
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:I`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return true;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    let sheetSuccess = false;
    let emailSuccess = false;

    // Save to Google Sheets
    try {
      await appendToGoogleSheet(formData);
      sheetSuccess = true;
      console.log('✅ Data saved to Google Sheets successfully');
    } catch (sheetError) {
      console.error('❌ Google Sheets error:', sheetError);
      // Continue even if Google Sheets fails
    }

    // Send email (only if credentials are configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
        });

        // Email content
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself
          subject: `New Contact Form Submission: ${formData.subject}`,
          text: `
            Name: ${formData.firstName} ${formData.lastName}
            Email: ${formData.email}
            Mobile: ${formData.mobile}
            Company: ${formData.company}
            Inquiry Type: ${formData.inquiryType}

            Message:
            ${formData.message}
          `,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Mobile:</strong> ${formData.mobile}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
            <h3>Message:</h3>
            <p>${formData.message}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        emailSuccess = true;
        console.log('✅ Email sent successfully');
      } catch (emailError) {
        console.error('❌ Email error:', emailError);
        // Continue even if email fails
      }
    } else {
      console.log('ℹ️ Email credentials not configured, skipping email notification');
    }

    // Return success if at least Google Sheets worked
    if (sheetSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully',
        details: {
          googleSheets: sheetSuccess,
          email: emailSuccess
        }
      });
    } else {
      // If Google Sheets failed, still return success but log it
      return NextResponse.json({
        success: true,
        message: 'Form received (check server logs for details)',
        details: {
          googleSheets: sheetSuccess,
          email: emailSuccess
        }
      });
    }
  } catch (error) {
    console.error('❌ Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}