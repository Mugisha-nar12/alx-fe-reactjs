import React from 'react';
import Card from './Card';
import webImage from '../assets/images/web.jpg';
import trainImage from '../assets/images/train.png';
import hostingImage from '../assets/images/hosting.jpeg';

const Services = () => {
  const pageStyle = {
    width: '100vh',
    padding: '20px 10px',
    margin: '10px auto',
    maxWidth: '800px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
    color: 'black'
  };

  const servicesData = [
    {
      image: webImage,
      title: 'Web Development',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, doloribus.'
    },
    {
      image: trainImage,
      title: 'Training',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, doloribus.'
    },
    {
      image: hostingImage,
      title: 'Web Hosting',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, doloribus.'
    }
  ];

  return (
    <div style={pageStyle}>
      <h2 style={{
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '10px',
        padding: '10px 0px'
      }}>Services</h2>
      <p style={{
        display: 'flex',
        justifyContent: 'center'
      }}>Here are the services we offer.</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {servicesData.map((service, index) => (
          <Card
            key={index}
            image={service.image}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;