import React from 'react';
import styles from './QAWhyUs.module.css';

// Import the image used on the right side
import qaImage from '../../assets/QAWhyUs/qa-image.png';
// import tick from '../../assets/WhyUsWeb/tick.png';

const QAWhyUs = () => {
    return (
        <section className={styles.qaWhyUsSection}>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.heading}>
                        Why Choose InvoZone’s Software Quality Assurance Services?
                    </h2>
                    <p className={styles.subheading}>
                        Enjoy the perks of our top-notch software quality assurance services that guarantee to make your products high quality. Here are the reasons why we are hired by big brands.
                    </p>
                    <ul className={styles.benefitsList}>
                        <li>300+ project completion & 10+ years of experience</li>
                        <li>Dedicated QA team always on toes</li>
                        <li>Efficient bug killing & zero severe defects</li>
                        <li>Accelerated deliverables at low cost</li>
                        <li>Time Zone aligned services & user-centric approach</li>
                        <li>Flexibility at its peak: monthly, hourly, part-time hiring models</li>
                        <li>Strong belief in timely, friendly & open communication</li>
                        <li>Holistic approach & structured process for flawless execution</li>
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