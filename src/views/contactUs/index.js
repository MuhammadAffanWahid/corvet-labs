import React from "react";
import SubBanner from "../../components/SubBanner";
import ContactUsForm from "../../components/ContactUsForm";
import Footer from "../../components/Footer";
import bg from "../../assets/subBanner.jpg";

const ServicesHome = () => {
  return (
    <>
      <SubBanner heading="Contact Us" subHeading="Home /Contact Us" img={bg} />

      <ContactUsForm />

      <Footer />
    </>
  );
};

export default ServicesHome;
