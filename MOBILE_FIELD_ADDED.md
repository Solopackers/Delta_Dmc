# Mobile Number Field Added ✅

## What Changed

I've added a **Mobile Number** field to the contact form!

### Updates Made:

1. ✅ **Contact Form** - Added mobile number input field
2. ✅ **API Route** - Updated to handle mobile number
3. ✅ **Google Sheets Integration** - Mobile number will be saved
4. ✅ **Email Template** - Mobile number included in notifications

---

## 🔴 IMPORTANT: Update Your Google Sheet Headers

You need to update the headers in your Google Sheet to include the mobile number column.

### Step 1: Open Your Google Sheet

Go to: https://docs.google.com/spreadsheets/d/1tGQ46q41DlADFUnnsLu3Si-Bo_q-P2ymouAgdOpE2BI/edit

### Step 2: Go to "Delta DMC Contacts" Tab

Click on the tab you created for Delta DMC contacts.

### Step 3: Update Headers in Row 1

**OLD Headers (8 columns):**
```
Timestamp | First Name | Last Name | Email | Company | Subject | Inquiry Type | Message
```

**NEW Headers (9 columns):**
```
Timestamp | First Name | Last Name | Email | Mobile | Company | Subject | Inquiry Type | Message
```

### Detailed Column Layout:

| Column | Header | Description |
|--------|--------|-------------|
| A | Timestamp | When form was submitted |
| B | First Name | User's first name |
| C | Last Name | User's last name |
| D | Email | User's email address |
| E | Mobile | **NEW** - User's mobile number |
| F | Company | Company/Agency name |
| G | Subject | Form subject |
| H | Inquiry Type | Type of inquiry |
| I | Message | User's message |

### Quick Copy-Paste:

Just copy these headers and paste them into cells A1 through I1:

```
Timestamp
First Name
Last Name
Email
Mobile
Company
Subject
Inquiry Type
Message
```

---

## Form Layout

The contact form now has this structure:

**Row 1:**
- First Name | Last Name

**Row 2:**
- Email | Mobile Number

**Row 3:**
- Company | Subject

**Row 4:**
- Inquiry Type (dropdown)

**Row 5:**
- Message (textarea)

---

## Mobile Number Field Details

- **Field Type:** `tel` (telephone input)
- **Placeholder:** `+91 1234567890`
- **Required:** Yes
- **Validation:** Browser's built-in tel validation

---

## Testing

After updating the Google Sheet headers:

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Go to contact page:**
   ```
   http://localhost:3000/contact
   ```

3. **Fill out the form** including the mobile number

4. **Submit the form**

5. **Check your Google Sheet** - You should see:
   - All previous columns
   - **NEW Mobile column** with the phone number you entered

---

## Example Data Row

After submission, a row in your sheet will look like:

| Timestamp | First Name | Last Name | Email | Mobile | Company | Subject | Inquiry Type | Message |
|-----------|------------|-----------|-------|--------|---------|---------|--------------|---------|
| 11/21/2025, 3:45:23 PM | John | Doe | john@example.com | +91 9876543210 | ABC Tours | Partnership Inquiry | B2B Partnership | We are interested in partnering... |

---

## If You Already Have Data

If you already have submissions in your sheet:

1. **Insert a new column** between Email (D) and Company (E)
2. **Name it "Mobile"**
3. Old data will have empty mobile cells (which is fine)
4. New submissions will include mobile numbers

**OR**

1. Just add "Mobile" as the 5th header (column E)
2. Shift Company, Subject, Inquiry Type, Message to columns F, G, H, I
3. The API will automatically put data in the right columns

---

## What Happens Now

When users submit the contact form:

1. ✅ Form collects: First Name, Last Name, Email, **Mobile**, Company, Subject, Inquiry Type, Message
2. ✅ Data is saved to Google Sheets with mobile number in column E
3. ✅ Email notification (if configured) includes mobile number
4. ✅ User sees success message

---

## Need Help?

If you see any errors after updating:

1. Make sure the headers are exactly as shown above
2. Make sure "Mobile" is in column E
3. Restart the development server
4. Check server logs for any errors

---

**Don't forget to update the Google Sheet headers before testing!** 📊

