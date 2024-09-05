import React from 'react';
import styles from './QAWhyUs.module.css';
import { qaWhyUsContent } from '../../content'; // Import content

const QAWhyUs = () => {
  const { heading, subheading, benefits, qaImage } = qaWhyUsContent;

  return (
    <section className={styles.qaWhyUsSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src={qaImage} alt="Quality Assurance Illustration" className={styles.qaImage} />
        </div>
      </div>
    </section>
  );
};

export default QAWhyUs;