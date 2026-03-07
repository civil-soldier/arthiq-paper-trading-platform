import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/api";

const AccountActive = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [mobile, setMobile] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const m = location.state?.mobile || localStorage.getItem("mobile");

  if (m) {
    setMobile(m);
  } else {
    navigate("/signup");
  }

  setLoading(false);
}, [location.state, navigate]);

  useEffect(() => {
  if (loading || !mobile) return;

  const fetchUser = async () => {
    try {
      const res = await axios.get(`/auth/account-active/${mobile}`);
      setName(res.data.user.name);
    } catch (err) {
      console.error("Failed to fetch account active user", err);
      navigate("/signup");
    }
  };

  fetchUser();
}, [mobile, loading, navigate]);

  // Stable dropdown (ONLY closes on outside click)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //First name
  const firstName = name ? name.split(" ")[0] : "User";

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  // Initials
  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "U";

  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/login`;
  };

  return (
    <div className="account-active-wrapper">
      {/* HEADER */}
      <header className="account-header">
        <img
          src="/media/images/logo1.svg"
          alt="logo"
          style={{ height: "37px", marginLeft: "40px" }}
        />

        {/* USER MENU */}
        <div className="user-menu" ref={menuRef}>
          <div className="user-trigger" onClick={toggleDropdown}>
            <div className="avatar">{initials}</div>
            <span className="username">{firstName}</span>
            <span className={`arrow ${open ? "rotate" : ""}`}>▾</span>
          </div>

          {open && (
            <div className="dropdown">
              <p className="dropdown-name">{name}</p>

              <button onClick={() => navigate("/support")}>Need help?</button>

              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <section className="content-section">
        {/* MAIN CARD */}
        <div className="account-card">
          <div className="card-left">
            <h1>
              Welcome to Arthiq <span>🎉</span>
            </h1>

            <p className="desc">
              Your account setup is complete. You can now access the Arthiq trading dashboard using your User ID and password. Explore powerful tools to track markets, manage investments, and grow your portfolio.
            </p>

            <p className="welcome">Welcome aboard — your investing journey starts now.</p>

            <button className="login-btn" onClick={handleLogin}>
              <img
                src="/media/images/logo.svg"
  alt="arthiq"
  style={{
    width: "26px",
    height: "26px",
    marginRight: "10px",
    objectFit: "contain"
  }}
              />
              Login to Nova
            </button>
          </div>

          <div className="card-right">
            <img src="/media/images/account_activation.svg" alt="active" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountActive;
