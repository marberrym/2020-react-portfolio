import React from 'react';
import Navbar from '../components/navbar/index';
import './styles.scss';

const HomePage = () => {
  return (
    <div className='page'>
      <Navbar />
      <div className='hero-image'></div>
    </div>
  );
};

export default HomePage;
