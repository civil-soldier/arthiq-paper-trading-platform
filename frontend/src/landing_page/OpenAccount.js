import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function OpenAccount() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/signup") {
      // Already on signup page → scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Navigate to signup page
      navigate("/signup");
    }
  };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center d-flex flex-column align-items-center">
        <h1
          className="mt-5"
          style={{ fontWeight: 500, fontSize: "25px" }}
        >
          Start practicing today
        </h1>

        <p
          className="mt-3"
          style={{
            fontSize: "18px",
            color: "#555",
            letterSpacing: "0.3px",
          }}
        >
          Create a free account and begin trading with virtual capital in minutes.
        </p>

        <button
          onClick={handleClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            background: hover ? "#1a1717ff" : "linear-gradient(90deg, #6366f1, #0ea5e9)",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            width: "240px",
            borderRadius: "4px",
            fontSize: "18px",
            fontWeight: "500",
            marginTop: "20px",
            cursor: "pointer",
            transition: "0.2s ease",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;