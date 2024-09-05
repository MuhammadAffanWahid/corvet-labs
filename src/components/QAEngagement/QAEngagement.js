import React from 'react';
import styles from './QAEngagement.module.css';
import { qaEngagementContent } from '../../content'; // Import content

const QAEngagement = () => {
    const { heading, subheading, engagementModels } = qaEngagementContent;

    return (
        <section className={styles.qaEngagementSection}>
            <div className={styles.contentContainer}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.subheading}>{subheading}</p>
                <div className={styles.modelsContainer}>
                    {engagementModels.map(model => (
                        <div key={model.id} className={styles.modelCard}>
                            {model.icon}
                            <h3 className={styles.modelTitle}>{model.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QAEngagement;