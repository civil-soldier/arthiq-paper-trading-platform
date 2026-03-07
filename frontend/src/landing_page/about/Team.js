import React from "react";

function Team() {
  return (
    <div className="container hero-section">
      {/* Heading */}
      <div className="row mb-5 text-center d-flex flex-column align-items-center">
        <h1 className="mt-2" style={{ fontWeight: 500, fontSize: "25px" }}>
          People
        </h1>
      </div>

      {/* 2 Column Section */}
      <div
        className="row text-muted fs-6"
        style={{ lineHeight: "1.8" }}
      >
        {/* LEFT COLUMN */}
        <div
          className="col-6"
          style={{ textAlign: "center", marginTop: "5px" }}
        >
          <img
            src="/media/images/Yash1.png"
            alt="Yash Kumar"
            style={{ width: "300px", borderRadius: "100%", height: "300px" }}
          />
          <h3 style={{ marginTop: "10px", fontSize: "20px" }}>
            Yash Kumar
          </h3>
          <p>Founder & CEO</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-6" style={{ marginTop: "25px" }}>
          <p>
  Yash founded Arthiq as a full-stack fintech project focused on
  real-time paper trading simulation.
</p>

<p>
  With a background in Electronics & Communication and a strong
  interest in software development, he enjoys building scalable,
  production-ready systems.
</p>

<p>
  This project includes authentication flows, dashboard analytics,
  protected routes, API integration, and deployment on modern
  cloud infrastructure.
</p>

<p>
  Outside of coding, he enjoys basketball and exploring new
  product ideas in the fintech space.
</p>
        </div>
      </div>
    </div>
  );
}

export default Team;