import { ChevronLeft, ChevronRight } from "lucide-react";
import useNoticiasStore from "@/store/useNoticiasStore";




export default function Paginacion  () {

  const { paginaActual, totalPaginas, cambiarPagina } = useNoticiasStore();

  //pagina anterior
  const handleAnterior = () => {
    if (paginaActual > 1) cambiarPagina(paginaActual - 1);
  };

  //pagina siguiente
  const handleSiguiente = () => {
    if (paginaActual < totalPaginas) cambiarPagina(paginaActual + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
    <button
      onClick={handleAnterior}
      disabled={paginaActual === 1}
      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
    >
      <ChevronLeft size={20} />
    </button>

    {[...Array(totalPaginas)].map((_, index) => {
      const numPagina = index + 1;
      return (
        <button
          key={numPagina}
          onClick={() => cambiarPagina(numPagina)}
          className={`px-3 py-1 rounded-md ${
            paginaActual === numPagina ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {numPagina}
        </button>
      );
    })}

    <button
      onClick={handleSiguiente}
      disabled={paginaActual === totalPaginas}
      className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
    >
      <ChevronRight size={20} />
    </button>
  </div>
  );
};
