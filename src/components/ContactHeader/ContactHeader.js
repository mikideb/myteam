import React from 'react';

import Navbar from '../Navbar/Navbar';
import Form from '../Form/Form';

import styles from './ContactHeader.module.scss';
import person from '../../assets/images/icon-person.svg';
import cog from '../../assets/images/icon-cog.svg';
import chart from '../../assets/images/icon-chart.svg';
import patternTop from '../../assets/images/bg-pattern-about-2-contact-1.svg';
import patternBottom from '../../assets/images/bg-pattern-contact-2.svg';

const subContainers = [
  { iconURL: person, text: 'The quality of our talent network', id: 1 },
  { iconURL: cog, text: 'Usage & implementation of our software', id: 2 },
  { iconURL: chart, text: 'How we help drive innovation', id: 3 }
];

const ContactHeader = () => {
  return (
    <div className={styles.ContactHeader}>
      <Navbar />
      <img src={patternTop} alt="Pattern" className={styles.patternTop} />
      <div className={styles.gridContainer}>
        <h1 className={styles.headlineMain}>Contact</h1>
        <h2 className={styles.headlineSecondary}>Ask us about</h2>
        <div className={styles.containerMain}>
          {subContainers.map(content => (
            <div className={styles.containerSub} key={content.id}>
              <img src={content.iconURL} alt="Icon" className={styles.icon} />
              <p className={styles.text}>{content.text}</p>
            </div>
          ))}
        </div>
        <Form />
      </div>
      <img src={patternBottom} alt="Pattern" className={styles.patternBottom} />
    </div>
  );
};

export default ContactHeader;
