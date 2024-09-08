import React from "react";
import styles from "./WebDevService.module.css";
import { appDevServiceContent } from '../../content'; // Import content
import TechStack from "../TechStack";
import WebServiceSection from "../WebServiceSection";
import DevelopmentProcess from "../DevelopmentProcess";
import WebStats from "../WebStats";
import WhyUs from "../WhyUsWeb";
import FAQ from "../FAQ";
import ContactUsForm from "../ContactUsForm";

const WebDevService = () => {
  const { hero, clients, downloadSvg, industries, servicesTitle, servicesSubtitle, servicesDescription } = appDevServiceContent;

  return (
    <div>
      {/* Hero Start */}
      <section
        className="bg-half-170 app-home-wrapper d-table w-100 overflow-hidden"
        id="home"
      >
        <div className="container pt-2 mt-5 pt-5">
          <div className="row align-items-center mb-5 pb-5">
            <div className="col-lg-7 col-md-6 text-start">
              <div className="title-heading text-start">
                <img src={hero.corvetLogo} height="50" alt="Corvet Labs Logo" />
                <h1 className="heading mb-3 mt-2">
                  {hero.title.split(" ").map((word, index) => (
                    <span key={index} className={word === "everything" ? "text-primary" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>
                <p className="para-desc text-muted">{hero.description}</p>
                <div className="watch-video mt-4">
                  <a href="/" className="btn btn-primary mb-2">
                    {hero.buttonText}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 mb-5">
              <img
                src={hero.webDevImage}
                className={`${styles.imgFluid} ${styles.floatAnimation}`}
                alt="Web Development"
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
            {clients.map((client, index) => (
              <div key={index} className="col-lg-2 col-md-2 col-6 text-center px-5 pt-4">
                <img src={client.logo} className="avatar avatar-ex-sm" alt={client.name} />
              </div>
            ))}
            <div className="home-shape-arrow">
              <a href="#download" className="scroll-down">
                <img
                  src={downloadSvg}
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
        <h1 className={styles.title}>{servicesTitle}</h1>
        <h2 className={styles.subtitle}>{servicesSubtitle}</h2>
        <p className={styles.description}>{servicesDescription}</p>
        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.card}>
              <img className={styles.icon} alt={index} src={industry.icon} />
              <p className={styles.industryName}>{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Services End */}

      <TechStack />

      <WebServiceSection />

      <DevelopmentProcess />

      <WebStats />

      <WhyUs />

      <FAQ />

      <ContactUsForm />
    </div>
  );
};

export default WebDevService;