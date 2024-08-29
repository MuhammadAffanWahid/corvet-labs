import React, { useState } from "react";
import styles from "./QATechStack.module.css";

// Import the new SVGs
import apacheJmeter from '../../assets/QATechStack/Apache Jmeter.svg';
import asana from '../../assets/QATechStack/Asana.svg';
import browserstack from '../../assets/QATechStack/Browserstack.svg';
import bugzilla from '../../assets/QATechStack/Bugzilla.svg';
import ciCd from '../../assets/QATechStack/Ci_Cd.svg';
import cucumber from '../../assets/QATechStack/Cucumber.svg';
import cypress from '../../assets/QATechStack/Cypress.svg';
import excel from '../../assets/QATechStack/Excel.svg';
import jiraConfluence from '../../assets/QATechStack/Jira-Confluence.svg';
import jira from '../../assets/QATechStack/Jira.svg';
import notion from '../../assets/QATechStack/Notion.svg';
import openProject from '../../assets/QATechStack/OpenProject.svg';
import playwright from '../../assets/QATechStack/Playwright.svg';
import selenium from '../../assets/QATechStack/Selenium.svg';
import swagger from '../../assets/QATechStack/Swagger.svg';
import trello from '../../assets/QATechStack/Trello.svg';
import word from '../../assets/QATechStack/Word.svg';
import Postman from '../../assets/QATechStack/Postman.svg';

const images = {
    "Test Automation Tools": [
        { src: browserstack, label: "BrowserStack" },
        { src: ciCd, label: "CI/CD" },
        { src: cucumber, label: "Cucumber" },
        { src: cypress, label: "Cypress" },
        { src: playwright, label: "Playwright" },
        { src: selenium, label: "Selenium" },
    ],
    "Defect Management Tools": [
        { src: jira, label: "Jira" },
        { src: jiraConfluence, label: "Jira Confluence" },
        { src: bugzilla, label: "Bugzilla" },
        { src: openProject, label: "OpenProject" },
        { src: asana, label: "Asana" },
        { src: trello, label: "Trello" },
    ],
    "Documentation Tools": [
        { src: notion, label: "Notion" },
        { src: word, label: "Word" },
        { src: excel, label: "Excel" },
    ],
    "Testing Tools": [
        { src: swagger, label: "Swagger" },
        { src: apacheJmeter, label: "Apache JMeter" },
        { src: Postman, label: "Postman" },
    ],
};
  
const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("Test Automation Tools");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      <h1 className={styles.title}>Corvet Lab's Power-Packed Quality Assurance Tools</h1>
      <p className={styles.description}>
      SQA tools are software apps or platforms that assist the SQAs in various tasks and activities during the whole process. Our tools are top-notch to guarantee your success, also making us one of the top companies working with global brands. Below are the awesome tools we use.
      </p>
      <div className={styles.tabs}>
        {Object.keys(images).map(tab => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={activeTab === tab ? styles.active : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.images}>
        {images[activeTab].map((item, index) => (
          <div key={index} className={styles.imageBox}>
            <img
              src={item.src}
              alt={item.label}
              className={styles.image}
            />
            <div className={styles.imageLabel}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedGallery;