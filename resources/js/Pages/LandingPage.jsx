import React from "react";
import LandingPageLayout from "../components/Layout/LandingPageLayout";
import Deskripsi from "../Components/DestinationPage/About";
import Preview from "../components/DestinationPage/Preview";

const LandingPage = () => {
    return (
        <LandingPageLayout>
            <Deskripsi />
            <Preview />
        </LandingPageLayout>
    );
};

export default LandingPage;
