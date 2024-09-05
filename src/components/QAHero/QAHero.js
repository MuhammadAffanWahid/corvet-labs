import React from "react";
import styles from "./QAHero.module.css";
import { qaHeroContent } from "../../content"; // Import content

const QAHero = () => {
  const { title, description, services, tools, ctaButton, heroImage } = qaHeroContent;

  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <img src={service.icon} alt="tick" />
              <span>{service.name}</span>
            </div>
          ))}
        </div>
        <p>{tools}</p>
        <button className={styles.ctaButton}>{ctaButton}</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="QA illustration" />
      </div>
    </div>
  );
};

export default QAHero;