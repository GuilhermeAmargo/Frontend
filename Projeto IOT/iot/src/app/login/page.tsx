import React from "react";

export default function Login() {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-5 text-center text-white">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-white">
                            Nome de usuário
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            placeholder="Digite seu nome de usuário"
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Digite sua senha"
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="/" className="text-sm text-blue-400 hover:underline">
                        Esqueceu a senha?
                    </a>
                </div>
            </div>
        </div>
    );
}
