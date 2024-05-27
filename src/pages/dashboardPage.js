import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';
import bg from '../assets/bg.jpg'
import logo from '../assets/fileString_logo.png'

const DashboardPage = () => {
  const navigate = useNavigate();
  const { signOutAction } = useUserStore();

  const handleSignOut = () => {
    signOutAction();
    navigate('/');
  };
  return (
    <div className='flex justify-center items-center h-screen' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '20px', left: '20px', width: '150px', height: 'auto' }} />
      <div>
        <h2 className='text-center font-extrabold text-4xl text-neutral-900 mb-2 font-inter'>Dashboard Page</h2>
        <p className="text-center text-lg text-neutral-500">Welcome to the dashboard!</p>
        <button
          className="mt-6 w-full h-[44px] mt-3 text-lg flex justify-center items-center bg-neutral-900 text-white p-1 rounded-lg cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;