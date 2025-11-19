exports.getAdminEmailTemplate = ({ name, email, subject, message }) => {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8;">
      <h2 style="color:#1E1E1E;">New Contact Us Message</h2>
      ${name ? `<p><strong>Name:</strong> ${name}</p>` : ""}
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="background:#fff; padding:10px; border-radius:5px; border:1px solid #ccc;">${message}</p>
    </div>
  `;
};


// User confirmation template
exports.getUserConfirmationTemplate = (name = "User") => {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f6f8; padding: 40px 20px; text-align: center;">
      <h1 style="font-size: 28px; color: #1E1E1E; margin-bottom: 10px; font-weight: bold;">Tuitify</h1>
      <h2 style="font-size: 22px; color: #333; margin-bottom: 20px;">Hello ${name}!</h2>
      <p style="font-size: 16px; color: #555; margin-bottom: 25px;">
        Thank you for contacting us. Your message has been sent successfully. Our team will get back to you shortly.
      </p>
      <p style="font-size: 14px; color: #888; margin-top: 15px;">
        &copy; 2025 Tuitify. All rights reserved.
      </p>
    </div>
  `;
};