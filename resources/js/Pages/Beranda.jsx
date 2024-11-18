import React from "react";
import MainPageLayout from "../Components/Layout/MainPageLayout";
import Deskripsi from "../Components/DestinationPage/Deskripsi";
import OurFeatures from "../Components/DestinationPage/OurFeatures";

const LandingPage = () => {
    return (
        <MainPageLayout>
            <Deskripsi />
            <OurFeatures />
        </MainPageLayout>
    );
};

export default LandingPage;
