import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "../../api/api";


function Signup() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleGetOtp = async () => {
    try {
      if (mobile.length !== 10) {
        alert("Enter valid mobile number");
        return;
      }

      await axios.post("/auth/mobile", { mobile });
      navigate("/signup/otp", { state: { mobile } });
    } catch (err) {
      alert(err.response?.data?.message || "Server error");
    }
  };

  return (
    <div className="signup-wrapper">

      <div className="signup-container">

        {/* LEFT IMAGE */}
        <div className="signup-left">
          <img
            src="/media/images/hero-dashboard1.png"
            alt="Arthiq Dashboard"
            className="signup-image"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="signup-right">
          <h2 className="signup-title">Create your free account</h2>

          <p className="signup-subtitle">
            Enter your mobile number to begin your virtual trading journey
          </p>

          <div className="phone-wrapper">
            <div className="country-box">
              🇮🇳 +91
            </div>

            <input
              type="tel"
              className="phone-input"
              placeholder="Enter your mobile number"
              maxLength="10"
              value={mobile}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setMobile(value);
              }}
            />
          </div>

          <button className="signup-btn" onClick={handleGetOtp}>
            Get OTP
          </button>

          <p className="terms-text">
            By continuing, you agree to Arthiq’s Terms of Service & Privacy Policy.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;