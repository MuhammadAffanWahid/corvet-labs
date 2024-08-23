// import React, { useState } from 'react';
// import styles from './DevelopmentProcess.module.css';
// import development from '../../assets/DevelopmentProcess/development.png';
// import maintainance from '../../assets/DevelopmentProcess/maintainance.png';
// import planning from '../../assets/DevelopmentProcess/planning.png';
// import qa from '../../assets/DevelopmentProcess/qa.png';
// import prototype from '../../assets/DevelopmentProcess/prototype.png';
// import strategy from '../../assets/DevelopmentProcess/strategy.png';

// const steps = [
//   { id: 1, title: 'Planning', description: 'Initially, we start with planning out a strategic idea of how we will be carrying out the entire web application development process.' },
//   { id: 2, title: 'Strategizing The Development', description: 'Strategizing the entire development process to ensure smooth execution.' },
//   { id: 3, title: 'Prototype', description: 'Building a prototype to visualize the web application.' },
//   { id: 4, title: 'Development Phase', description: 'Actual development begins with constant communication with the client.' },
//   { id: 5, title: 'Quality Assurance', description: 'Rigorous testing to ensure quality and functionality.' },
//   { id: 6, title: 'Updates And Maintenance', description: 'Continuous support and updates for your application.' },
// ];

// const images = {
//   1: planning,
//   2: strategy,
//   3: prototype,
//   4: development,
//   5: qa,
//   6: maintainance,
// };

// const DevelopmentProcess = () => {
//   const [expandedStep, setExpandedStep] = useState(null);

//   const toggleStep = (stepId) => {
//     setExpandedStep(stepId === expandedStep ? null : stepId);
//   };

//   return (
//     <div className={styles.container}>

//       <div className={styles.wrapper}>
//         {/* Left Column - Steps */}
//         <div className={styles.leftColumn}>
//           <div className={styles.stepsContainer}>
//             {steps.map((step) => (
//               <div key={step.id}>
//                 <div
//                   className={styles.stepItem}
//                   onClick={() => toggleStep(step.id)}
//                 >
//                   <div>
//                     <h3 className={styles.stepTitle}>
//                       {step.title}
//                     </h3>
//                     <span className={styles.stepNumber}>
//                       Step 0{step.id}
//                     </span>
//                   </div>
//                   <span className={styles.stepIcon}>
//                     {expandedStep === step.id ? '-' : '+'}
//                   </span>
//                 </div>
//                 {expandedStep === step.id && (
//                   <p className={styles.expandedContent}>
//                     {step.description}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Right Column - Image */}
//         <div className={styles.rightColumn}>
//           <img
//             src={images[expandedStep] || images[1]} // Default image for the first step
//             alt="Process Step"
//             className={styles.image}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevelopmentProcess;

import React, { useState } from "react";
import styles from "./DevelopmentProcess.module.css";
import development from "../../assets/DevelopmentProcess/development.png";
import maintainance from "../../assets/DevelopmentProcess/maintainance.png";
import planning from "../../assets/DevelopmentProcess/planning.png";
import qa from "../../assets/DevelopmentProcess/qa.png";
import prototype from "../../assets/DevelopmentProcess/prototype.png";
import strategy from "../../assets/DevelopmentProcess/strategy.png";

const DevelopmentProcess = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Requirement Gathering",
      description:
        "Initially, we start with planning out a strategic idea of how we will be carrying out the entire web application development process. ",
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description:
        "To save ourselves from excessive obstacles, we discuss how the web app will perform and what results we should expect.   ",
    },
    {
      number: 3,
      title: "Development",
      description:
        "After the small details have been taken care of, we delve into the real challenge “the development phase”.",
    },
    {
      number: 4,
      title: "Testing & QA",
      description:
        "Quality assurance (QA) is one major step in web app development because it ensures the web app is free from bugs and works without flaws. ",
    },
    {
      number: 5,
      title: "Deployment & Support",
      description:
        "Speaking of updates and maintenance, we work hard on your project even after the product is completely developed.  ",
    },
  ];

  const images = {
    1: planning,
    2: strategy,
    3: prototype,
    4: development,
    5: qa,
    6: maintainance,
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
