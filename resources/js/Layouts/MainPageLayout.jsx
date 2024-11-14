import React from "react";
import Navbar from "../Components/Partials/Navbar";
import Footer from "../Components/Partials/Footer";

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