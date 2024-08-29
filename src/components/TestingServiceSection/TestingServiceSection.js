import React from "react";
import styles from "./TestingServiceSection.module.css";
import webapp from "../../assets/TestingServiceSection/webapp.svg";
import Ecommerce from "../../assets/TestingServiceSection/ecommerce.svg";
import Embedded from "../../assets/TestingServiceSection/embedded.svg";
import Database from "../../assets/TestingServiceSection/database.svg";
import ERP from "../../assets/TestingServiceSection/erp.svg";
import Cloud from "../../assets/TestingServiceSection/cloud.svg";
import ClientServer from "../../assets/TestingServiceSection/clientserver.svg";
import Desktop from "../../assets/TestingServiceSection/desktop.svg";



const TestingServiceSection = () => {
  const industries = [
    { name: "Web and Mobile based Applicaitons", icon: webapp },
    { name: "Desktop based Applicaitons", icon: Desktop },
    { name: "Embedded Systems", icon: Embedded },
    { name: "ERP Systems", icon: ERP },
    { name: "Database Management Systems", icon: Database },
    { name: "Gaming and Ecommerce Apps", icon: Ecommerce },
    { name: "Cloud based Apps", icon: Cloud },
    { name: "Client-Server Apps", icon: ClientServer },
  ];

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Partner with Corvet Labs for Top-Notch</h1>
    <h2 className={styles.subtitle}>Software testing services</h2>
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
    <div className={styles.ctaContainer}>
            <h2>Ready To Enjoy A Bug-Free Solution?</h2>
            <button className={styles.ctaButton}>Book A Call</button>
        </div>
  </div>
  );
};

export default TestingServiceSection;
