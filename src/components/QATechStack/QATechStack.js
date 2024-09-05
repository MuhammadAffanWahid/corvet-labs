import React, { useState } from "react";
import styles from "./QATechStack.module.css";
import { qaTechStackContent } from "../../content"; // Import content

const TabbedGallery = () => {
  const { title, description, categories } = qaTechStackContent;
  const [activeTab, setActiveTab] = useState("Test Automation Tools");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.tabs}>
        {Object.keys(categories).map((tab) => (
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
        {categories[activeTab].map((item, index) => (
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