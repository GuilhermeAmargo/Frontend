import React from "react";
import Image from 'next/image'

interface HeaderProps {
    title: string;
    username?: string;
}

export default function Header({title,username}:HeaderProps){

    return (
        <header className="header">
            <div className="header-left">
                <h1>{title}</h1>
            </div>
            <div className="header-right flex items-center">
                {username && 
                <span className="mr-2">Bem-vindo, {username}</span>}
                <Image 
                    src="/images/user.png" 
                    alt="User picture" 
                    width={48} 
                    height={48} 
                    className="rounded-full"
                />
            </div>
        </header>
    );
    
}