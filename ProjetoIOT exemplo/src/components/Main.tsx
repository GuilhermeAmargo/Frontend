'use client';
import React from 'react';

const Main = () => {
  return (
    <div className="flex flex-grow items-center justify-center p-8 ">
      <div className="flex items-center gap-8 bg-gradient-to-b from-[#009999] to-[#003333] p-8 rounded-lg shadow-lg border-4 border-[#14333C]">
        <img
          src="/img/photo.png"
          alt="Production process"
          className="max-w-80 rounded-lg shadow-lg"
        />
        <div className="text-lg text-white max-w-md space-y-4">
          <p>
            Welcome to our <strong>Production Monitoring Application</strong>! Gain a real-time view of 
            the <strong>automotive parts manufacturing process</strong>, offering insight at every stage of production.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Monitor key metrics such as <strong>cycle time</strong>, <strong>number of parts produced</strong>, <strong>defect rates</strong>, and <strong>energy consumption</strong>.</li>
            <li>Identify <strong>areas for improvement</strong> to enhance operational efficiency and maintain high product quality.</li>
            <li>Access detailed <strong>charts, tables, and reports</strong> for more effective factory management.</li>
          </ul>

          <p>
            This application equips you with the tools to ensure consistent production quality and continuous improvement across your operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;