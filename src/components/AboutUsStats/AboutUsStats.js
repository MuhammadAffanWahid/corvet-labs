import React from 'react';
import styles from './AboutUsStats.module.css';
import { aboutUsStatsContent } from '../../content'; // Import the content

const AboutUsStats = () => {
  const { heading, subHeading, stats } = aboutUsStatsContent;

  return (
    <div className={styles.statsSection}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subHeading}>{subHeading}</p>
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