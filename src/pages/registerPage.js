import React from 'react';
import Register from '../components/register';
import bg from '../assets/bg.jpg'
import logo from '../assets/fileString_logo.png'

const RegisterPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '20px', left: '20px', width: '150px', height: 'auto' }} />
      <Register />
    </div>
  );
};

export default RegisterPage;