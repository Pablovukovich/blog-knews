"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Importamos useRouter

const Articulo = ({ titulo, fecha, categoria, imagen, cuerpo, fuente }) => {
  const [likes, setLikes] = useState(0);
  const router = useRouter(); // Instanciamos el router

  const handleLike = () => setLikes((prev) => prev + 1);
  const volverAtras = () => router.back(); // Función para volver atrás

  return (
    <article className="max-w-4xl mx-auto p-6 bg-zinc-900 rounded-xl shadow-md relative">
      {/* Botón de volver atrás arriba a la izquierda */}
      <button
        onClick={volverAtras}
        className="absolute top-4 left-4 text-primary hover:text-primary/80 transition-all ease-in-out duration-300 font-semibold"
      >
        ← Volver
      </button>

      {/* Botón de like arriba a la derecha */}
      <button
        onClick={handleLike}
        className="absolute top-4 right-4 flex items-center text-pink-600 hover:text-pink-800"
      >
        <FaHeart className="mr-1" /> {likes}
      </button>

      {/* Categoría, título y fecha */}
      <div className="mb-4 mt-8 ">
        <span className="text-sm text-primary uppercase font-bold">{categoria}</span>
        <h1 className="text-3xl font-bold text-white mt-1">{titulo}</h1>
        <p className="text-sm text-gray-400">{fecha}</p>
      </div>

      {/* Imagen */}
      {imagen && (
        <div className="mb-6">
          <img
            src={imagen}
            alt={titulo}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Cuerpo */}
      <div className="text-lg text-white leading-relaxed mb-6 whitespace-pre-line">
        {cuerpo}
      </div>

      {/* Fuente */}
      <div className="text-sm text-gray-500 border-y border-y-primary p-5">
        Fuente: <a href={fuente} target="_blank" className="text-primary hover:underline">{fuente}</a>
      </div>
    </article>
  );
};

export default Articulo;