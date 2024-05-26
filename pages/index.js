import React from "react";
import NavbarConsulting from "../components/Layouts/NavbarConsulting";
import MainBanner from "../components/Consulting/MainBanner";
import Features from "../components/Consulting/Features";
import AboutUs from "../components/Consulting/AboutUs";
import Services from "../components/Consulting/Services";
import OurWorks from "../components/Consulting/OurWorks";
import Partner from "../components/Consulting/Partner";
import Pricing from "../components/Consulting/Pricing";
import GetInTouch from "../components/Consulting/GetInTouch";
import TeamMember from "../components/Consulting/TeamMember";
import Testimonials from "../components/Consulting/Testimonials";
import LatestNews from "../components/Consulting/LatestNews";
import ContactUs from "../components/Consulting/ContactUs";
import FooterConsulting from "../components/Layouts/FooterConsulting";

const Index = () => {
  return (
    <>
      <div className="bg-f3f3f4">
        <NavbarConsulting />

        <MainBanner />

        <Features />

        <AboutUs />

        <Services />

        <OurWorks />

        <Partner />

        <Pricing />

        <GetInTouch />

        <TeamMember />

        <Testimonials />

        <ContactUs />

        <FooterConsulting />
      </div>
    </>
  );
};

export default Index;
