import React from "react";
import styles from "./QAStats.module.css";
import { qaStatsContent } from "../../content"; // Import content

const QAStats = () => {
  const { heading, ctaButton, stats } = qaStatsContent;

  return (
    <section className={styles.qaStatsSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>{heading}</h2>
          <button className={styles.ctaButton}>{ctaButton}</button>
        </div>
        <div className={styles.statsContainer}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <h3 className={styles.statNumber}>{stat.number}</h3>
              <p className={styles.statDescription}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QAStats;