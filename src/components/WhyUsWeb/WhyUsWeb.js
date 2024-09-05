import React from 'react';
import styles from './WhyUsWeb.module.css';
import { whyUsContent } from '../../content'; // Import content

const WhyUsWeb = () => {
  const { title, description, subtitle, reasons, image } = whyUsContent;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <ul className={styles.list}>
            {reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <img src={image} alt="Why Choose Us" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default WhyUsWeb;