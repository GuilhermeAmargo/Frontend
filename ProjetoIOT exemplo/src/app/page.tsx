import React from 'react';
import Login from '../components/Login';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Login />
    </div>
  );
}