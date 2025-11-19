const { Resend } = require("resend");
const dotenv = require('dotenv')
dotenv.config()
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "no-reply@yourdomain.com",
  to: email,
  subject: subject,
  html: html,
});
