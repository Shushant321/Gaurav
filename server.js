import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, company, phone, service, budget, message, timeline, referral } = req.body;

  // Basic server-side validation (optional but recommended)
  if (!name || !email || !company || !service || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Maileroo SMTP transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.maileroo.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false, // false for 587 (STARTTLS). true only for 465
    auth: {
      user: process.env.SMTP_USER, // Maileroo SMTP username/email
      pass: process.env.SMTP_PASS, // Maileroo SMTP password
    },
    requireTLS: true, // ensures STARTTLS is used on 587
  });

  const mailOptions = {
    // IMPORTANT: "from" must be the SMTP account email (Maileroo rule)
    from: `VConnect360 Contact Form <${process.env.FROM_EMAIL}>`,

    // Where you want to receive the contact submissions
    to: process.env.RECEIVER_EMAIL,

    // So you can hit "Reply" and reply to the user's email
    replyTo: `"${name}" <${email}>`,

    subject: `New Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone || "-"}
Service: ${service}
Budget: ${budget || "-"}
Timeline: ${timeline || "-"}
Referral: ${referral || "-"}
Message: ${message}
    `.trim(),
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Mail send failed:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
