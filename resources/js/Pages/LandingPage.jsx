import React from "react";
import LandingPageLayout from "../Layouts/LandingPageLayout";
import Deskripsi from '../Components/DestinationPage/About'
import OurFeatures from '../Components/DestinationPage/OurFeatures'

const LandingPage = () => {
    return(
        <LandingPageLayout>
            <Deskripsi/>
            <OurFeatures/>
        </LandingPageLayout>
    )
}

export default LandingPage;