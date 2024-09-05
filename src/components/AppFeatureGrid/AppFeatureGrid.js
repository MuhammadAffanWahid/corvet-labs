import React from 'react';
import styles from './AppFeatureGrid.module.css';
import { appFeatureGridContent } from '../../content'; // Import content

const AppFeatureGrid = () => {
  const { title, subtitle, features } = appFeatureGridContent;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureBox}>
            <div className={styles.icon}>
              <img src={feature.icon} alt={`${feature.title} Icon`} />
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppFeatureGrid;