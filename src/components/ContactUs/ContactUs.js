import React from 'react';
import { navigate } from '@reach/router';

import styles from './ContactUs.module.scss';

import bgPattern6 from '../../assets/images/bg-pattern-home-6-about-5.svg';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Ready to get started?</h2>
        <button
          className={styles.btn}
          onClick={() => {
            navigate('/contact');
            window.scrollTo(0, 0);
          }}
        >
          contact us
        </button>
      </div>
      <img src={bgPattern6} alt="Pattern" className={styles.pattern} />
    </div>
  );
};

export default Contact;
