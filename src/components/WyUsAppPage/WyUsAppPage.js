import React from 'react';
import styles from './WyUsAppPage.module.css';
import { whyUsAppContent } from '../../content'; // Import content

const WhyUsApp = () => {
  const { title, subtitle, services } = whyUsAppContent;

  return (
    <div className={styles.whyUsContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceBox}>
            <div className={styles.number}>{service.number}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUsApp;