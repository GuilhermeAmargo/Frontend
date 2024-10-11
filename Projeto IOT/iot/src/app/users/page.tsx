import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Usercard from "@/components/Usercard";
import React from "react";

export default function User () {
    return (
      <div className="flex">
      <Sidebar />
      <div className="flex-1">
      <Header title="Usuários"/>
      <main className="p-4">
        <div className="Grid">
          <Usercard />
          <Usercard />
          <Usercard />
          <Usercard />
        </div>
        <div className="Grid">
          <Usercard />
          <Usercard />
          <Usercard />
          <Usercard />
        </div>
      </main>
      </div>
  </div>
    );
}