import React from 'react';
import Login from '../components/login';
import bg from '../assets/bg.jpg'
import logo from '../assets/fileString_logo.png'

const LoginPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '20px', left: '20px', width: '150px', height: 'auto' }} />
      <Login />
    </div>
  );
};

export default LoginPage;