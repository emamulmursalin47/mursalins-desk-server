import { Request, Response } from 'express';
import transporter from '../config/email';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

export const sendContactEmail = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = contactFormSchema.parse(req.body);

    const htmlEmail = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #333; text-align: center; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
          <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px;">
            <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">${message}</p>
          </div>
          <p style="text-align: center; margin-top: 30px; font-size: 0.9em; color: #777;">This email was sent from your portfolio contact form.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address (client's email) with name
      to: process.env.EMAIL_USER, // Your email address
      subject: `Contact Form: ${subject}`,
      html: htmlEmail,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};