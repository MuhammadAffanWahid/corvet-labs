import React from 'react';
import styles from './QAServiceSection.module.css';
import { qaServiceContent } from '../../content'; // Import content

const QAServiceSection = () => {
  const { heading, subheading, services } = qaServiceContent;

  return (
    <section className={styles.qaServiceSection}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.subheading}>{subheading}</p>
      <div className={styles.servicesContainer}>
        {services.map(service => (
          <div key={service.id} className={styles.serviceCard}>
            <img src={service.icon} alt={`${service.title} icon`} className={styles.icon} />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QAServiceSection;