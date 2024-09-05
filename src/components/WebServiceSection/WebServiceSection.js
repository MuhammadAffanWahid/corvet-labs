import React from "react";
import styles from "./WebServiceSection.module.css";
import { webServiceSectionContent } from "../../content"; // Import content

const WebServiceSection = () => {
  const { title, description, services } = webServiceSectionContent;

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.container}>
        {services.map((service) => (
          <div key={service.id} className={styles.service}>
            <img
              src={service.icon}
              alt={service.title}
              className={styles.icon}
            />
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebServiceSection;