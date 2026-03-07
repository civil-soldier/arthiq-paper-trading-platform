const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailOtp = async (email, otp) => {
  try {
    console.log("📧 Sending OTP via Resend to:", email);

    const data = await resend.emails.send({
      from: "Arthiq <no-reply@mail.papertrading.site>",
      to: email,
      subject: "Your Arthiq Email OTP",
      html: `
        <h2>Email Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    console.log("✅ OTP sent:", data.id);
  } catch (err) {
    console.error("❌ RESEND OTP FAILED:", err);
    throw err;
  }
};

module.exports = sendEmailOtp;
