import React from 'react';

import styles from './Main.module.scss';

import bgPattern3 from '../../assets/images/bg-pattern-home-3.svg';
import person from '../../assets/images/icon-person.svg';
import cog from '../../assets/images/icon-cog.svg';
import chart from '../../assets/images/icon-chart.svg';

const Main = () => {
  return (
    <div className={styles.Main}>
      <img src={bgPattern3} alt="Pattern" className={styles.bgPattern3} />
      <div className={styles.header}>
        <h2 className={styles.headline}>
          Build & manage distributed teams like no one else.
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <img src={person} alt="Person" className={styles.icon} />
          <div className={styles.flex}>
            <h3 className={styles.headline}>Experienced Individuals</h3>
            <p className={styles.text}>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <img src={cog} alt="Person" className={styles.icon} />
          <div className={styles.flex}>
            <h3 className={styles.headline}>Easy to Implement</h3>
            <p className={styles.text}>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <img src={chart} alt="Person" className={styles.icon} />
          <div className={styles.flex}>
            <h3 className={styles.headline}>Enhanced Productivity</h3>
            <p className={styles.text}>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
