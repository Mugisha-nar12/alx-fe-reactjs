import React from 'react';

const Card = ({ image, title, content }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    marginBottom: '20px'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    color: '#282c34',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    marginTop: '10px'
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h3>{title}</h3>
      <p>{content}</p>
      <button style={buttonStyle}>View</button>
    </div>
  );
};

export default Card;