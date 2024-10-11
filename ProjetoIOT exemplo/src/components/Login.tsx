'use client'; 
import { useRouter } from 'next/navigation'; 
import React, { useState } from 'react';

const Login = () => {
  const router = useRouter();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/home');  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A4656]">
      <div className="bg-[#14333C] rounded-lg shadow-lg p-8 w-80 h-[600px] border-2 border-teal-700">
        <div className="flex flex-col items-center">
          <img src="/img/icon.png" alt="Icon" className="h-12 w-12 m-[50px]" />
          <h1 className="text-white text-2xl font-regular mb-4">PDCAs</h1>
          <p className="text-gray-300 text-center">Production Data Collection and Analysis System</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4 mt-20">
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;