import React from 'react';

const Footer = () => {
  return (
    <div style={{
      padding: '20px',
      borderTop: '1px solid #ccc',
      backgroundColor:'#171717ff'
    }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li><h1 style={{ 
            margin: 0,
            fontSize: '1.5rem',color: '#0d9fd4d3',
            textDecoration: 'none',
            fontWeight: 'bold', }}>MyCompany</h1></li>
       
        <li><p style={{ margin: 0 ,color: '#6c6c6cd3', fontSize:'0.5 rem'}}>@copyright - 2025</p></li>
         <li><p style={{ margin: 0 ,color: '#6c6c6cd3', fontSize:'0.3 rem'}}>Created by Mugisha</p></li>
      </ul>
    </div>
  );
};

export default Footer;