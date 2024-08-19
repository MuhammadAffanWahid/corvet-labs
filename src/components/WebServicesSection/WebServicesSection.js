import React from "react";
import styles from "./WebServicesSection.module.css";
import frontend from "../../assets/WebServicesSection/frontend.svg";
import backend from "../../assets/WebServicesSection/backend.svg";
import designing from "../../assets/WebServicesSection/designing.svg";
import management from "../../assets/WebServicesSection/management.svg";
import quality_assurance from "../../assets/WebServicesSection/quality_assurance.svg";

const WebServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Front-End Development",
      description:
        "Create a visual identity for your business.",
      icon: frontend,
    },
    {
      id: 2,
      title: "Back-End Development",
      description: "Get a transparent view and third-party integrations.  ",
      icon: backend,
    },
    {
      id: 3,
      title: "Designing Services",
      description: "Get an attractive appearance of your project. ",
      icon: designing,
    },
    {
      id: 4,
      title: "Project Management",
      description: "Our skilled project managers get every thing done efficiently.",
      icon: management,
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "We guarantee perfection using autometic testing methods.",
      icon: quality_assurance,
    },
  ];

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>The Technology Stacks We Specialize In</h1>
      <p className={styles.description}>
        Our senior software engineers for web application development services
        rank among the world’s best talent currently. Following are the tech
        stacks we offer:
      </p>
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

export default WebServicesSection;
