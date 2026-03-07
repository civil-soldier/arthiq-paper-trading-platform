import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <div className="hero-wrapper">
      <div className="container hero-content text-center d-flex flex-column align-items-center">

        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="hero-image mb-5"
        />

        <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "32px" }}>
          Trade smarter. Practice first.
        </h1>

        <p
          className="mt-3"
          style={{ fontSize: "23px", color: "#b8b8d6" }}
        >
          Arthiq is a real-time paper trading platform designed to help you practice stock market strategies using virtual capital.
No real money. No financial risk.
        </p>

        <Link to="/signup" style={{ textDecoration: "none" }}>
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              backgroundColor: hover ? "#1a1717" : "#7c3aed",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              width: "240px",
              borderRadius: "6px",
              fontSize: "18px",
              fontWeight: "500",
              marginTop: "20px",
              cursor: "pointer",
              transition: "0.2s ease",
            }}
          >
            Sign up for free
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Hero;