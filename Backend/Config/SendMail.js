const nodemailer = require("nodemailer");

const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const SendMail = async ({ email, subject, html }) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      html,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};

module.exports = SendMail;
