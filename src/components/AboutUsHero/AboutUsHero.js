import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AboutUsHero.module.css';
import { aboutUsHeroContent } from '../../content'; // Import the content

const AboutUsHero = () => {
  const { backgroundImage, heading, description, callToAction, ctaButtonText } = aboutUsHeroContent;
  const navigate = useNavigate(); // Initialize navigate

  const handleButtonClick = () => {
    navigate('/contact-us'); // Redirect to the contact page
  };

  return (
    <div className={styles.heroSection} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.description}>{description}</p>
        <p className={styles.callToAction}>{callToAction}</p>
        <button className={styles.ctaButton} onClick={handleButtonClick}>
          {ctaButtonText}
        </button>
      </div>
    </div>
  );
};

export default AboutUsHero;