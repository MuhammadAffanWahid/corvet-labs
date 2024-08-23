import React from 'react';
import styles from './WhyUsWeb.module.css';
import image from "../../assets/WhyUsWeb/image.png";

const WhyUsWeb = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Extend The Roots Of Your Business By Choosing Us</h2>
        <p className={styles.description}>
          We upgrade the quality and extend the functionalities of our web application development
          services by inducing modern technical solutions into them.
        </p>
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.column}>
          <h3 className={styles.subtitle}>Other reasons why you can benefit from choosing InvoZone are:</h3>
          <ul className={styles.list}>
            <li>We find the best technology stack for you that matches your needs</li>
            <li>Our non-stop availability makes communication easier</li>
            <li>We put much focus on agile development processes</li>
            <li>Freely connect with the project manager in case of any hurdle</li>
            <li>We strictly adhere to globally accepted data security guidelines</li>
            <li>Full-fledged documentation at every step of the process</li>
            <li>Interactive and dependable UI/UX designs</li>
            <li>Frequent iterative testing</li>
            <li>Effective quality assurance to facilitate a bug-free web application</li>
            <li>Everlasting maintenance and necessary updates</li>
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
