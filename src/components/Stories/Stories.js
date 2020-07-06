import React from 'react';

import styles from './Stories.module.scss';

import bgPattern4 from '../../assets/images/bg-pattern-home-4-about-3.svg';
import quotes from '../../assets/images/icon-quotes.svg';
import kady from '../../assets/images/avatar-kady.jpg';
import aiysha from '../../assets/images/avatar-aiysha.jpg';
import arthur from '../../assets/images/avatar-arthur.jpg';
import bgPattern5 from '../../assets/images/bg-pattern-home-5.svg';

const Stories = () => {
  return (
    <div className={styles.Stories}>
      <img src={bgPattern4} alt="Pattern" className={styles.patternTop} />
      <div className={styles.container}>
        <h2 className={styles.header}>
          Delivering real results for top companies. Some of our{' '}
          <span>success stories.</span>
        </h2>
        <div className={styles.content}>
          <div className={styles.story}>
            <img src={quotes} alt="Quotes" />
            <p className={styles.text}>
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <h3 className={styles.name}>Kady Baker</h3>
            <h4 className={styles.title}>Product Manager at Bookmark</h4>
            <img src={kady} alt="Kady" className={styles.img} />
          </div>
          <div className={styles.story}>
            <img src={quotes} alt="Quotes" />
            <p className={styles.text}>
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”
            </p>
            <h3 className={styles.name}>Aiysha Reese</h3>
            <h4 className={styles.title}>Founder of Manage</h4>
            <img src={aiysha} alt="Aiysha" className={styles.img} />
          </div>
          <div className={styles.story}>
            <img src={quotes} alt="Quotes" />
            <p className={styles.text}>
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <h3 className={styles.name}>Arthur Clarke</h3>
            <h4 className={styles.title}>Co-founder of MyPhysio</h4>
            <img src={arthur} alt="Arthur" className={styles.img} />
          </div>
        </div>
      </div>
      <img src={bgPattern5} alt="Pattern" className={styles.patternBottom} />
    </div>
  );
};

export default Stories;
