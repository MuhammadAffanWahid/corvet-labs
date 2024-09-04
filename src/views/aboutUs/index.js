import React from "react";
// import bg from '../../assets/aboutUs/banner.png';
// import SubBanner from '../../components/SubBanner';
import Footer from "../../components/Footer";
// import Top from "../../components/AboutUs/Top";
// import Middle from "../../components/AboutUs/Middle";
// import Bottom from "../../components/AboutUs/Bottom";
import AboutUsHero from "../../components/AboutUsHero";
import CEOMessage from "../../components/CEOMessage";
import AboutUsVision from "../../components/AboutUsVision";
import AboutUsStats from "../../components/AboutUsStats";
import QAEngagement from "../../components/QAEngagement";
import ContactUsForm from "../../components/ContactUsForm";



const aboutUs = () => {
  return (
    <>
      {/* Banner Section  */}
      {/* <section>
        <SubBanner heading='About Us' subHeading='Home /About Us' img={bg}/>
      </section> */}

      <AboutUsHero />

      <CEOMessage/>

      <AboutUsVision/>

      <AboutUsStats/>


       <QAEngagement />

       <ContactUsForm />
      {/* <section>
        <Contact />
      </section> */}
      {/* Top Section  */}
      {/* <section>
        <Top />
      </section> */}

      {/* Middle Section  */}
      {/* <section>
        <Middle />
      </section> */}

      {/* Bottom Section  */}
      {/* <section>
        <Bottom />
      </section> */}

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default aboutUs;