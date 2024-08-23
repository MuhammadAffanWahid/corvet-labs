import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does Web application development cost?",
      answer: "The cost of web application development varies based on the complexity, features, and the technologies used.",
    },
    {
      question: "How much time does it take to develop a web application?",
      answer: "The development time depends on the scope and complexity of the project. It can range from a few weeks to several months.",
    },
    {
      question: "How to choose the best web application development company?",
      answer: "Consider the company's experience, portfolio, client reviews, and expertise in the required technologies.",
    },
    {
      question: "What is the difference between web application development and web development?",
      answer: "Web application development focuses on creating dynamic, interactive applications, while web development includes building websites and web content.",
    },
    {
      question: "Does InvoZone provide maintenance and support after developing a web app?",
      answer: "Yes, we provide ongoing maintenance and support to ensure your web application remains up-to-date and functional.",
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
