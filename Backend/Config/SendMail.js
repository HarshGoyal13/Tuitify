const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const SendMail = async ({ email, subject, html }) => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",  // or verified domain
      to: email,
      subject,
      html,
    });
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email failed:", error);
  }
};

module.exports = SendMail;
