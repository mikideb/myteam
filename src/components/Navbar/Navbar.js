import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';

import styles from './Navbar.module.scss';

import logo from '../../assets/images/logo.svg';
import bgPattern1 from '../../assets/images/bg-pattern-about-1-mobile-nav-1.svg';
import close from '../../assets/images/icon-close.svg';

const Nav = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

  const handleSideDrawer = () => setIsSideDrawerOpen(!isSideDrawerOpen);

  return (
    <nav className={styles.Nav}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
        onClick={() => navigate('/')}
      />
      <div
        className={styles.backdrop}
        onClick={() => handleSideDrawer()}
        style={{ visibility: isSideDrawerOpen ? 'visible' : 'hidden' }}
      />
      <div
        className={styles.sideDrawer}
        style={{
          transform: isSideDrawerOpen ? 'translateX(0)' : null
        }}
      >
        <img
          src={close}
          alt="Close"
          className={styles.close}
          onClick={() => handleSideDrawer()}
        />
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">
              <p>home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>about</p>
            </Link>
          </li>
        </ul>
        <Link to="/contact">
          <button className={styles.btn}>contact us</button>
        </Link>
        <img src={bgPattern1} alt="Pattern" className={styles.bgPattern1} />
      </div>
      <div className={styles.burger} onClick={() => handleSideDrawer()}>
        <div className={styles.line} />
      </div>
    </nav>
  );
};

export default Nav;
