import React from 'react';
import styles from './QAFeatures.module.css';
import { qaFeaturesContent } from '../../content'; // Import content

const QAFeatures = () => {
  const { heading, features } = qaFeaturesContent;

  return (
    <section className={styles.qaFeaturesSection}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.featuresContainer}>
        {features.map(feature => (
          <div key={feature.id} className={styles.featureCard}>
            <img src={feature.icon} alt={`${feature.title} icon`} className={styles.icon} />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QAFeatures;