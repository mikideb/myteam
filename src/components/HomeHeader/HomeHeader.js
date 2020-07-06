import React from 'react';

import Navbar from '../Navbar/Navbar';

import styles from './HomeHeader.module.scss';

import bgPatternHome from '../../assets/images/bg-pattern-home-1.svg';
import bgPattern2 from '../../assets/images/bg-pattern-home-2.svg';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Navbar />
      <img src={bgPatternHome} alt="Pattern" className={styles.bgPatternHome} />
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Find the <br /> best <span>talent</span>
        </h1>
        <p className={styles.text}>
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <img src={bgPattern2} alt="Pattern" className={styles.bgPattern2} />
    </div>
  );
};

export default Header;
