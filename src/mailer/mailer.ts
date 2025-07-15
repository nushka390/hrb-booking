import nodemailer from 'nodemailer';
import "dotenv/config"

export const sendEmail = async (
    email: string,
    subject: string,
    message: string,
    html: string
) => {
    try {
        const transporter = nodemailer.createTransport({ 
            service: 'gmail', // Gmail service
            auth: { // Authentication details for the email account
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions: nodemailer.SendMailOptions = { // Mail options for the email to be sent
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: message,
            html: html
        };

        const mailRes = await transporter.sendMail(mailOptions); // Send the email using the transporter

        if (mailRes.accepted.length > 0) {  // Check if the email was accepted
            return 'Email sent successfully';
        } else if (mailRes.rejected.length > 0) {
            return 'Email not sent';
        } else {
            return 'Email server error';
        }
    } catch (error: any) {
        return JSON.stringify(error.message, null, 500); // Return the error message if an error occurs
    }
};