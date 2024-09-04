import React from 'react';
import styles from './AboutUsStats.module.css';

const AboutUsStats = () => {
  const stats = [
    { number: "300+", description: "Successful Projects" },
    { number: "97%", description: "Customer Satisfaction Rate" },
    { number: "500+", description: "Developers & Engineers" },
    { number: "10+", description: "Years of Experience" },
    { number: "3", description: "Global Offices" },
    { number: "150+", description: "Happy Customers" }
  ];

  return (
    <div className={styles.statsSection}>
      <h2 className={styles.heading}>Corvet Labs: A Hub of Expertise, Engineering Innovative Solutions</h2>
      <p className={styles.subHeading}>
        With a passion for innovation and a commitment to creating lasting impact, we actively shape the future of technology as per the industry standards.
      </p>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.tile}>
            <h3 className={styles.number}>{stat.number}</h3>
            <p className={styles.description}>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsStats;