import React from "react";

function Pricing() {
  return (
    <div
      className="pricing-wrapper"
      style={{ marginTop: "130px", marginBottom: "120px" }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-5">
            <h1 className="pricing-title">
              Risk-free paper trading
            </h1>

            <p className="pricing-subtext">
              Experience real market volatility with virtual funds.
Test strategies, manage risk, and improve discipline —
without losing real capital.
            </p>
          </div>

          {/* RIGHT SIDE SINGLE IMAGE */}
          <div className="col-lg-7 text-center">
            <img
              src="/media/images/paperTradingFeature.png"
              alt="Paper trading"
              className="pricing-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;