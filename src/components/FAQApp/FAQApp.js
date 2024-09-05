import React, { useState } from 'react';
import styles from './FAQApp.module.css';
import { faqAppContent } from '../../content'; // Import content

const FAQApp = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const { title, faqs } = faqAppContent;

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>{title}</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div
            className={`${styles.faqQuestion} ${
              selectedQuestion === index ? styles.active : ''
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <span>{`0${index + 1} `}</span><p>{faq.question}</p>
            <span className={styles.faqToggle}>
              {selectedQuestion === index ? '−' : '+'}
            </span>
          </div>
          {selectedQuestion === index && (
            <div className={styles.faqAnswer}>{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQApp;