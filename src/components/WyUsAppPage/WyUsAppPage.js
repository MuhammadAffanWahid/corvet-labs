import React from 'react';
import styles from './WyUsAppPage.module.css';

const WhyUsApp = () => {
  return (
    <div className={styles.whyUsContainer}>
      <h2 className={styles.title}>
        Why Should You Choose InvoZone For Mobile App Development Services?
      </h2>
      <p className={styles.subtitle}>
        We capitalized on 6 key value services and successfully built a reputation as the leading and trusted mobile app development services provider in the U.S.A., the U.K., and Canada.
      </p>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceBox}>
          <div className={styles.number}>01</div>
          <h3 className={styles.serviceTitle}>Domain Specialists</h3>
          <p className={styles.serviceDescription}>
            With hands-on experience in mobile app development services, InvoZone houses a flourishing community of 500+ developers who have delivered 97% customer satisfaction across industries — Healthcare, Fintech, and more!
          </p>
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.number}>02</div>
          <h3 className={styles.serviceTitle}>Community’s Most Loved Tech Stack</h3>
          <p className={styles.serviceDescription}>
            Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you name it, you got it. You name it, here it is.
          </p>
        </div>
        <div className={`${styles.serviceBox}`}>
          <div className={styles.number}>03</div>
          <h3 className={styles.serviceTitle}>Unflinching Quality</h3>
          <p className={styles.serviceDescription}>
            Discard battery-draining apps by placing your trust in InvoZone’s quality perimeters. As a leading mobile app development company, we deliver bug-free, high-performing, stable, and user-friendly mobile apps.
          </p>
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.number}>04</div>
          <h3 className={styles.serviceTitle}>Dollar-wise Services</h3>
          <p className={styles.serviceDescription}>
            Save thousands of dollars with our value-adding bundle of bespoke services — A 7-day trial, senior-level product managers, and end-to-end software testing and debugging, all at a wallet-friendly budget.
          </p>
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.number}>05</div>
          <h3 className={styles.serviceTitle}>100% Transparency</h3>
          <p className={styles.serviceDescription}>
            Track the best mobile application development progress without hassle. You will be kept in the loop throughout the project, ensuring that your valuable input is prioritized to deliver robust and superior applications.
          </p>
        </div>
        <div className={styles.serviceBox}>
          <div className={styles.number}>06</div>
          <h3 className={styles.serviceTitle}>100% Confidentiality</h3>
          <p className={styles.serviceDescription}>
            Rest assured about your project confidentiality! Leveraging the latest technologies and tools to keep your data and other vital information safe is the top practice of our mobile app development team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsApp;