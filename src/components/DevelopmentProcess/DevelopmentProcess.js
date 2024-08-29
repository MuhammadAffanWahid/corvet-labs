import React, { useState } from "react";
import styles from "./DevelopmentProcess.module.css";
import development from "../../assets/DevelopmentProcess/development.png";
import planning from "../../assets/DevelopmentProcess/planning.png";
import qa from "../../assets/DevelopmentProcess/qa.png";
import prototype from "../../assets/DevelopmentProcess/prototype.png";
import strategy from "../../assets/DevelopmentProcess/strategy.png";

const DevelopmentProcess = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const steps = [
    {
      number: 0,
      title: "Requirement Gathering",
      description:
        "Initially, we start with planning out a strategic idea of how we will be carrying out the entire web application development process. ",
    },
    {
      number: 1,
      title: "Design & Prototyping",
      description:
        "To save ourselves from excessive obstacles, we discuss how the web app will perform and what results we should expect.   ",
    },
    {
      number: 2,
      title: "Development",
      description:
        "After the small details have been taken care of, we delve into the real challenge “the development phase”.",
    },
    {
      number: 3,
      title: "Testing & QA",
      description:
        "Quality assurance (QA) is one major step in web app development because it ensures the web app is free from bugs and works without flaws. ",
    },
    {
      number: 4,
      title: "Deployment & Support",
      description:
        "Speaking of updates and maintenance, we work hard on your project even after the product is completely developed.  ",
    },
  ];

  const images = {
    0: planning,
    1: strategy,
    2: prototype,
    3: development,
    4: qa,
  };

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          A Snapshot Of Our Web Application Development Process
        </h2>
        <p className={styles.description}>
          Following is the process of our web application development services
          that has enabled us to leave our digital footprints across the IT
          sector:
        </p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div>
                <div
                  key={index}
                  className={`${styles.stepItem} ${
                    expandedIndex === index ? styles.expanded : ""
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  <span className={styles.stepTitle}>{step.title}</span>
                  <span className={styles.stepNumber}>Step {step.number}</span>
                </div>{" "}
                {expandedIndex === index && (
                  <div className={styles.expandedContent}>
                    {step.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <img
            src={images[expandedIndex] || images[1]}
            alt="Process Step"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
