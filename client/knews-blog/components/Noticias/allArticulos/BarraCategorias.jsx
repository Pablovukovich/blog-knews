"use client";
import Link from "next/link";
import useNoticiasStore from "@/store/useNoticiasStore";
import { MoveLeft } from 'lucide-react';
export default function BarraCategorias() {
  const categorias = ['Jennie', 'Lisa', 'Rose', 'Jisoo', 'Blackpink', 'All'];
    const { cargarNoticias, categoriaSeleccionada } = useNoticiasStore();

    const handleClick = (categoria) => {
      cargarNoticias(1, 6, categoria); // Página 1, límite 3, con la categoría elegida
    };

  
    return (
      <div className="w-full p-2">
        <h2 className="text-sm font-semibold text-gray-600 mb-2 px-2">Filtro</h2>
        <nav className="w-full bg-transparent px-2 overflow-x-auto">
          <ul className="flex gap-2 md:justify-around border-b border-primary pb-2">
            <div className="flex gap-2 items-center justify-start w-full">
            {categorias.map((categoria) => (
              <li key={categoria}>
                <button 
                onClick={() => handleClick(categoria)}
                className={`text-sm px-4 py-2 rounded-full  font-medium transition-all duration-300
                  ${
                    categoriaSeleccionada === categoria
                      ? "bg-primary text-white shadow-md"
                      : "bg-white/90 text-gray-800 hover:bg-primary hover:text-white hover:shadow"
                  }`}
                >
                  {categoria}
                
                </button>
              </li>
            ))}
            </div>
            <div className="flex items-center justify-center ">
              <Link href="/" className=" mr-24 text-primary transition-all ease-in duration-300 hover:text-pink-700 font-bold "><MoveLeft/>VOLVER</Link>

            </div>
          </ul>
        </nav>
        
      </div>
    );
  }