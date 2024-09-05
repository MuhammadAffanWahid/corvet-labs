import React from 'react';
import styles from './AppTechStack.module.css';
import { appTechStackContent } from '../../content'; // Import content

const TechGrid = () => {
  const { title, techList } = appTechStackContent;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
        {techList.map((tech, index) => (
          <div key={index} className={styles.card}>
            <img src={tech.icon} alt={tech.name} className={styles.icon} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGrid;