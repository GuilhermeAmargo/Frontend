'use client';
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Main from '../../components/Main';

const Home = () => {
  return (
    <div className="flex h-screen bg-[#0A4656]">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;