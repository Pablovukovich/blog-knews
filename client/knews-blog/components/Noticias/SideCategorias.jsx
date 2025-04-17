"use client";
import useNoticiasStore from "@/store/useNoticiasStore";

export default function SideCategorias() {
  const { cargarNoticias, categoriaSeleccionada } = useNoticiasStore();

  const categorias = ['jennie', 'lisa', 'rose', 'jisoo', 'blackpink', 'All'];

  const handleClick = (categoria) => {
    cargarNoticias(1, 3, categoria); // Página 1, límite 3, con la categoría elegida
  };

  return (
    <aside className="bg-gray-100 p-4 rounded-lg shadow-md w-full md:w-64">
    <h2 className="text-xl font-semibold mb-4">Categorías</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
      {categorias.map((categoria) => (
        <li key={categoria} className="w-full">
          <button
            onClick={() => handleClick(categoria)}
            className={`w-full text-left px-4 py-2 rounded-md shadow-sm transition ${
              categoriaSeleccionada === categoria
                ? "bg-primary text-white"
                : "bg-white hover:bg-primary hover:text-white"
            }`}
          >
            {categoria}
          </button>
        </li>
      ))}
    </ul>
  </aside>
  
  );
}