"use client"
import  AllArticulos from "./AllArticulos";
import  useNoticiasStore  from "@/store/useNoticiasStore";
import { useEffect } from "react";
import Paginacion from "../Paginacion";


export default function CardNoticias() {

const {noticias, cargarNoticias, paginaActual} = useNoticiasStore()

useEffect(() => {
  cargarNoticias(paginaActual, 6); // Cargar noticias al montar el componente

}, [paginaActual])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
     {noticias.length === 0 ? (
      <p className="text-white text-center text-sm italic mt-6">
        No hay noticias disponibles para esta categoría.
      </p>):(

        noticias.map((noticia) => (
          <AllArticulos
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
  );
}
