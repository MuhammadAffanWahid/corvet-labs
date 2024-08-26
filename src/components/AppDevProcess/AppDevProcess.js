// import React, { useState } from 'react';
// import styles from './AppDevProcess.module.css';

// const steps = [
//   { name: 'Planning', description: 'Take time to determine the problem statement, define the scope, set deliverables meticulously, and secure funding.' },
//   { name: 'Design', description: 'Leverage the skillsets of our seasoned UI/UX design team by crafting aesthetically strong and functional designs.' },
//   { name: 'MVP Development', description: 'Get ready to minimize costs and risks with our dedicated mobile app development team, who move swiftly through a seamless MVP development process.' },
//   { name: 'Product Development', description: 'Achieve agility and respond to changing business requirements through sprints, incorporating customer feedback and addressing their pain points.' },
//   { name: 'Software Quality Assurance', description: 'Cut down the cost with our automated software quality assurance to assure bug-free functionality and build strong walls with our penetration testing services.' },
//   { name: 'DevOps Services', description: 'Work with our developers who employ tried-and-true DevOps practices for continuous delivery, resilient data pipelines and velocious time-to-market.' },
//   { name: 'Support & Maintenance', description: 'Deliver high-performance software products to your target audience by providing on-call production support, product enhancements, and training.' },
// ];

// const AppDevProcess = () => {
//   const [activeStep, setActiveStep] = useState(3); // Start with "Product Development" as active

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Discover Our Fine-Tuned Mobile Application Development Process</h1>
//       <p className={styles.subtitle}>Journey with us into the universal mobile app development process to paint the canvas of your next big project.</p>
//       <div className={styles.process}>
//         <div className={styles.steps}>
//           {steps.map((step, index) => (
//             <p
//               key={index}
//               className={index === activeStep ? styles.activeStep : ''}
//               onClick={() => setActiveStep(index)}
//             >
//               {step.name}
//             </p>
//           ))}
//         </div>
//         <div className={styles.description}>
//           <div className={styles.text}>
//             <h2>{steps[activeStep].name}</h2>
//             <p>{steps[activeStep].description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppDevProcess;


import React, { useState } from 'react';
import styles from './AppDevProcess.module.css';

const steps = [
  { name: 'Planning', description: 'Take time to determine the problem statement, define the scope, set deliverables meticulously, and secure funding.' },
  { name: 'Design', description: 'Leverage the skillsets of our seasoned UI/UX design team by crafting aesthetically strong and functional designs.' },
  { name: 'MVP Development', description: 'Get ready to minimize costs and risks with our dedicated mobile app development team, who move swiftly through a seamless MVP development process.' },
  { name: 'Product Development', description: 'Achieve agility and respond to changing business requirements through sprints, incorporating customer feedback and addressing their pain points.' },
  { name: 'Software Quality Assurance', description: 'Cut down the cost with our automated software quality assurance to assure bug-free functionality and build strong walls with our penetration testing services.' },
  { name: 'DevOps Services', description: 'Work with our developers who employ tried-and-true DevOps practices for continuous delivery, resilient data pipelines and velocious time-to-market.' },
  { name: 'Support & Maintenance', description: 'Deliver high-performance software products to your target audience by providing on-call production support, product enhancements, and training.' },
];

const AppDevProcess = () => {
  const [activeStep, setActiveStep] = useState(3); // Start with "Product Development" as active

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Discover Our Fine-Tuned Mobile Application Development Process</h1>
      <p className={styles.subtitle}>Journey with us into the universal mobile app development process to paint the canvas of your next big project.</p>
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