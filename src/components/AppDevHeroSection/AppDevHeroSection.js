import React from 'react';
import styles from './AppDevHeroSection.module.css';
import mobileImg from "../../assets/AppDevService/app/mobile.png";

const AppDevHeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Mobile App <br /> Development Services</h1>
        <p className={styles.description}>
          We are a leading mobile app development company in the USA, housing domain-savvy developers to design and develop Android, iOS and cross-platform applications customized to your business needs and identity. So, jump into the InvoZone bandwagon today and benefit from our exclusive value-added services!
        </p>
        <ul className={styles.featuresList}>
          <li>Advanced tech stack such as Elixir, Flutter, React Native, Swift and more.</li>
          <li>Wallet-friendly engagement models to hire remote app developers.</li>
          <li>Free consultation for mobile app development services.</li>
          <li>Staffing within 1-2 weeks.</li>
          <li>Daily collaborative meetings with Product Managers.</li>
        </ul>
        <button className={styles.ctaButton}>Get a 7-day Trial</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={mobileImg} alt="Mobile App Development" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default AppDevHeroSection;