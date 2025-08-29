import React from "react";
import { Helmet } from "react-helmet-async";

import MainBanner from "../../components/Navigation/MainBanner.jsx"; 
import Navigation from "../../components/Navigation/Navbar.jsx"; 
import OurStory from "../OurStory/OurStory.jsx";  // ✅ Correct import
import Services from "../Services/Services.jsx";

import ContactForm from "../ContactForm/ContactForm.jsx";
import IdeasSection from "../IdeasSection/IdeaSection.jsx";
import TechnologiesSection from "../ToggleSection/ToggleSection.jsx"
import HowWeWork from "../Services Showcase/Services Showcase.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>CodexWagon | Web & App Development in Kerala</title>
      </Helmet>

      {/* Mukalil logo + menu bar */}
      <Navigation />

      {/* Video Banner */}
      <MainBanner />  


      {/* Our Story Section */}
      <OurStory />
      <Services/>
       <HowWeWork/>
      
      <ContactForm/>
      <IdeasSection/>
      <TechnologiesSection/>
        </>
  );
}


