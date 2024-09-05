import React from 'react';
import styles from './CEOMessage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { aboutUsCeoMessage } from '../../content'; // Import content
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const CeoMessage = () => {
  return (
    <div className={styles.ceoMessageSection}>
      <div className={styles.messageContent}>
        <h2 className={styles.heading}>{aboutUsCeoMessage.heading}</h2>
        <p className={styles.greeting}>{aboutUsCeoMessage.greeting}</p>
        <p className={styles.message}>{aboutUsCeoMessage.message1}</p>
        <p className={styles.message}>{aboutUsCeoMessage.message2}</p>
        <p className={styles.message}>{aboutUsCeoMessage.message3}</p>
        <p className={styles.message}>{aboutUsCeoMessage.message4}</p>
        <p className={styles.message}>{aboutUsCeoMessage.message5}</p>
        <p className={styles.message}>{aboutUsCeoMessage.message6}</p>
      </div>
      <div className={styles.ceoProfile}>
        <img src={aboutUsCeoMessage.ceoImage} alt="CEO" className={styles.ceoImage} />
        <div className={styles.ceoDetails}>
          <h3 className={styles.ceoName}>{aboutUsCeoMessage.ceoName}</h3>
          <p className={styles.ceoTitle}>{aboutUsCeoMessage.ceoTitle}</p>
          <div className={styles.ceoLinks}>
            <a href={aboutUsCeoMessage.linkedinUrl} className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={`mailto:${aboutUsCeoMessage.email}`} className={styles.socialIcon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href={aboutUsCeoMessage.twitterUrl} className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;


// import React from 'react';
// import styles from './aboutUsCeoMessage.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import ceoImage from '../../assets/aboutUs/ceo.jpg'; // Update this path to the actual path of your image

// const aboutUsCeoMessage = () => {
//   return (
//     <div className={styles.AboutUsCeoMessageSection}>
//       <div className={styles.messageContent}>
//         <h2 className={styles.heading}>Message From The CEO</h2>
//         <p className={styles.greeting}>Hey Everyone,</p>
//         <p className={styles.message}>
//           Welcome to Corvet Labs, your trusted partner for software development and consultancy. I'm Furqan Aziz, the CEO of this esteemed company, and I'm excited to share our story and vision with you.
//         </p>
//         <p className={styles.message}>
//           At Corvet Labs, we believe in the power of software to transform industries and unlock boundless possibilities. Our team of exceptional professionals, specializing in technologies like Elixir, Laravel, ROR, AI/ML, and more, is here to drive your digital transformation journey.
//         </p>
//         <p className={styles.message}>
//           We go beyond being just developers; we're your strategic partners. We tailor solutions to ensure your success, foster long-lasting partnerships, and deliver top-notch software. Our innovative mindset keeps us at the forefront of the ever-evolving tech landscape.
//         </p>
//         <p className={styles.message}>
//           Integrity and transparency are the cornerstones of our culture. We earn your trust by delivering excellence and practicing open communication. Moreover, we actively support social causes and embrace sustainable practices to make a positive impact on our world.
//         </p>
//         <p className={styles.message}>
//           Let's shape the future together through technology. Choose Corvet Labs for exceptional results and leverage our resource augmentation or remote teams of software developers.
//         </p>
//         <p className={styles.message}>
//           Join us on this exciting journey, and let's make a difference together.
//         </p>
//       </div>
//       <div className={styles.ceoProfile}>
//         <img src={ceoImage} alt="CEO" className={styles.ceoImage} />
//         <div className={styles.ceoDetails}>
//           <h3 className={styles.ceoName}>Moaz Maalik</h3>
//           <p className={styles.ceoTitle}>CEO of Corvet Labs</p>
//           <div className={styles.ceoLinks}>
//             <a href="https://www.linkedin.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//             <a href="mailto:furqan@invozone.com" className={styles.socialIcon}>
//               <FontAwesomeIcon icon={faEnvelope} />
//             </a>
//             <a href="https://www.invozone.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default aboutUsCeoMessage;