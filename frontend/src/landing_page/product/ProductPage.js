import React from "react";

function ProductPage() {
  return (
    <div className="products-wrapper">

      {/* HERO */}
      <div className="products-hero text-center">
        <h1>Everything you need to master the markets</h1>
        <p>
          Arthiq provides a powerful virtual trading environment designed
          for learning, testing and improving your strategies.
        </p>
      </div>

      {/* PRODUCT 1 */}
      <div className="product-card">
        <div className="product-text">
          <h2>Arthiq Trader</h2>
          <p>
            Experience real-market simulations with virtual capital.
            Place trades, manage positions and track performance in real-time.
          </p>
        </div>
        <img src="/media/images/trader.svg" alt="Trader" />
      </div>

      {/* PRODUCT 2 */}
      <div className="product-card reverse">
        <div className="product-text">
          <h2>Arthiq Insights</h2>
          <p>
            Advanced analytics and performance tracking tools to
            understand your trading behavior and improve decisions.
          </p>
        </div>
        <img src="/media/images/insights.svg" alt="Insights" />
      </div>

      {/* PRODUCT 3 */}
      <div className="product-card">
        <div className="product-text">
          <h2>Arthiq Learn</h2>
          <p>
            Bite-sized educational modules designed to help you
            understand markets, risk management and strategy building.
          </p>
        </div>
        <img src="/media/images/learn.svg" alt="Learn" />
      </div>

    </div>
  );
}

export default ProductPage;