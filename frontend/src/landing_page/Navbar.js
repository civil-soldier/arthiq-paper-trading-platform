import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Inline Zerodha CSS */}
      <style>{`
        .zerodha-nav {
  background-color: #161625 !important;
  border-bottom: 1px solid #2a2a3d;
  height: 68px;
  font-family: "Inter", sans-serif;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
}

.zerodha-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;                /* ensure proper centering */
  display: flex;
  align-items: center;
  padding: 0 12px;               /* symmetric padding */
}

/* Scoped nav link styling to avoid bootstrap override */
.zerodha-nav .nav-link {
  color: #b8b8d6 !important;
  font-weight: 400 !important;   /* force normal */
  font-size: 16px;
  letter-spacing: 0.2px;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  height: 68px;
  text-decoration: none;
}

.zerodha-nav .nav-link:hover {
  color: #a78bfa !important;
}

.navbar-brand img {
  width: 120px;
  margin-left: 38px;
  transform: translateY(0);
}

.navbar-nav {
  gap: 22px;
}

.navbar-toggler i {
  font-size: 22px;
  color: #a78bfa;
}

.nav-link.dropdown-toggle::after {
  display: none !important;
}
        }
      `}</style>

      {/* Navbar HTML */}
      <nav className="navbar zerodha-nav navbar-expand-lg p-2">
        <div className="container-fluid zerodha-container">
          {/* Logo */}
          <Link className="navbar-brand" to={"/"}>
            <img src="media/images/logo1.svg" alt="Logo" />
          </Link>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/product"}>
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/community"}>
                  Community
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/support"}>
                  Support
                </Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ background: "none", border: "none" }}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
