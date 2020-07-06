import React from 'react';

import Nav from '../Navbar/Navbar';

import styles from './AboutHeader.module.scss';

import bgPatternAboutMobile from '../../assets/images/bg-pattern-about-1-mobile-nav-1.svg';

const AboutHeader = () => {
  return (
    <div className={styles.AboutHeader}>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.headline}>About</h1>
        <p className={styles.text}>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </div>
      <img
        src={bgPatternAboutMobile}
        alt="Pattern"
        className={styles.pattern}
      />
    </div>
  );
};

export default AboutHeader;
