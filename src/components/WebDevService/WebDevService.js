import React from "react";
import styles from "./WebDevService.module.css";
import { Helmet } from "react-helmet";
import webDevImage from "../../assets/WebDevService/webDevImage.png";
import amazonLogo from "../../assets/AppDevService/client/amazon.svg";
import googleLogo from "../../assets/AppDevService/client/google.svg";
import lenovoLogo from "../../assets/AppDevService/client/lenovo.svg";
import paypalLogo from "../../assets/AppDevService/client/paypal.svg";
import shopifyLogo from "../../assets/AppDevService/client/shopify.svg";
import spotifyLogo from "../../assets/AppDevService/client/spotify.svg";
import download_svg from "../../assets/AppDevService/download.svg";
import corvet from "../../assets/AppDevService/corvet.png";
import PlaneOnGlobe from "../../assets/AppDevService/planeonglobe.svg";
import Finance from "../../assets/AppDevService/finance.svg";
import Ecommerce from "../../assets/AppDevService/ecommerce.svg";
import Health from "../../assets/AppDevService/healthcare.svg";
import RealEstate from "../../assets/AppDevService/realestate.svg";
import Education from "../../assets/AppDevService/education.svg";
import Delivery from "../../assets/AppDevService/delivery.svg";
import Ondemand from "../../assets/AppDevService/ondemand.svg";
import TechStack from "../TechStack";
import WebServiceSection from "../WebServiceSection";
import DevelopmentProcess from "../DevelopmentProcess";
import WebStats from "../WebStats";
import WhyUs from "../WhyUsWeb";
import FAQ from "../FAQ";
import ContactUsForm from "../ContactUsForm";
 


const AppDevService = () => {
  const industries = [
    { name: "Fintech", icon: Finance },
    { name: "Travel & tourism", icon: PlaneOnGlobe },
    { name: "e-Commerce", icon: Ecommerce },
    { name: "Healthcare", icon: Health },
    { name: "Real estate", icon: RealEstate },
    { name: "Education", icon: Education },
    { name: "Food & grocery", icon: Delivery },
    { name: "On-Demand", icon: Ondemand },
  ];

  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Appgen - App & Saas Landing Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="App and Saas Landing Template" />
        <meta
          name="keywords"
          content="Application, Clean, Saas, Dashboard, Bootstrap 5"
        />
        <meta content="Shreethemes" name="author" />
        <meta name="version" content="2.1.0" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link
          href="css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link href="css/tobii.min.css" rel="stylesheet" type="text/css" />
        <link href="css/style.min.css" rel="stylesheet" type="text/css" />
      </Helmet>

      {/* Hero Start */}
      <section
        className="bg-half-170 app-home-wrapper d-table w-100 overflow-hidden"
        id="home"
      >
        <div className="container pt-2 mt-5 pt-5">
          <div className="row align-items-center mb-5 pb-5">
            <div className="col-lg-7 col-md-6 text-start">
              <div className="title-heading text-start">
                <img src={corvet} height="50" alt="" className="" />
                <h1 className="heading mb-3 mt-2">
                  Make <span className="text-primary">everything</span> <br />{" "}
                  organize with us
                </h1>
                <p className="para-desc text-muted">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
                <div className="watch-video mt-4">
                  <a href="/" className="btn btn-primary mb-2">
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 mb-5">
              <img
                src={webDevImage}
                className={`${styles.imgFluid} ${styles.floatAnimation}`} // Apply the CSS module classes
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* Client Start */}
      <section className="pt-3 pb-2 border-top border-bottom position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={amazonLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={googleLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={lenovoLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={paypalLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={shopifyLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="col-lg-2 col-md-2 col-6 text-center px-5   pt-4 ">
              <img src={spotifyLogo} className="avatar avatar-ex-sm" alt="" />
            </div>
            <div className="home-shape-arrow">
              <a href="#download" className="scroll-down">
                <img
                  src={download_svg}
                  alt="Download Arrow"
                  className={styles.arrowIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Client End */}

      {/* Services Start */}
      <div className={styles.container}>
      <h1 className={styles.title}>Web Application Development Services</h1>
      <h2 className={styles.subtitle}>For Extensive Industries</h2>
      <p className={styles.description}>
        InvoZone has successfully made its mark for delivering premium solutions and first-rate bespoke web
        apps. The major industries that we serve are:
      </p>
      <div className={styles.grid}>
        {industries.map((industry, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.icon} alt={index} src={industry.icon}/>
            <p className={styles.industryName}>{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
      {/* Services end */}

      {/* TechStack Start */}
      <TechStack />
      {/* TechStack end */}

      {/* WebServiceSection Start */}
      <WebServiceSection />
      {/* WebServiceSection end */}


      {/* DevelopmentProcess Start */}
      <DevelopmentProcess />
      {/* DevelopmentProcess end */}

      {/* WebStats Start */}
      <WebStats />
      {/* WebStats end */}

      {/* WhyUs Start */}
      <WhyUs />
      {/* WhyUs end */}

      {/* FAQ Start */}
      <FAQ />
      {/* FAQ end */}

      {/* ContactUsForm Start */}
      <ContactUsForm />
      {/* ContactUsForm end */}

    </div>
  );
};

export default AppDevService;
