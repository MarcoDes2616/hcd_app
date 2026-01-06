import React from 'react';
import Header from '../../components/sections/header/Header';
import AboutBusiness from '../../components/sections/AboutBusiness';
import Distribution from '../../components/sections/Distribution';
import WhatsAppButton from '../../components/WhatsAppButton';
import Footer from '../../components/sections/Footer';

const Home = () => {
    return (
    <>
      <Header />
      <AboutBusiness />
      <Distribution />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;