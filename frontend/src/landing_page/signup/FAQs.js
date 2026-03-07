import React, { useState } from "react";

const faqData = [
  {
    q: "Is Arthiq connected to real stock exchanges?",
    a: "No. Arthiq is a paper trading platform that simulates real market conditions using virtual capital.",
  },
  {
    q: "Do I need to deposit real money?",
    a: "No real money is required. You trade using virtual funds.",
  },
  {
    q: "Is this suitable for beginners?",
    a: "Yes. Arthiq is designed for both beginners and experienced traders who want to test strategies safely.",
  },
  {
    q: "How realistic is the simulation?",
    a: "Price movements reflect live market data, but trades are executed virtually.",
  },
  {
    q: "Can I reset my portfolio?",
    a: "Yes. You can reset your virtual balance anytime from the dashboard.",
  }
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container faq-section mb-4">
      <h2 className="faq-title">FAQs</h2>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{item.q}</span>
              <span className={`faq-arrow ${openIndex === index ? "open" : ""}`}>
                ▾
              </span>
            </div>

            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
