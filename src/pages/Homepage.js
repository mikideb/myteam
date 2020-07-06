import React from 'react';

import HomeHeader from '../components/HomeHeader/HomeHeader';
import Main from '../components/Main/Main';
import Stories from '../components/Stories/Stories';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

const Homepage = () => {
  return (
    <>
      <HomeHeader />
      <Main />
      <Stories />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Homepage;
