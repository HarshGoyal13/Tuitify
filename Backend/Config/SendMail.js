const nodemailer = require("nodemailer");

const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail.com",
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // app password
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
