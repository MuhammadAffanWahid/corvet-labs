import React from 'react';
import styles from './AboutUsVision.module.css';
import visionImage from '../../assets/aboutUs/vision.webp';
import missionImage from '../../assets/aboutUs/mission.webp';

const AboutUsVision = () => {
  return (
    <div className={styles.visionMissionSection}>
      <div className={styles.visionSection}>
        <img src={visionImage} alt="Vision" className={styles.image} />
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Our Inspiring Vision</h2>
          <p className={styles.description}>
            We envision a future where innovation knows no bounds, where groundbreaking ideas transform industries, and where technological advancements create positive change. We strive to create disruptive AI-driven solutions that redefine the landscape of the digital world.
          </p>
          <p className={styles.description}>
            With unwavering determination, we leverage the power of our collective imagination to shape a world filled with endless possibilities. Together, we dare to dream, innovate fearlessly, and pave the way for a brighter tomorrow.
          </p>
        </div>
      </div>
      <div className={styles.missionSection}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Our Impactful Mission</h2>
          <p className={styles.description}>
            At the core of our mission lies empowering businesses with transformative technology solutions. Through our proficiency in custom software development, Cloud Services, AI/ML/AL, DevOps, and cybersecurity, we craft personalized solutions that propel growth, optimize operations, and spur innovation.
          </p>
          <p className={styles.description}>
            By prioritizing our clients' needs, we consistently surpass expectations, nurturing enduring partnerships grounded in trust and mutual collaboration. Join us in shaping the future of business.
          </p>
        </div>
        <img src={missionImage} alt="Mission" className={styles.image} />
      </div>
    </div>
  );
};

export default AboutUsVision;