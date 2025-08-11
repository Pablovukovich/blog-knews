"use client";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import useArticulosStore from "@/store/useArticulosStore";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useParams } from "next/navigation";
const Articulo = ({ slug }) => {
  
  const router = useRouter();
  const handleLike = () => setLikes((prev) => prev + 1);
  const volverAtras = () => router.back();

  const API_URL =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const BASE_URL = API_URL.replace("/api", "");

  const { fetchArticuloCompleto, articuloCompleto, loading, error } =
    useArticulosStore();

  useEffect(() => {
    if (slug) {
      fetchArticuloCompleto(slug);
    }
  }, [slug, fetchArticuloCompleto]);

  if (loading) return <p className="text-white">Cargando...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  if (!articuloCompleto || articuloCompleto.length === 0) {
    return <p className="text-white">No se encontró el artículo.</p>;
  }

  return (
    <>
      <article className="max-w-4xl mx-auto p-6 bg-zinc-900 rounded-xl shadow-md relative">
        <button
          onClick={volverAtras}
          className="absolute top-4 left-4 text-primary hover:text-primary/80 transition-all ease-in-out duration-300 font-semibold"
        >
          ← Volver
        </button>

        <button
          onClick={handleLike}
          className="absolute top-4 right-4 flex items-center text-pink-600 hover:text-pink-800"
        >
          <FaHeart className="mr-1" /> 15
        </button>

        {articuloCompleto.map((artCompleto, index) => {
          const imageUrl = `${BASE_URL}${artCompleto.imagen?.[0]?.url}`;
         

          const fecha = new Date(artCompleto.FechaPublicacion);
          const opciones = { day: "2-digit", month: "short", year: "numeric" };
          const fechaFormateada = new Intl.DateTimeFormat(
            "es-ES",
            opciones
          ).format(fecha);

          return (
            <React.Fragment key={artCompleto.id}>
              <div className="mb-4 mt-8">
                <span className="text-sm text-primary uppercase font-bold">
                  {artCompleto.categorias?.[0]?.categoria}
                </span>
                <h1 className="text-3xl font-bold text-white mt-1">
                  {artCompleto.titulo}
                </h1>
                <p className="text-sm text-gray-400 py-2">{fechaFormateada}</p>
              </div>

              <div className="mb-6">
                <img
                  src={imageUrl}
                  alt={artCompleto.titulo}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="text-lg text-white leading-relaxed mb-6 whitespace-pre-line">
                <BlocksRenderer content={artCompleto.contenido} />
              </div>

              <div className="text-sm text-gray-500 border-y border-y-primary p-5">
                Fuente: {artCompleto.fuente}
              </div>
            </React.Fragment>
          );
        })}
      </article>
    </>
  );
};

export default Articulo;
