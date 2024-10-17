import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Usercard from "@/components/Usercard";
import React from "react";

export default function User () {
    return (
      <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <Header title="Usuários" username="Guilherme"/>
      <main className="flex-1 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-5 text-center text-black">Editar Perfil</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-black">
                        Nome
                    </label>
                    <input type="text" id="name" name="name" required
                        className="formInput"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-black">
                        E-mail
                    </label>
                    <input type="text" id="name" name="name" required
                        className="formInput"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-black">
                        Senha
                    </label>
                    <input type="text" id="name" name="name" required
                        className="formInput"/>
                </div>
                <button type="submit" className="btnSave">Salvar</button>
            </form>
        </div>
      </main>
      </div>
  </div>
    );
}