import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We will get back to you at ${formData.email}.`);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const pageStyle = {
    width:'100vh',
    padding: '10px 0px',
    margin: '20px 5px',
    maxWidth: '800px',
    backgroundColor: '#dbdbdbff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    margin:'0 10px'
  };

  const inputStyle = {
    padding: '15px',
    border: '1px solid #e5e5e5ff',
    borderRadius: '5px',
    fontSize: '1em',
    width: '100%',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '150px',
    resize: 'vertical',
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#4295acff',
    color: '#f7f7f7ff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    alignSelf: 'flex-start',
  };
  
  return (
    <div style={pageStyle}>
      <h2 style={{
        justifyContent:'center',
        display:'flex',
        marginBottom: '10px',
        fontSize:'48px',
        color: '#0d9fd4d3',
    
      }}>Contact Us</h2>
      <p style={{
        display:'flex',
        justifyContent:'center',
        marginBottom: '10px',
        color: '#343333ff'
      }}>
        Have a question or want to work with us? Fill out the form below.
      </p>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        ></textarea>
        <div style={{
            display:'flex',
            justifyContent:'flex-end'
        }}>
           <button type="submit" style={buttonStyle}>
          Send Message
        </button> 
        </div>
        
      </form>
    </div>
  );
};

export default Contact;