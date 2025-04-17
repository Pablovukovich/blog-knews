"use client";
import { useEffect } from "react";
import Titulos from "../IU/Titulos";
import useNoticiasStore from "@/store/useNoticiasStore";
import UltimasNoticias from "./UltimasNoticias";
import Paginacion from "./Paginacion";
import SideCategorias from "./SideCategorias";
import SideRedes from "./SideRedes";
export default function Noticias() {
  const { noticias, cargarNoticias, paginaActual } = useNoticiasStore();

  useEffect(() => {
    cargarNoticias(paginaActual, 3);
  }, [paginaActual]);

  return (<>
  
    <section className="w-full bg-zinc-900 py-10 px-4 lg:px-20">
      <Titulos titulo="ULTIMAS NOTICIAS" />

<div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">

    <div className="flex flex-col md:flex-col gap-6 w-full justify-center ">

      {noticias.length === 0 ? (
        <p className="text-white text-center text-sm italic mt-6">
          No hay noticias disponibles para esta categoría.
        </p>
      ) : (
        noticias.map((noticia) => (
          <UltimasNoticias
            key={noticia._id}
            noticia={{
              ...noticia,
              descripcion: noticia.contenido,
              categoria: noticia.categorias?.[0] ?? "General",
              fecha: new Date(noticia.fechaPublicacion).toLocaleDateString("es-AR"),
            }}
          />
        ))
      )}

        <Paginacion/>
    </div>
       
        <div className="flex flex-col md:flex-col rounded-lg shadow-md overflow-hidden gap-6 w-full md:w-1/3 justify-center items-center">
          <div className="bg-white rounded-lg shadow-md flex-1 min-h-[200px] justify-center">
            <SideCategorias />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-h-[200px]">
            <SideRedes />
          </div>
        </div> 
</div>


    </section>
  
  
  </>
  );
}
