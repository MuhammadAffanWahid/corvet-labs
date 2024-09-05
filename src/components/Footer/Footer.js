import React from "react";
import styles from './Footer.module.css';
import { footerContent } from '../../content'; // Import the content

const Footer = () => {
    const { companyName, description, socialMedia, servicesAddress, headOffice, openingHours, copyright } = footerContent;

    return (
        <>
            <div style={{ backgroundColor: '#2b2b2b', paddingTop: '89px', paddingBottom: '90px' }}>
                <div className="container">
                    <div className="row">
                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.logo}>{companyName}</p>
                            {description.map((text, index) => (
                                <p key={index} className={styles.text}>{text}</p>
                            ))}
                            <div className={styles.social_logo}>
                                {socialMedia.map((media, index) => (
                                    <img key={index} src={media.icon} alt={media.alt} className={styles.img} />
                                ))}
                            </div>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Services</p>
                            <p className={styles.text}>{servicesAddress.address}</p>
                            <p className={styles.text}>{servicesAddress.email}</p>
                            <p className={styles.text}>{servicesAddress.phone}</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Head Office</p>
                            <p className={styles.text}>{headOffice.address}</p>
                            <p className={styles.text}>{headOffice.email}</p>
                            <p className={styles.text}>{headOffice.phone}</p>
                        </div>

                        <div className={`col-lg-3 col-sm-6 ${styles.contain}`}>
                            <p className={styles.head}>Opening Hour</p>
                            <p className={styles.text}>{openingHours.weekdays}</p>
                            <p className={styles.text}>{openingHours.weekend}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#2b2b2b', borderTop: 'solid 1px #707070' }}>
                <p className={styles.bottom}>{copyright}</p>
            </div>
        </>
    );
};

export default Footer;