import React from "react";
import styles from "./TestingServiceSection.module.css";
import { testingServiceContent } from '../../content'; // Import content

const TestingServiceSection = () => {
  const { title, subtitle, description, industries, ctaTitle, ctaButton } = testingServiceContent;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.grid}>
        {industries.map((industry, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.icon} alt={industry.name} src={industry.icon} />
            <p className={styles.industryName}>{industry.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaContainer}>
        <h2>{ctaTitle}</h2>
        <button className={styles.ctaButton}>{ctaButton}</button>
      </div>
    </div>
  );
};

export default TestingServiceSection;