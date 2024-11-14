import React from "react";
import NavbarLogin from "../Partials/NavbarLogin";
import Footer from "../Partials/Footer";

const LandingPageLayout = ({ children }) => {
    return (
      <div>
        <NavbarLogin />
        {children}
        <Footer />
      </div>
    );
  };

export default LandingPageLayout;