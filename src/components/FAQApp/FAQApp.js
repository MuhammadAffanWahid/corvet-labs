import React, { useState } from 'react';
import styles from './FAQApp.module.css';

const FAQApp = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can you choose the right mobile app development company for your project?',
      answer: (
        <div>
          <p>Building a mobile app is no small treat. You need the best of the best. Thus, choosing the right mobile app development company is crucial. Follow the clear-and-cut steps, as mentioned below, to find the right match for your project:</p>
          <ul>
            <li>Qualification and Experience</li>
            <li>References and Portfolio</li>
            <li>Mobile App Development Cost</li>
            <li>Communication Process</li>
          </ul>
        </div>
      ),
    },
    {
      question: 'What is the mobile app development process?',
      answer: (
        <div>
          <p>At InvoZone, our methodologies evolve around the project requirements because each app is different.</p>
          <p>InvoZone offers a customer-centric process that involves a consultation session in which we discuss the ins and outs of your project so when we launch the projects, our team is well-prepared.</p>
          <p>Once the development stage kicks off, we design the architecture and UI/UX of the design. Our competent mobile app development team develops, tests, deploys and then releases the mobile application. If our client requests, we provide prolonged support and maintenance services, which is the final stage of our progressive mobile application development solutions process. The objective of each activity and action taken is to make our platform user-friendly and effective for your business in the long run.</p>
        </div>
      ),
    },
    {
      question: 'How to outsource from a mobile app development company?',
      answer: (
        <div>
          <p>Outsourcing from a mobile application development company is cost-effective, the trend being fueled by rapid globalization and remote working models.</p>
          <p>To hire pre-vetted developers and engineers from the top talent pool of InvoZone, you can choose from our well-engineered engagement models:</p>
          <ul>
            <li>Resource Augmentation</li>
            <li>Dedicated Team</li>
            <li>Fixed Gigs</li>
          </ul>
          <p>Contact us to explore the value-added services of each engagement model. We are waiting to hear from you.</p>
        </div>
      ),
    },
    {
      question: 'Why is mobile app development important for your business?',
      answer: (
        <div>
          <p>Each business owner wants to reach a wider audience base, increase brand awareness, and boost revenue and sales. Mobile app development companies can get you a step closer to these outcomes.</p>
          <p>Smartphone applications have enabled users to work remotely, make online orders, make financial transactions, and connect with customers. Ultimately, they build stronger brand awareness and recognition, deliver value to your customers, give you a competitive edge in your niche, build a direct and personalized marketing channel, and generate a new and stable revenue stream.</p>
        </div>
      ),
    },
    {
      question: 'Why outsource dedicated mobile app developers from InvoZone?',
      answer: (
        <div>
          <p>It is always better to outsource your project to the best mobile app development company when your main objective is to increase return on investment (ROI), either in terms of customer base or operational efficiency. Most importantly, outsourcing dedicated mobile app developers from InvoZone, a bespoke mobile application development agency in the USA, will reduce the development cost, provide ongoing support, ensure quality, access to the latest technologies and expertise, faster project completion and more.</p>
        </div>
      ),
    },
    {
      question: 'What is custom mobile app development?',
      answer: (
        <div>
          <p>Custom mobile app development is the process of creating apps that are specially tailored to your company's needs. Such an app, whether fully or partially personalized, is designed to meet the demands of a specific audience rather than a large group of individuals.</p>
        </div>
      ),
    },
    {
      question: 'What is the difference between a hybrid app and a native app?',
      answer: (
        <div>
          <p>The primary distinction between hybrid and native applications is defined as follows:</p>
          <ul>
            <li>Hybrid apps are created for all platforms. They are a combination of web apps and native apps. You can access them via a web browser and download them from app stores.</li>
            <li>Native apps are created for specific operating systems — iOS or Android. For instance, Android apps are written in Java, and iPhone apps are written in Objective-C or Swift.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
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