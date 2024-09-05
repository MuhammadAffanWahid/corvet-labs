import React from "react";
import Footer from "../../components/Footer";
import AboutUsHero from "../../components/AboutUsHero";
import CEOMessage from "../../components/CEOMessage";
import AboutUsVision from "../../components/AboutUsVision";
import AboutUsStats from "../../components/AboutUsStats";
import QAEngagement from "../../components/QAEngagement";
import ContactUsForm from "../../components/ContactUsForm";



const aboutUs = () => {
  return (
    <>
      <AboutUsHero />

      <CEOMessage/>

      <AboutUsVision/>

      <AboutUsStats/>

      <QAEngagement />

      <ContactUsForm />

      <Footer />
    </>
  );
};

export default aboutUs;