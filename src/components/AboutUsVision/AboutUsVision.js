import React from 'react';
import styles from './AboutUsVision.module.css';
import { aboutUsVisionContent } from '../../content'; // Import the content

const AboutUsVision = () => {
  const {
    visionImage,
    missionImage,
    visionHeading,
    visionDescription1,
    visionDescription2,
    missionHeading,
    missionDescription1,
    missionDescription2
  } = aboutUsVisionContent;

  return (
    <div className={styles.visionMissionSection}>
      <div className={styles.visionSection}>
        <img src={visionImage} alt="Vision" className={styles.image} />
        <div className={styles.textContent}>
          <h2 className={styles.heading}>{visionHeading}</h2>
          <p className={styles.description}>{visionDescription1}</p>
          <p className={styles.description}>{visionDescription2}</p>
        </div>
      </div>
      <div className={styles.missionSection}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>{missionHeading}</h2>
          <p className={styles.description}>{missionDescription1}</p>
          <p className={styles.description}>{missionDescription2}</p>
        </div>
        <img src={missionImage} alt="Mission" className={styles.image} />
      </div>
    </div>
  );
};

export default AboutUsVision;