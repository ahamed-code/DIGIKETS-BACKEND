import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,   // your email
        pass: process.env.SMTP_PASS,   // app password
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL, // where you want to receive mails
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({ success: false, error: "Mail sending failed" });
  }
};
