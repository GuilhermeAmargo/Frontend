import React from "react"
import Sidebar from "./Navbar";
import Header from "./Header";

interface CardProps {
    body: string;
    title: string;
    footer: string;
    bgcolor: string;
}

export default function Card(){
    return (
              <div className="card">
                <div className="card-header">Título</div>
                <div className="card-body">Conteúdo</div>
                <div className="card-footer">Rodapé</div>
              </div>
    );
}