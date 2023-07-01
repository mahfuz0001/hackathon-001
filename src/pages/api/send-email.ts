import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type EmailData = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, email, message } = req.body as EmailData;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: Number(process.env.MAILTRAP_PORT), // Convert port to a number
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: 'Your Name <your-email@example.com>',
      to: 'mahfujulhuq07@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>Contact Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

export default sendEmail;
