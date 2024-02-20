import { sendMail } from "../email/sendEmail";
import { ContactDetails } from "../model/Contact";
import { Request, Response } from "express";
import nodemailer from "nodemailer";
import { getRepository } from "typeorm";

const sendContactMail = async (
  req: Request,
  res: Response,
  firstName,
  lastName,
  email,
  organization,
  message
): Promise<void> => {
  try {
    const emailSubject = "Contact details";
    const emailText = "Hey, these are the contact details";
    const mailOptions = {
      from: { name: "Sailasree", address: process.env.GMAIL as string },
      to: "lalitha.pottabathini@thebluespire.com",
      subject: emailSubject,
      text: emailText,
      html: `
                <h1>New Contact</h1>
                <p>First Name: ${firstName}</p>
                <p>Last Name: ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Organization: ${organization}</p>
                <p>Message: ${message}</p>
              
            `,
    };

    console.log("The mail options are:", mailOptions);

    // Send reset email
    await sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, organization, message } = req.body;
  try {
    if (!firstName || !lastName || !email || !organization) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // Save contact details
    const contactRepository = getRepository(ContactDetails);
    const createdContact = await contactRepository.save({
      firstName,
      lastName,
      email,
      organization,
      message,
    });

    console.log("Contact created:", createdContact);
    await sendContactMail(
      req,
      res,
      firstName,
      lastName,
      email,
      organization,
      message
    );

    res.status(201).json({ message: "Success", createdContact });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { register };
