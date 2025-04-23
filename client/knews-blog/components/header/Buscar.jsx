"use client"

import { useEffect, useRef, useState } from "react";
import api from "@/lib/axios";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Buscar() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const contenedorRef = useRef(null);

  // Buscar artículos
  useEffect(() => {
    const fetchResultados = async () => {
      if (busqueda.trim().length === 0) {
        setResultados([]);
        return;
      }

      try {
        const { data } = await api.get("/articulos/buscar", {
          params: { titulo: busqueda }
        });

        if (data.success && data.articulos.length > 0) {
          setResultados(data.articulos);
        } else {
          setResultados([]);
        }
      } catch (error) {
        console.error("Error al buscar artículos:", error);
        setResultados([]);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchResultados();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [busqueda]);

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contenedorRef.current && !contenedorRef.current.contains(event.target)) {
        setResultados([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-md" ref={contenedorRef}>
      <div className="flex items-center gap-2 bg-secondary text-white p-2 rounded-lg border border-gray-700">
        <Search className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar..."
          aria-label="Buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
        />
      </div>

      {resultados.length > 0 && (
        <div className="absolute mt-2 w-full bg-zinc-900 rounded-lg shadow-lg border border-gray-700 z-50 max-h-72 overflow-y-auto">
          {resultados.map((noticia) => (
            <Link
              key={noticia._id}
              href={`/noticias/${noticia.slug}`}
              className="flex items-center gap-3 p-3 hover:bg-zinc-800 transition-colors"
              onClick={() => setBusqueda("")}
            >
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-12 h-12 object-cover rounded"
              />
              <span className="text-white text-sm">{noticia.titulo}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
