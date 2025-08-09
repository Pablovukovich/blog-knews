"use client";
import React from "react";
import Titulo from "../IU/Titulo";
import Silk from "./fondo/Silk";
import { VideosDeadline } from "./videos/VideosDeadline";
import { Eventos } from "./eventos/Eventos";

export const Deadline = () => {
  return (
    <>
      <section className="bg-zinc-900 p-8 flex flex-col items-center justify-center">
        <Titulo>DEADLINE</Titulo>

        <div className="relative w-full h-screen overflow-hidden rounded-2xl my-3">
          {/* Fondo animado en capa inferior */}
          <div className="absolute inset-0 z-0">
            <Silk
              speed={5}
              scale={1}
              color="#261B1F"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>

          {/* Contenido encima del fondo animado */}
          <div className="relative z-10 flex flex-col items-center h-full">
            {/* Imagen arriba centrada */}
            <div className="mt-4">
              <img
                src="/logotour.png"
                alt="logo-tour"
                className="w-80 h-auto mx-auto"
              />
            </div>

            {/* Sección inferior: videos y eventos */}
            <div className="mt-10 w-full px-10 flex flex-row justify-between gap-6">
              {/* Videos */}
              <VideosDeadline/>

              {/* Eventos */}
              <div className="w-1/2   p-6 rounded-lg   ">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Eventos</h2>
                <Eventos/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
