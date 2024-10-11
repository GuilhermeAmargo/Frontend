'use client';
import Link from "next/link";
import React from "react";
import "../styles/styles.css"
import { usePathname } from "next/navigation";
import Image from 'next/image'
import Navbar from "./Navbar";

export default function Sidebar () {

  const pathname = usePathname();
  
  return (
      <nav className="sidebar">
        <Image 
        src="/images/logo.png"
        width={250}
        height={0}
        className="w-full mb-4 rounded-lg"
        alt="Logotipo"
        />
        <Navbar />
      </nav>
  );
}