import React from "react";

function Footer() {
  return (
    <>
      <style>
        {`
        .footer-container {
          width: 100%;
          padding: 60px 100px;
          margin-top: 60px;
          background-color: #12121f;
        }
        .footer-logo {
          width: 150px;
          margin-bottom: 15px;
        }
        .footer-heading {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 16px;
        }
        .footer-link {
          color: #b8b8d6 !important;
          font-size: 14px;
          font-weight: 400;
          text-decoration: none;
          margin-bottom: 20px;
          display: flex;
        }
        .footer-link:hover {
          color: #a78bfa !important;
        }
        .footer-small {
          font-size: 14px;
          color: #9a9acb;
        }
        .footer-icons i {
          font-size: 20px;
          margin-right: 15px;
          color: #666;
          cursor: pointer;
        }
        .footer-icons i:hover {
          color: #a78bfa !important
        }
        .footer-icons hr {
          margin: 10px 0;
          border: none;
          border-top: 1px solid #ccc;
        }
        .footer-disclaimer {
          padding: 10px 2px;
          background-color: #12121f;
          font-size: 11px;
          color: #8c8cc4;
          line-height: 1.7;
          margin-top: 0px;
        }
        .footer-disclaimer a {
          color: #a78bfa !important;
          text-decoration: none;
        }
        .footer-disclaimer a:hover {
          text-decoration: underline;
        }
        .footer-bottom-menu {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          font-weight: 500;
          font-size: 12px;
          margin-bottom: -50px;
          margin-left: 120px;
        }
        .footer-bottom-menu a {
          color: #878787ff !important;
          text-decoration: none;
        }
        .footer-bottom-menu a:hover {
          color: #a78bfa !important;
          text-decoration: none;
        }
        `}
      </style>

      <div className="container-fluid footer-container">
        <div className="row">
          {/* LEFT SIDE BLOCK */}
          <div className="col-md-3 col-sm-12 mb-5">
            <img
              src="/media/images/logo1.svg"
              alt="Logo"
              className="footer-logo"
            />

            <p className="footer-small">
              Free & Open Paper Trading Platform<br/>
Built for learners, developers & market enthusiasts.<br/><br/>
              © 2026, Arthiq Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="footer-icons">
              <a href="/">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <hr></hr>

              <a href="/">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="/">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>

          {/* COLUMNS */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Platform</h4>
            <a className="footer-link" href="">
              Paper Trading Simulator
            </a>
            <a className="footer-link" href="">
              Virtual Portfolio
            </a>
            <a className="footer-link" href="">
              Market Watch
            </a>
            <a className="footer-link" href="">
              Strategy Backtesting
            </a>
            <a className="footer-link" href="">
              Performance Analytics
            </a>
            <a className="footer-link" href="">
              Learning Dashboard
            </a>
            <a className="footer-link" href="">
              Developer API (Coming soon)
            </a>
          </div>

          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Support</h4>
            <a className="footer-link" href="">
              Help Center
            </a>
            <a className="footer-link" href="">
              Contact
            </a>
            <a className="footer-link" href="">
              Documentation
            </a>
            <a className="footer-link" href="">
              FAQs
            </a>
            <a className="footer-link" href="">
              Report a Bug
            </a>
            <a className="footer-link" href="">
              Feature Requests
            </a>
            <a className="footer-link" href="">
              Community Discussions
            </a>
            <a className="footer-link" href="">
              System Status
            </a>
          </div>

          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Company / Project</h4>
            <a className="footer-link" href="">
              About Arthiq
            </a>
            <a className="footer-link" href="">
              Open Source Philosophy
            </a>
            <a className="footer-link" href="">
              Contribute on GitHub
            </a>
            <a className="footer-link" href="">
              Roadmap
            </a>
            <a className="footer-link" href="">
              Changelog
            </a>
            <a className="footer-link" href="">
              Blog (Coming soon)
            </a>
            <a className="footer-link" href="">
              Careers (Future)
            </a>
          </div>

          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Quick links</h4>
            <a className="footer-link" href="">
              Upcoming IPOs
            </a>
            <a className="footer-link" href="">
              Brokerage charges
            </a>
            <a className="footer-link" href="">
              Market holidays
            </a>
            <a className="footer-link" href="">
              Economic calendar
            </a>
            <a className="footer-link" href="">
              Calculators
            </a>
            <a className="footer-link" href="">
              Markets
            </a>
            <a className="footer-link" href="">
              Sectors
            </a>
          </div>

          {/* FOOTER DISCLAIMER SECTION */}
          <div className="footer-disclaimer container-fluid">
            <p>
              Arthiq is an independent educational and open-source paper trading platform.
All trading activities performed on Arthiq are simulated using virtual capital and do not involve real money or real market execution.
            </p>

            <p>
              Arthiq is not a stock broker, sub-broker, investment advisor, portfolio manager, or depository participant.<br/>
              Arthiq is not affiliated with NSE, BSE, MCX, SEBI, CDSL, NSDL, or any other exchange or regulatory authority.
            </p>

            <p>
              Market data displayed on the platform is for educational and simulation purposes only and may be delayed or approximated.
            </p>

            <p>
              Users are advised to consult registered financial advisors before making real-world investment decisions.
            </p>

            <p>
              Arthiq does not provide stock tips, financial advice, or portfolio management services.
            </p>

            <p>
              Investing in securities markets involves risk.<br/>
              Past simulated performance does not guarantee future real-world results.<br/>
              Trading strategies tested in a simulated environment may behave differently under live market conditions due to liquidity, slippage, volatility, and execution factors.
            </p>

            <p>
              Use Arthiq strictly for educational and research purposes.
            </p>

            <p>
              By using this platform, you agree to our Terms of Use and Privacy Policy.<br/>
              User data is handled responsibly and never sold to third parties.
            </p>

            <div className="footer-bottom-menu">
              <a href="/">Terms & conditions</a>
              <a href="/">Privacy policy</a>
              <a href="/">Disclaimer</a>
              <a href="/">Open Source License</a>
              <a href="/">Community Guidelines</a>
              <a href="/">Security Policy</a>
              <a href="/">Report Vulnerability</a>
            </div>

            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "60px",
                paddingTop: "20px",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#878787",
                  letterSpacing: "0.5px",
                }}
              >
                Built by <strong>Yash Kumar</strong><br/>
                Open Source. Forever Free.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
