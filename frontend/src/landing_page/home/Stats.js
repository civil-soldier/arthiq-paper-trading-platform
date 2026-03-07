import React from "react";

function Stats() {
  return (
    <div
      className="container"
      style={{ marginTop: "120px", marginBottom: "100px" }}
    >
      <div className="row">
        {/* LEFT SIDE TEXT */}
        <div className="col-6">
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 500,
              marginBottom: "40px",
            }}
          >
            Why practice with Arthiq?
          </h1>

          <h4 style={{ fontWeight: 500 }}>Real-time simulation</h4>
          <p
            style={{
              color: "#666",
              fontSize: "17px",
              lineHeight: "1.6",
              marginBottom: "35px",
            }}
          >
            Practice trades using live market price feeds in a safe simulated environment.
          </p>

          <h4 style={{ fontWeight: 500 }}>Zero financial risk</h4>
          <p
            style={{
              color: "#666",
              fontSize: "17px",
              lineHeight: "1.6",
              marginBottom: "35px",
            }}
          >
            All trades are executed using virtual capital. Learn without losing real money.
          </p>

          <h4 style={{ fontWeight: 500 }}>Performance tracking</h4>
          <p
            style={{
              color: "#666",
              fontSize: "17px",
              lineHeight: "1.6",
              marginBottom: "35px",
            }}
          >
            Track your portfolio growth, P&L, win ratio, and strategy performance.
          </p>

          <h4 style={{ fontWeight: 500 }}>Strategy building</h4>
          <p
            style={{
              color: "#666",
              fontSize: "17px",
              lineHeight: "1.6",
              marginBottom: "35px",
            }}
          >
            Test swing trading, intraday, and long-term strategies before going live.
          </p>
        </div>

        <div className="col-6">
          <div className="d-flex justify-content-center align-items-center">
            <img
  src="/media/images/simulation-ecosystem.png"
  alt="Ecosystem"
  className="ecosystem-blend"
  style={{
    width: "98%",
    maxWidth: "750px",
    transform: "scale(1.1)",
    marginLeft: "-1px",
  }}
/>
          </div>

          <div className="mt-4 text-end">
            {" "}
            {/* RIGHT aligned like Zerodha */}
             <button
              type="button"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                fontSize: "18px",
                marginRight: "30px",
                cursor: "pointer",
                color: "#a78bfa",
              }}
            >
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
            <button
              type="button"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                fontSize: "18px",
                marginRight: "90px",
                cursor: "pointer",
                color: "#a78bfa",
              }}
            >
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
