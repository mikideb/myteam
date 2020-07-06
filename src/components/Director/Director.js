import React, { useState } from 'react';

import styles from './Director.module.scss';

import cross from '../../assets/images/icon-cross.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import linkedin from '../../assets/images/icon-linkedin.svg';

const Director = ({ name, title, imageURL, quote }) => {
  const [showQuote, setShowQuote] = useState(false);

  const frontSide = (
    <div className={styles.frontSide}>
      <img src={imageURL} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.title}>{title}</p>
      <div className={styles.btn} onClick={() => setShowQuote(!showQuote)}>
        <img src={cross} alt="Cross" />
      </div>
    </div>
  );

  const backSide = (
    <div
      className={styles.backSide}
      style={{
        transform: showQuote ? 'translateY(0)' : 'translateY(100%)',
        opacity: showQuote ? '1' : '0'
      }}
    >
      <p className={styles.name}>{name}</p>
      <p className={styles.quote}>{`"${quote}"`}</p>
      <div className={styles.links}>
        <img src={twitter} alt="Twitter" />
        <img src={linkedin} alt="Linkedin" />
      </div>
      <div className={styles.btn} onClick={() => setShowQuote(!showQuote)}>
        <img src={cross} alt="Cross" />
      </div>
    </div>
  );

  return (
    <div className={styles.Director}>{showQuote ? backSide : frontSide}</div>
  );
};

export default Director;
