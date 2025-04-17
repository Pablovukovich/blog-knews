"use client";
import { use } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Navbar";
import NoticiaCompleta from "@/components/Noticias/NoticiaCompleta";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import NavegacionBarra from "@/components/IU/NavegacionBarra";

export default function Noticia(props) {

const [noticia, setNoticia] = useState(null);
const [loading, setLoading] = useState(true);

const { slug } = use(props.params); //utilizamos el id de la url para obtener la noticia 
//usamos use de react para obtener el id en un componente use client

useEffect(() => {

  const fetchNoticia = async () =>{
    try {
      const { data } = await api.get(`/articulos/slug/${slug}`); //obtenemos la noticia por id

      if (!data.success) {
        setNoticia(null);
      } else {
        setNoticia(data.articulo);
      }

    }catch(error){
      setNoticia(null);
    } finally {
      setLoading(false);
    }
  }

  fetchNoticia();

},[slug])

if (loading) return <div className="text-center py-20">Cargando noticia...</div>;
if (!noticia) return <div className="text-center py-20">Noticia no encontrada</div>;

  return (
    <>
        <Navbar/>
        <NavegacionBarra/>
      <NoticiaCompleta noticia={
        {
          ...noticia,
          fecha: new Date(noticia.fechaPublicacion).toLocaleDateString("es-AR"),
          categoria: noticia.categorias?.[0] ?? "General",
          descripcion: noticia.descripcion ?? noticia.contenido.slice(0, 100) + "...",
          cuerpo: noticia.contenido,
        }

      } />
      <Footer/>
    </>
  );
}
