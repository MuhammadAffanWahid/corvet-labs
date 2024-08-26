import React from 'react';
import styles from './AppFeatureGrid.module.css';
import gear from "../../assets/AppFeatureGrid/gear.svg";
import handbag from "../../assets/AppFeatureGrid/handbag.svg";
import overlap from "../../assets/AppFeatureGrid/overlap.svg";
import calander from "../../assets/AppFeatureGrid/calander.svg";

const features = [
  {
    title: 'Industrial Experience',
    description: 'Hire mobile app developers who have an enriched experience working with various industries. They have perfected the art of developing mobile apps that were well-received and commercially viable.',
    icon: handbag, // Replace with actual icon path
  },
  {
    title: 'Adept At Latest Technologies',
    description: 'Our mobile app developers are well-versed in the latest technologies, such as Geo Tracking, Artificial Intelligence, Machine Learning, Deep Analytics, Cloud Computing and more.',
    icon: gear, // Replace with actual icon path
  },
  {
    title: 'Full Transparency',
    description: 'Hire the best mobile app developers who ensure full transparency of the app development life cycle through daily collaborative meetings. The team will keep you updated on the latest product enhancements while integrating your feedback into the process.',
    icon: overlap, // Replace with actual icon path
  },
  {
    title: 'Timely Delivery',
    description: 'Looking to complete your project within the predetermined time frame? We are here for it! Put your faith in our well-reasoned mobile app development team because we utilize techniques such as work breakdown structure (WBS) and PERT to reach better time estimates.',
    icon: calander, // Replace with actual icon path
  }
];

const AppFeatureGrid = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hire Mobile App Developers to Increase Sell-Through</h1>
      <p className={styles.subtitle}>As a top mobile app development services company in the U.S.A, our mobile app developers are well-aware of the trends in the mobile-centric society to reach global markets and boost profits.</p>
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