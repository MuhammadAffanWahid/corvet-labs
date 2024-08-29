import React, { useState } from "react";
import styles from "./QADevProcess.module.css";
import analysis from "../../assets/QADevProcess/analysis.png";
import planning from "../../assets/QADevProcess/planning.png";
import design from "../../assets/QADevProcess/design.png";
import bugreport from "../../assets/QADevProcess/bugreport.png";
import closure from "../../assets/QADevProcess/closure.png";

const QADevProcess = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const steps = [
    {
      number: 0,
      title: "Requirement Analysis",
      description:
        "Here our QA team understands & researches your requirements, such as what is to be tested & tools etc. Analyzes the needs throughout the STLC phase identifies the tests to be performed and prepares Requirement Traceability Matrix (RTM).",
    },
    {
      number: 1,
      title: "Test Planning",
      description:
        "The QA manager decides the test plan strategy, project’s cost, tools, resource allocation, deadline, sprints and training requirements. Also determines the roles and responsibilities of each member and the types of testing necessary for the project.",
    },
    {
      number: 2,
      title: "Test Design",
      description:
        "Here, the testing team records & reviews test cases and prepares test data. Also, decide the environments under which a work product is evaluated. Performs a smoke test on build & makes sure that software is fine- when further investigation starts.",
    },
    {
      number: 3,
      title: "Execution & Bug Reporting",
      description:
        "Testers execute all the test cases made in the test design part, run test scripts, report bugs & track defects. It also involves testing types such as performance testing, unit testing or cross-platform testing.",
    },
    {
      number: 4,
      title: "Test Closure",
      description:
        "In the last step, we document a summary of the project's entire testing process, evaluate the test results and note the improvement areas so that you can identify action items for your future projects.",
    },
  ];

  const images = {
    0: analysis,
    1: planning,
    2: design,
    3: bugreport,
    4: closure,
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
            src={images[expandedIndex] || images[0]}
            alt="Process Step"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default QADevProcess;
