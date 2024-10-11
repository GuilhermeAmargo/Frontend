'use client'; 
import { useRouter } from 'next/navigation'; 
import React, { useState } from 'react';

const Dashboard = () => {
    const router = useRouter();

    const goHome = (e: React.FormEvent) => {
        e.preventDefault();
        router.push('/home');  
      };

    const goDashboard = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  const goLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');  
  };

  return (
    <div className="flex h-screen bg-[#0A4656]">
      <div className="w-64 bg-[#14333C] text-white flex flex-col rounded-3xl border-2 border-teal-700">
        <div className="flex items-center mb-8 p-4">
          <img src="/img/icon.png" alt="Icon" className="h-10 w-10 m-[10px]" />
          <h1 className="text-2xl font-regular">PDCAs</h1>
        </div>
        <nav className="flex-grow p-4">
          <div className="flex flex-col space-y-1">
            <button onClick={goHome} className="border-none bg-[#1783A0] h-10">
              <a href="#" className="flex items-center gap-2 hover:text-blue-500">
                <img src='/img/home.png' className='h-6 w-6 m-[5px]'></img> Home
              </a>
            </button>
            <button onClick={goDashboard} className="border-none bg-[#1783A0] h-10">
              <a href="#" className="flex items-center gap-2 hover:text-blue-500">
              <img src='/img/dashboard.png' className='h-6 w-6 m-[5px]'></img> Dashboard
              </a>
            </button>
            <button className="bg-[#00C8FF] border-none h-10">
              <a href="#" className="flex items-center gap-2 text-white">
              <img src='/img/document.png' className='h-6 w-6 m-[5px]'></img> Reports
              </a>
            </button>
          </div>
        </nav>

        <div className="bg-[#1783A0] p-4 mt-auto flex items-center text-white rounded-b-2xl">
          <div className="flex items-center gap-4">
            <img src="/img/profile.png" alt="Icon" className="h-12 w-12" />
            <div>
              <p className="font-bold">User: Lorem Ipsum</p>
              <p className="text-xs">lorem.ipsum@example.com</p>
              <button onClick={goLogin}>
                <img src="/img/sign.png" alt="sign out" className='h-4 w-4 mt-4 ml-36'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
