import React from "react";

function Education() {
  return (
    <div
      className="container"
      style={{ marginTop: "140px", marginBottom: "120px" }}
    >
      <div className="row">
        <div className="col-6">
          <img
  src="/media/images/learning-hub.png"
  alt="education"
  className="education-blend"
  style={{ width: "80%", maxWidth: "480px" }}
/>
        </div>
        <div className="col-6" style={{ paddingTop: "40px" }}>
          <h1
            className="mb-3"
            style={{
              fontSize: "32px",
              fontWeight: 500,
              marginBottom: "10px",
              whiteSpace: "nowrap",
            }}
          >
            Learn. Practice. Improve.
          </h1>
          <p
            style={{
              fontSize: "17px",
              color: "#b8b8d6",
              lineHeight: "1.6",
            }}
          >
            Explore structured market learning resources inside Arthiq.
Understand technical analysis, risk management, and trading psychology while practicing in a real-time simulation environment.
          </p>
          <p
            style={{
              marginTop: "30px",
              fontSize: "17px",
              color: "#b8b8d6",
              lineHeight: "1.6",
            }}
          >
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
