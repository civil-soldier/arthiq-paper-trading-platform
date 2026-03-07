import React from "react";

function Benefits() {
  return (
    <div className="container benefits-section">
      <div className="row align-items-start">

        {/* LEFT SIDE */}
       <div className="col-md-5 benefits-left">
  <div className="benefits-image-wrapper">
    <img
      src="/media/images/acop.png"
      alt="Benefits"
      className="benefits-image"
    />
  </div>

  <h2 className="benefits-title">
    Benefits of using Arthiq
  </h2>
</div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 benefits-right">
          <div className="benefit-item">
            <h4>Completely risk-free</h4>
<p>
  Trade using virtual capital and experiment freely without financial loss.
</p>
          </div>

          <div className="benefit-item">
            <h4>Real-time market simulation</h4>
<p>
  Experience live market conditions with realistic price movements.
</p>
          </div>

          <div className="benefit-item">
            <h4>Focused learning environment</h4>
<p>
  No distractions. Just clean tools to practice and improve your strategy.
</p>
          </div>

          <div className="benefit-item">
            <h4>Track and analyze performance</h4>
<p>
  Review your trades, win-rate, and portfolio growth with built-in analytics.
</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Benefits;
