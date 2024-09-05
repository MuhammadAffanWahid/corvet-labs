import React from 'react';
import styles from './AppDevHeroSection.module.css';
import { appDevHeroContent } from '../../content'; // Import content

const AppDevHeroSection = () => {
  const { title, description, features, ctaButton, mobileImg } = appDevHeroContent;

  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className={styles.ctaButton}>{ctaButton}</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={mobileImg} alt="Mobile App Development" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default AppDevHeroSection;