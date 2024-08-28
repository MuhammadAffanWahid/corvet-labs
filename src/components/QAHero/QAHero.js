import React from "react";
import styles from "./QAHero.module.css";
import tick from "../../assets/QAHero/tickwhite.svg";
import heroImage from "../../assets/QAHero/QA.png"; // Update this path as needed

const QAHero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>Software Quality Assurance Services</h1>
        <p>
          Enhance the visibility of your business & deliver a smooth user
          experience with an exceptional product that meets all quality
          standards, guaranteeing increased conversion. We take pride in our
          comprehensive software quality assurance services, backed by a
          decade-long experience. With over 300 projects, InvoZone’s services
          encompass:
        </p>
        <div className={styles.servicesList}>
          <div className={styles.serviceItem}>
            <img src={tick} alt="tick" />
            <span>Full Stack Testing</span>
          </div>
          <div className={styles.serviceItem}>
            <img src={tick} alt="tick" />
            <span>Test Automation</span>
          </div>
          <div className={styles.serviceItem}>
            <img src={tick} alt="tick" />
            <span>Manual Testing</span>
          </div>
          <div className={styles.serviceItem}>
            <img src={tick} alt="tick" />
            <span>Usability Testing</span>
          </div>
          {/* <div className={styles.serviceItem}>
            <img src={tick} alt="tick" />
            <span>QA Ops</span>
          </div> */}
        </div>
        <p>
          We harness the power of Selenium Webdriver, Cypress.io & Playwright to
          automate testing and Jira, Trello & ClickUp for seamless project
          organization.
        </p>
        <button className={styles.ctaButton}>Talk To Our QA Experts</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="QA illustration" />
      </div>
    </div>
  );
};

export default QAHero;
