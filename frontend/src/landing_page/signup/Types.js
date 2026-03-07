import React from "react"

function Types() {
  return (
    <div className="container types-section">
      {/* Heading */}
      <div className="row text-center mb-5">
        <h2 className="types-title">Choose how you want to practice</h2>
      </div>

      {/* Grid */}
      <div className="row g-4">

        {/* Individual */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <h4>Beginner Mode</h4>
            <p>Start with guided tips and simplified tools</p>
          </div>
        </div>

        {/* HUF (highlighted) */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <h4>Advanced Mode</h4>
            <p>Access full dashboard and analytics tools</p>
          </div>
        </div>

        {/* NRI */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <h4>Long-term Simulation</h4>
            <p>Practice portfolio building strategies</p>
          </div>
        </div>

        {/* Minor */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <h4>Minor Account</h4>
            <p>
              Teach your little ones about money & invest for their future
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Types;
