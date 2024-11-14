import React from "react";
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";

const MainPageLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };

export default MainPageLayout;