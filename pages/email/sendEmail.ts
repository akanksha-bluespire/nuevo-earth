
import nodemailer from 'nodemailer';
import { createTransport, Transporter } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
const dotenv = require('dotenv');
dotenv.config();
const transporter: Transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'gmail',
    secure: true,
    auth: {
      user: process.env.GMAIL as string, // sender gmail address
      pass: process.env.APP_PASSWORD as string, // app password of Gmail obtained through Gmail settings
    },
  });
  
  const sendMail = async (mailOptions: MailOptions): Promise<void> => {
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email has been sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  export { sendMail };