import React from "react";
import Image from 'next/image'

export default function Usercard(){
    return (
      <div className="Usercard">
        <Image
          src="/images/user.png"
          width={50}
          height={0}
          className="w-20 ml-16 mt-5 rounded-full"
          alt="user"
          />
        <h1 className="mt-2">Função</h1>
        <h2 className="mt-2">Nome</h2>
        <div className="flex justify-center">
            <button className="usercardButton">View</button>
        </div>
        </div>
    );
}