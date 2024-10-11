import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Report () {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
            <Header title="Relatórios"/>
            <main className="flex-1 p-4">
              <h1>Relatórios</h1>
            </main>
            </div>
        </div>
    );
}