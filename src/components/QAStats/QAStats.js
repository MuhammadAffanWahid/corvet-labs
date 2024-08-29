import React from "react";
import styles from "./QAStats.module.css";

const QAStats = () => {
  return (
    <section className={styles.qaStatsSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>
            Not only do we kill bugs, but we also boost the speed, responsiveness, and overall performance of your website.
          </h2>
          <button className={styles.ctaButton}>Request A Free Quote</button>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>300+</h3>
            <p className={styles.statDescription}>Project Completion</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.statNumber}>10+</h3>
            <p className={styles.statDescription}>Years Of Project Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QAStats;