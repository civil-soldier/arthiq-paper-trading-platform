import React, { useState } from "react";

function CreateTicket() {
  const [openMap, setOpenMap] = useState({});

  const toggle = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

const data = [
  {
    title: "Getting Started",
    icon: "fa-solid fa-rocket",
    items: [
      "How does paper trading work?",
      "How to create an account?",
      "Understanding virtual capital",
      "How real-time simulation works",
      "Platform walkthrough"
    ],
  },
  {
    title: "Trading Simulation",
    icon: "fa-solid fa-chart-line",
    items: [
      "Placing virtual buy/sell orders",
      "Understanding order types",
      "Tracking profit & loss",
      "Managing risk in simulation",
      "Market volatility practice"
    ],
  },
  {
    title: "Dashboard & Portfolio",
    icon: "fa-solid fa-chart-pie",
    items: [
      "Portfolio analytics",
      "Performance metrics",
      "Win-rate calculation",
      "Trade history tracking",
      "Reset virtual balance"
    ],
  },
  {
    title: "Account & Security",
    icon: "fa-solid fa-shield-halved",
    items: [
      "JWT authentication",
      "Password reset",
      "Email verification",
      "Protected routes",
      "Session management"
    ],
  },
  {
    title: "Technical Support",
    icon: "fa-solid fa-code",
    items: [
      "Login issues",
      "Dashboard not loading",
      "API errors",
      "Deployment issues",
      "Report a bug"
    ],
  },
];

  return (
    <section className="support-content-wrapper mt-5 mb-4">
      <div className="support-left mt-4">
        {data.map((section, index) => (
          <div className="faq-card mb-4" key={index}>
            <div className="faq-header" onClick={() => toggle(index)}>
              <div className="faq-title">
                <i className={section.icon}></i>
                <span>{section.title}</span>
              </div>

              <span className={`arrow ${openMap[index] ? "rotate" : ""}`}>
  <i className="fa-solid fa-chevron-down"></i>
</span>
            </div>

            <div className={`accordion-body ${openMap[index] ? "open" : ""}`}>
              <ul className="faq-list container hero-section">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <button type="button" className="faq-link">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN (ZERODHA STYLE) */}
      <div className="support-right mt-4">
        {/* ALERT BOX */}
        <div className="alert-box">
          <ul>
            <li>
              <button type="button" className="alert-link">
                Platform maintenance update <br />
                [Resolved]
              </button>
            </li>
            <li>
              <button type="button" className="alert-link">
                Live market data simulation delay <br />
                [Resolved]
              </button>
            </li>
          </ul>
        </div>

        <div className="quick-links-table container hero-section">
          <div className="ql-header">
            <span>Quick links</span>
          </div>

          <div className="ql-row">
            <button type="button" className="ql-link">
              1. How paper trading differs from real trading
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              2. Reset virtual portfolio
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              3. Understanding P&L calculation
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              4. How authentication works
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              5. Contact technical support
            </button>
          </div>
        </div>

        <div className="info-box">
  <h4>About Arthiq</h4>
  <p>
    Arthiq is a real-time stock market simulation platform designed for
    practice and learning. No real trades are executed.
  </p>
</div>
      </div>
    </section>
  );
}

export default CreateTicket;
