import React, { useState } from 'react';
import styles from './QAFAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are quality assurance services?",
      answer: "Quality assurance services include systematic activities and processes to make sure that products or services meet the predefined quality standards. These services consist of testing, process, improvement and adherence to best standards. The QA function is to detect and solve the defects, enhance reliability and make sure that the final deliverables meet or exceed the customer expectations, maintaining the overall quality and customer satisfaction.",
    },
    {
      question: "What do SQA engineers do?",
      answer: "The Software Quality Assurance (SQA) engineers plan software quality assurance activities throughout the product life cycle, set SQA checkpoints, conduct manual testing, write automated SQA testing scripts, and all in all, they ensure that software is bug-free.",
    },
    {
      question: "What are the elements of software quality assurance control in software testing?",
      answer: "There are multiple SQA control elements namely: \n Technical reviews and audits \n Error collection and analysis \n Software testing for quality control \n Security management \n Software engineering standards",
    },
    {
      question: "What are examples of software quality assurance metrics?",
      answer: "SQA activities include process checklists, standards, project audits, and documentation. The quality control activities involved in this process are inspection, deliverable peer reviews, and the software testing process.",
    },
    {
      question: "What Are The Benefits of QA testing?",
      answer: "Quality Assurance (QA) testing ensures the reliability of the software by detecting and fixing bugs early in the development cycle.  It enhances the quality of product, increases user satisfaction and minimizes post-release issues. QA testing also reduces cost by catching defects early, increases efficiency of the team and develops confidence in software reliability.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Questions You May Have</h2>
      <ul className={styles.faqList}>
        {faqs.map((faq, index) => (
          <li key={index} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <div>
              <span className={styles.questionNumber}>{String(index + 1).padStart(2, '0')}</span>
              <span>{faq.question}</span>
              </div>
              <span className={styles.toggleIcon}>
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
