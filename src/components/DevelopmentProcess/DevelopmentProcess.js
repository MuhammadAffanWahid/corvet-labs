import React, { useState } from 'react';
import styles from './DevelopmentProcess.module.css';
import development from '../../assets/DevelopmentProcess/development.png'; // replace with correct path
import maintainance from '../../assets/DevelopmentProcess/maintainance.png'; // replace with correct path
import planning from '../../assets/DevelopmentProcess/planning.png'; // replace with correct path
import qa from '../../assets/DevelopmentProcess/qa.png'; // replace with correct path
import prototype from '../../assets/DevelopmentProcess/prototype.png'; // replace with correct path
import strategy from '../../assets/DevelopmentProcess/strategy.png'; // replace with correct path

const steps = [
  { id: 1, title: 'Planning', description: 'Initially, we start with planning out a strategic idea of how we will be carrying out the entire web application development process.' },
  { id: 2, title: 'Strategizing The Development', description: 'Strategizing the entire development process to ensure smooth execution.' },
  { id: 3, title: 'Prototype', description: 'Building a prototype to visualize the web application.' },
  { id: 4, title: 'Development Phase', description: 'Actual development begins with constant communication with the client.' },
  { id: 5, title: 'Quality Assurance', description: 'Rigorous testing to ensure quality and functionality.' },
  { id: 6, title: 'Updates And Maintenance', description: 'Continuous support and updates for your application.' },
];

const images = {
  1: planning,
  2: strategy,
  3: prototype,
  4: development,
  5: qa,
  6: maintainance,
};

const DevelopmentProcess = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (stepId) => {
    setExpandedStep(stepId === expandedStep ? null : stepId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Column - Steps */}
        <div className={styles.leftColumn}>
          <h2 className={styles.title}>
            A Snapshot Of Our Web Application Development Process
          </h2>
          <p className={styles.description}>
            Following is the process of our web application development services that has enabled us to leave our digital footprints across the IT sector:
          </p>
          {steps.map((step) => (
            <div key={step.id}>
              <div
                className={styles.stepItem}
                onClick={() => toggleStep(step.id)}
              >
                <div>
                  <h3 className={styles.stepTitle}>
                    {step.title}
                  </h3>
                  <span className={styles.stepNumber}>
                    Step 0{step.id}
                  </span>
                </div>
                <span className={styles.stepIcon}>
                  {expandedStep === step.id ? '-' : '+'}
                </span>
              </div>
              {expandedStep === step.id && (
                <p className={styles.expandedContent}>
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>
        {/* Right Column - Image */}
        <div className={styles.rightColumn}>
          <img
            src={images[expandedStep] || images[1]} // Default image for the first step
            alt="Process Step"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcess;
