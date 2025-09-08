import React from 'react';

const About = () => {
 const pageStyle = {
    width:'100vh',
    padding: '40px 20px',
    margin: '20px auto',
    maxWidth: '800px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
    color:'black'
  };

  return (
    <div style={pageStyle}>
      <h2 style={{
        justifyContent:'center',
        display:'flex',
        marginBottom:'10px',
        padding:'10px 0px'
      }}>About</h2>
      <p
        style={{
        display:'flex',
        justifyContent:'center',
        border: '1px solid #18c1ebff',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(48, 112, 122, 0.1)',
        }}
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quisquam, 
      sed eveniet, architecto doloribus, ut facilis deleniti mollitia impedit corrupti 
      consectetur ea voluptas sequi odit corporis. 
      Nulla aut rerum eos?</p>

    </div>
  );
};

export default About;