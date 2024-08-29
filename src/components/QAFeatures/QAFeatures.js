import React from 'react';
import styles from './QAFeatures.module.css';

// Import the SVG icons
import stars from '../../assets/QAFeatures/stars.svg';
import growth from '../../assets/QAFeatures/growth.svg';
import meeting from '../../assets/QAFeatures/meeting.svg';
import gear from '../../assets/QAFeatures/gear.svg';

const features = [
    {
        id: 1,
        title: 'Quality & Transparency',
        icon: stars,
    },
    {
        id: 2,
        title: 'Your Success is our priority',
        icon: growth,
    },
    {
        id: 3,
        title: 'Meeting Deadlines',
        icon: meeting,
    },
    {
        id: 4,
        title: 'Close Cooperation',
        icon: gear,
    },
];

const QAFeatures = () => {
    return (
        <section className={styles.qaFeaturesSection}>
            <h2 className={styles.heading}>Ensure Successful Testing Collaboration With Us</h2>
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