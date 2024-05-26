import React from "react";
import NavbarSaasStartup from "../components/Layouts/NavbarSaasStartup";
import MainBanner from "../components/SaasStartup/MainBanner";
import Partner from "../components/SaasStartup/Partner";
import AboutUs from "../components/SaasStartup/AboutUs";
import Services from "../components/SaasStartup/Services";
import OurWorks from "../components/SaasStartup/OurWorks";
import Pricing from "../components/SaasStartup/Pricing";
import Testimonials from "../components/SaasStartup/Testimonials";
import FunFacts from "../components/SaasStartup/FunFacts";
import LatestNews from "../components/SaasStartup/LatestNews";
import ContactUs from "../components/SaasStartup/ContactUs";
import FooterSaasStartup from "../components/Layouts/FooterSaasStartup";

const SaasStartup = () => {
  return (
    <>
      <div className="bg-fafafa">
        <NavbarSaasStartup />

        <MainBanner />

        <Partner />

        <AboutUs />

        <Services />

        <OurWorks />

        <Pricing />

        <Testimonials />

        <FunFacts />

        <LatestNews />

        <ContactUs />
        
        <FooterSaasStartup />
      </div>
    </>
  );
};

export default SaasStartup;
