import React, { useState } from "react";
import styles from "./TechStack.module.css";
import { techStackContent } from '../../content'; // Import content

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      <h1 className={styles.title}>The Technology Stacks We Specialize In</h1>
      <p className={styles.description}>
        Our senior software engineers for web application development services
        rank among the world’s best talent currently. Following are the tech
        stacks we offer:
      </p>
      <div className={styles.tabs}>
        <button
          onClick={() => handleTabClick("frontend")}
          className={activeTab === "frontend" ? styles.active : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => handleTabClick("backend")}
          className={activeTab === "backend" ? styles.active : ""}
        >
          Backend
        </button>
        <button
          onClick={() => handleTabClick("libraries")}
          className={activeTab === "libraries" ? styles.active : ""}
        >
          Libraries
        </button>
        <button
          onClick={() => handleTabClick("database")}
          className={activeTab === "database" ? styles.active : ""}
        >
          Database
        </button>
      </div>
      <div className={styles.images}>
        {techStackContent[activeTab].map((item, index) => (
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