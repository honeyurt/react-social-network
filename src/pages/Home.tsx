import React from 'react';

import Logo from '../assets/img/header-logo.png';

const Home = () => {
  return (
    <>
      <h1>
        Welcome to the <span style={{ color: '#3498db' }}>React Social Network!</span>
      </h1>
      <img src={Logo} alt="Logo" />
    </>
  );
};

export default Home;
