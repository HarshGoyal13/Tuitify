const SendGmail = require("../config/SendMail");

const { getAdminEmailTemplate, getUserConfirmationTemplate} = require("../Template/template");

exports.contactUS = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // 1️⃣ Send email to admin
    await SendGmail({
      email: process.env.EMAIL_USER, // your support/admin email
      subject: `Contact Us Form: ${subject}`,
      html: getAdminEmailTemplate({ name, email, subject, message }),
    });

    // 2️⃣ Send confirmation email to user
    await SendGmail({
      email: email, // user's email
      subject: "Tuitify: Your message has been received",
      html: getUserConfirmationTemplate(name),
    });

    res.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};
