import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { faqContent } from '../../content'; // Import content

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const { title, faqs } = faqContent;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
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