import React from "react";
import styles from "./QAServiceSection.module.css";
import webapp from "../../assets/QAServiceSection/webapp.svg";
import Ecommerce from "../../assets/QAServiceSection/ecommerce.svg";
import Embedded from "../../assets/QAServiceSection/embedded.svg";
import Database from "../../assets/QAServiceSection/database.svg";
import ERP from "../../assets/QAServiceSection/erp.svg";
import Cloud from "../../assets/QAServiceSection/cloud.svg";
import ClientServer from "../../assets/QAServiceSection/clientserver.svg";
import Desktop from "../../assets/QAServiceSection/desktop.svg";



const QAServiceSection = () => {
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

export default QAServiceSection;
