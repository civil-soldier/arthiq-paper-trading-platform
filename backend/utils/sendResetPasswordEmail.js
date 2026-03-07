const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendResetPasswordEmail = async (email, resetLink) => {
  try {
    console.log("📧 Sending reset email via Resend to:", email);

    const data = await resend.emails.send({
      from: "Arthiq <no-reply@mail.papertrading.site>",
      to: email,
      subject: "Reset your Arthiq password",
      html: `
        <h2>Password Reset</h2>
        <p>Click below to reset your password:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link is valid for 15 minutes.</p>
      `,
    });

    console.log("✅ Reset email sent:", data.id);
  } catch (err) {
    console.error("❌ RESEND RESET FAILED:", err);
    throw err;
  }
};

module.exports = sendResetPasswordEmail;
