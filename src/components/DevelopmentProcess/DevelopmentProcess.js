import React, { useState } from "react";
import styles from "./DevelopmentProcess.module.css";
import { developmentProcessContent } from "../../content"; // Import content

const DevelopmentProcess = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const { title, description, steps, images } = developmentProcessContent;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div key={index}>
                <div
                  className={`${styles.stepItem} ${
                    expandedIndex === index ? styles.expanded : ""
                  }`}
                  onClick={() => toggleExpand(index)}
                >
                  <span className={styles.stepTitle}>{step.title}</span>
                  <span className={styles.stepNumber}>Step {step.number}</span>
                </div>
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