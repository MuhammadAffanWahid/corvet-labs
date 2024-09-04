import React from 'react';
import styles from './AboutUsHero.module.css';
import backgroundImage from '../../assets/aboutUs/hero.jpg'; // Update this path to the actual path of your image

const AboutUsHero = () => {
  return (
    <div className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>Accelerate Your Business Growth With Us</h1>
        <p className={styles.description}>
          Your business is only as good as the technology behind it. We have the expertise. You have the vision. We make technology happen! Our team of world-class engineers and innovators will build your next software project, leaving you to focus on running your business.
        </p>
        <p className={styles.callToAction}>Got an idea? Bring it to life with Corvet Labs!</p>
        <button className={styles.ctaButton}>Step Into Innovation</button>
      </div>
    </div>
  );
}

export default AboutUsHero;