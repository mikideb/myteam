import React from 'react';

import AboutHeader from '../components/AboutHeader/AboutHeader';
import Directors from '../components/Directors/Directors';
import Customers from '../components/Customers/Customers';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <>
      <AboutHeader />
      <Directors />
      <Customers />
      <ContactUs />
      <Footer />
    </>
  );
};

export default About;
