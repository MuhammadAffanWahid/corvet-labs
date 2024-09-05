import React, { useState } from 'react';
import styles from './AppDevProcess.module.css';
import { appDevProcessContent } from '../../content'; // Import content

const AppDevProcess = () => {
  const [activeStep, setActiveStep] = useState(3); // Start with "Product Development" as active
  const { title, subtitle, steps } = appDevProcessContent;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.process}>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <p
              key={index}
              className={index === activeStep ? styles.activeStep : ''}
              onClick={() => setActiveStep(index)}
            >
              {step.name}
            </p>
          ))}
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
            <h2>{steps[activeStep].name}</h2>
            <p>{steps[activeStep].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevProcess;