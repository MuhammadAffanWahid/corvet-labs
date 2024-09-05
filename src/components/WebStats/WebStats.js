import React from 'react';
import styles from './WebStats.module.css';
import { statsContent } from '../../content'; // Import content

const StatsSection = () => {
  return (
    <div className={styles.statsContainer}>
      {statsContent.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <img src={stat.icon} alt={stat.description} className={styles.iconWrapper} />
          <h2 className={styles.number}>{stat.number}</h2>
          <p className={styles.description}>{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;