import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Sensor () {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
            <Header title="Sensores" username="Guilherme"/>
            <main className="flex-1 p-4">
              <h1>Lista de sensores</h1>
            </main>
            </div>
        </div>
    );
}