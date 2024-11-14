import React from "react";
import MainPageLayout from "../components/Layout/MainPageLayout";
import ProfilePage from "../components/Features/ProfilePage";

const LandingPages = () => {
  return (
    <MainPageLayout>
      <ProfilePage />
    </MainPageLayout>
  );
};

export default LandingPages;