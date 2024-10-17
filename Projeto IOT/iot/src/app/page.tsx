"use client"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Chart from "@/components/Chart";
import React from "react";

export default function Home() {
  const data = {
    labels: ["Etapa 1", "Etapa 2", "Etapa 3", "Etapa 4"],
    datasets: [
      {
        label: "Consumo de Energia",
        data: [150, 200, 180, 220],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Consumo de Energia por Etapa",
      },
    },
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Dashboard de Produção" username="Guilherme"/>
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Monitoramento em Tempo Real</h1>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-red-500 shadow-md rounded p-4">
              <h2 className="text-lg font-semibold">Tempo de Ciclo</h2>
              <p className="text-2xl">45s</p>
            </div>
            <div className="bg-blue-600 shadow-md rounded p-4">
              <h2 className="text-lg font-semibold">Peças Produzidas</h2>
              <p className="text-2xl">3200</p>
            </div>
            <div className="bg-yellow-500 shadow-md rounded p-4">
              <h2 className="text-lg font-semibold">Taxa de Defeitos</h2>
              <p className="text-2xl">1.5%</p>
            </div>
            <div className="bg-orange-500 shadow-md rounded p-4">
              <h2 className="text-lg font-semibold">Consumo de Energia</h2>
              <p className="text-2xl">500 kWh</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-white shadow-md rounded p-4 h-[350px] mr-48 w-full">
              <Chart />
            </div>

            <div className="bg-gray-800 shadow-md rounded p-4 h-[350px]">
              <h2 className="text-xs font-semibold mb-1 text-white">Produção por Etapa</h2>
              <table className="w-max text-left text-white h-[300px]">
                <thead>
                  <tr>
                    <th className="border p-4">Etapa</th>
                    <th className="border p-4">Peças Produzidas</th>
                    <th className="border p-4">Tempo de Ciclo</th>
                    <th className="border p-4">Defeitos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4">Etapa 1</td>
                    <td className="border p-4">800</td>
                    <td className="border p-4">50s</td>
                    <td className="border p-4">5</td>
                  </tr>
                  <tr>
                    <td className="border p-4">Etapa 2</td>
                    <td className="border p-4">900</td>
                    <td className="border p-4">45s</td>
                    <td className="border p-4">3</td>
                  </tr>
                  <tr>
                    <td className="border p-4">Etapa 3</td>
                    <td className="border p-4">700</td>
                    <td className="border p-4">48s</td>
                    <td className="border p-4">4</td>
                  </tr>
                  <tr>
                    <td className="border p-4">Etapa 4</td>
                    <td className="border p-4">800</td>
                    <td className="border p-4">47s</td>
                    <td className="border p-4">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
