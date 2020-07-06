import React from 'react';
import { navigate } from '@reach/router';

import styles from './Footer.module.scss';

import logo from '../../assets/images/logo.svg';
import fb from '../../assets/images/icon-facebook.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import twitter from '../../assets/images/icon-twitter.svg';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.group}>
          <img
            src={logo}
            alt="Logo"
            className={styles.logo}
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
          />
          <ul className={styles.nav}>
            <li>
              <p
                onClick={() => {
                  navigate('/');
                  window.scrollTo(0, 0);
                }}
              >
                home
              </p>
            </li>
            <li>
              <p
                onClick={() => {
                  navigate('/about');
                  window.scrollTo(0, 0);
                }}
              >
                about
              </p>
            </li>
          </ul>
        </div>
        <p className={styles.details}>
          987 Hillcrest Lane
          <br /> Irvine, CA
          <br /> California 92714
          <br /> Call Us : 949-833-7432
        </p>
        <div className={styles.images}>
          <img src={fb} alt="Facebook" />
          <img src={pinterest} alt="Pinterest" />
          <img src={twitter} alt="Twitter" />
        </div>
        <p className={styles.copyright}>Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
