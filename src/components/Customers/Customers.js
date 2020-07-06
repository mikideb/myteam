import React from 'react';

import styles from './Customers.module.scss';

import pattern from '../../assets/images/bg-pattern-about-4.svg';
import verge from '../../assets/images/logo-the-verge.png';
import jakarta from '../../assets/images/logo-jakarta-post.png';
import guardian from '../../assets/images/logo-the-guardian.png';
import techRadar from '../../assets/images/logo-tech-radar.png';
import gadgetsNow from '../../assets/images/logo-gadgets-now.png';

const Customers = () => {
  return (
    <div className={styles.Customers}>
      <img src={pattern} alt="Pattern" className={styles.pattern} />
      <h2 className={styles.headline}>Some of our clients</h2>
      <div className={styles.container}>
        <img src={verge} alt="The Verge" className={styles.verge} />
        <img src={jakarta} alt="Jakarta Post" className={styles.jakarta} />
        <img src={guardian} alt="The Guardian" className={styles.guardian} />
        <img src={techRadar} alt="Tech Radar" className={styles.techRadar} />
        <img src={gadgetsNow} alt="Gadgets Now" className={styles.gadgetsNow} />
      </div>
    </div>
  );
};

export default Customers;
