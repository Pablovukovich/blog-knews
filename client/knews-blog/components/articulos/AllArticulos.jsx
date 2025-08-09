"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import useArticulosStore from "@/store/useArticulosStore";
import { SinArticulos } from "../IU/SinArticulos";

export const AllArticulos = () => {
  const API_URL =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const BASE_URL = API_URL.replace("/api", "");
  const { fetchArticulos, articulos, loading, error } = useArticulosStore();

  useEffect(() => {
    fetchArticulos();
  }, [fetchArticulos]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 h-screen ">
      {articulos.length === 0 ? (
        <SinArticulos />
      ) : (
        articulos.map((articulo, index) => {
          const imageUrl = `${BASE_URL}${articulo.imagen?.[0]?.url}`;
          console.log("URL final de la imagen:", imageUrl);
          return (
            <motion.div
              key={articulo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="bg-zinc-900 shadow-md rounded-xl overflow-hidden flex flex-col h-auto"
            >
              <img
                //src={`${API_URL}${articulo.imagen?.[0]?.url}`}
                src={imageUrl}
                alt={articulo.titulo}
                className="h-64 w-full object-cover"
              />

              <div className="relative p-4 flex flex-col flex-grow text-white">
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
                <h3 className="text-lg font-semibold mb-1 z-20">
                  {articulo.titulo}
                </h3>
                <div className="text-sm text-gray-400 mb-4 line-clamp-4 z-20">
                  {articulo.resume}
                </div>
                <div className="mt-auto flex flex-col gap-2 z-20">
                  <div className="flex justify-between items-center py-2">

                  <span className="text-xs text-pink-500 font-medium uppercase">
                    {articulo.categorias?.[0].categoria}
                  </span>
                  <span className="text-xs text-gray-400">
                    {articulo.FechaPublicacion}
                  </span>
                  </div>
                  <Link
                    href={`/articulos/${articulo.slug}`}
                    className="inline-block bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primary/80 transition"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })
      )}
    </div>
  );
};
