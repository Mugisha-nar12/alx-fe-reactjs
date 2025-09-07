import React from 'react';
import backgroundImage from '../assets/images/training.jpg';

const Home = () => {
  const headerStyle = {
    
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    height:'70vh',
    background: `url(${backgroundImage}) no-repeat center center/cover`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '20px'
  };

  return (
    <div style={headerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1>Welcome to the Future of Digital Technology</h1>
        <p>Control your business in your hand with us. We can transform your business into a digital enterprise.</p>
      </div>
    </div>
  );
};

export default Home;