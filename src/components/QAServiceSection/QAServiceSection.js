import React from 'react';
import styles from './QAServiceSection.module.css';

// Import SVG icons
import shield from '../../assets/QAServiceSection/shield.svg';
import backend from '../../assets/QAServiceSection/backend.svg';
import gear from '../../assets/QAServiceSection/gear.svg';
import magnifier from '../../assets/QAServiceSection/magnifier.svg';
import mobile from '../../assets/QAServiceSection/mobile.svg';
import abtesting from '../../assets/QAServiceSection/abtesting.svg';

const services = [
    {
        id: 1,
        title: 'Backend Testing Services',
        description: 'We do backend testing, which has APIs & database checks, and our QAs with development team test new features to warrant smooth functioning.',
        icon: backend,
    },
    {
        id: 2,
        title: 'Managed Testing Services',
        description: 'Get a dedicated testing team for your project, managed in-house by our pro-QA managers. Hire your team in just two days to get started.',
        icon: shield,
    },
    {
        id: 3,
        title: 'Automated Testing Services',
        description: 'Automate a human-driven manual testing process for efficient & error-free testing. We use the latest tools to validate your software product.',
        icon: magnifier,
    },
    {
        id: 4,
        title: 'Manual Testing Services',
        description: 'We offer manual testing services for functional testing needs where test cases & scenarios are executed manually without automated tools.',
        icon: gear,
    },
    {
        id: 5,
        title: 'Mobile App Testing Services',
        description: 'Give your users a top mobile app experience to increase the conversion rate of your business with our quality assurance testing services.',
        icon: mobile,
    },
    {
        id: 6,
        title: 'Performance Testing',
        description: 'Profit from a variety of services we deploy such as load & volume testing to check an app’s performance under high user load conditions.',
        icon: abtesting,
    },
];

const QAServiceSection = () => {
    return (
        <section className={styles.qaServiceSection}>
            <h2 className={styles.heading}>Our Software Quality Assurance Services That Guarantee Success</h2>
            <p className={styles.subheading}>
                Optimize your product cycle with our software quality assurance testing services. Whether you require a few QA engineers or an entire automation team, we have got you covered. Explore our comprehensive services structured to fulfill all your QA needs.
            </p>
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