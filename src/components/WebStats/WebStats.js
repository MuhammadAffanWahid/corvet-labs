// StatsSection.js
import React from 'react';
import styles from './WebStats.module.css';
import celebrate from "../../assets/WebStats/celebrate.svg";
import briefcase from "../../assets/WebStats/briefcase.svg";
import engineers from "../../assets/WebStats/engineers.svg";
import fist from "../../assets/WebStats/fist.svg";

const statsData = [
  {
    icon: celebrate,
    number: '300+',
    description: 'Project Successfully Delivered',
  },
  {
    icon: fist,
    number: '97%',
    description: 'Client Success Rate',
  },
  {
    icon: engineers,
    number: '500+',
    description: 'Team Of Pre-Vetted Engineers',
  },
  {
    icon: briefcase,
    number: '10+',
    description: 'Years Of Experience In The IT Industry',
  },
];

const StatsSection = () => {
  return (
    <div className={styles.statsContainer}>
      {statsData.map((stat, index) => (
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
