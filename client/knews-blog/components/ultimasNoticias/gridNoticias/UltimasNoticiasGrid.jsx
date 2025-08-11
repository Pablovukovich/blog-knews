import React, {useEffect} from "react";
import { Empresas } from "@/components/IU/Empresas";
import { RedesSociales } from "@/components/IU/RedesSociales";
import Link from "next/link";
import useArticulosStore from "@/store/useArticulosStore";


export const UltimasNoticiasGrid = () => {
  const API_URL =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  const BASE_URL = API_URL.replace("/api", "");
  const { fetchUltimasArticulos, ultimosArticulos, loading, error } =
    useArticulosStore();

  useEffect(() => {
    fetchUltimasArticulos();
  }, [fetchUltimasArticulos]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 gap-4  w-full h-auto lg:grid-cols-4 lg:grid-rows-6 lg:h-[800px]">
        
        {ultimosArticulos.map((ultimoArticulo, index) => {
          const imageUrl = `${BASE_URL}${ultimoArticulo.imagen?.[0]?.url}`;
          console.log("URL final de la imagen:", imageUrl);
          return (
            <div 
            key={ultimoArticulo.id}
            className="bg-zinc-900 text-white flex flex-col md:flex-row rounded-2xl overflow-hidden p-4 gap-4 lg:col-span-3 lg:row-span-2 border-b-1 border-b-primary shadow-lg">
              <div className="w-full md:w-1/3">
                <img
                  src={imageUrl}
                  alt={ultimoArticulo.titulo}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex flex-col justify-between w-full md:w-2/3">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {ultimoArticulo.titulo}
                  </h2>
                  <p className="text-gray-300 text-lg line-clamp-2">
                    {ultimoArticulo.resume}
                  </p>
                </div>

                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 text-sm text-gray-400">
                  <div className="flex gap-4">
                    <span className="uppercase text-[#BF84A0] font-medium">
                      {ultimoArticulo.categorias?.[0].categoria}
                    </span>
                    <span>{ultimoArticulo.FechaPublicacion}</span>
                  </div>
                  <Link
                    href={`/articulos/${ultimoArticulo.slug}`}
                    className="mt-2 sm:mt-0 text-sm text-[#BF84A0] border border-[#BF84A0] px-4 py-2 rounded-full hover:bg-[#BF84A0]/10 transition"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {/* Empresas (bloque 6 reemplazando filtros) */}
        <Empresas />

        {/* Bloque 7 (por ejemplo redes sociales) */}
        <RedesSociales />
      </div>
    </>
  );
};
