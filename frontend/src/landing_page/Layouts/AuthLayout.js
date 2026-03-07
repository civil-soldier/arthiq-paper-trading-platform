import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div style={headerStyle}>
        <div style={logoWrapper}>
          <img
            src="/media/images/logo1.svg"
            alt="Arthiq"
            style={logoStyle}
          />
        </div>
      </div>

      <Outlet />
    </>
  );
}

const headerStyle = {
  height: "72px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 80px",
  backgroundColor: "#231941", // match your dark theme
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  marginBottom: "-40px",
};

const logoWrapper = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  height: "50px",
  width: "auto",
  objectFit: "contain",
};

export default AuthLayout;