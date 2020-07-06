import React from 'react';

import Director from '../Director/Director';

import styles from './Directors.module.scss';

import bgPatternTop from '../../assets/images/bg-pattern-about-2-contact-1.svg';
import bgPatternBottom from '../../assets/images/bg-pattern-home-4-about-3.svg';
import nikita from '../../assets/images/avatar-nikita.jpg';
import christian from '../../assets/images/avatar-christian.jpg';
import cruz from '../../assets/images/avatar-cruz.jpg';
import drake from '../../assets/images/avatar-drake.jpg';
import griffin from '../../assets/images/avatar-griffin.jpg';
import aden from '../../assets/images/avatar-aden.jpg';

const directors = [
  {
    name: 'Nikita Marks',
    title: 'Founder & CEO',
    imageURL: nikita,
    quote:
      'It always amazes me how much talent there is in every corner of the globe.'
  },
  {
    name: 'Christian Duncan',
    title: 'Co-founder & COO',
    imageURL: christian,
    quote:
      'Distributed teams required unique processes. You need to approach work in a new way.'
  },
  {
    name: 'Cruz Hamer',
    title: 'Co-founder & CTO',
    imageURL: cruz,
    quote:
      "Technology is at the forefront of enabling distributed teams. That's where we come in."
  },
  {
    name: 'Drake Heaton',
    title: 'Founder & CEO',
    imageURL: drake,
    quote:
      'Hiring similar people from similar backgrounds is a surefire way to stunt innovation.'
  },
  {
    name: 'Griffin Wise',
    title: 'Lead Marketing',
    imageURL: griffin,
    quote:
      'Unique perspectives shape unique products, which is what you need to survive these days.'
  },
  {
    name: 'Aden Allan',
    title: 'Head of Talent',
    imageURL: aden,
    quote:
      'Empowered teams create truly amazing products. Set the north star and let them follow it.'
  }
];

const Directors = () => {
  return (
    <div className={styles.Directors}>
      <img src={bgPatternTop} alt="Pattern" className={styles.patternTop} />
      <h2 className={styles.headline}>Meet the directors</h2>
      <div className={styles.container}>
        {directors.map(director => (
          <Director
            key={director.name}
            name={director.name}
            title={director.title}
            imageURL={director.imageURL}
            quote={director.quote}
          />
        ))}
      </div>
      <img
        src={bgPatternBottom}
        alt="Pattern"
        className={styles.patternBottom}
      />
    </div>
  );
};

export default Directors;
