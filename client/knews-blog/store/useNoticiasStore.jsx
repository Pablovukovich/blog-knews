// useNoticiasStore.js (Zustand)
import { create } from "zustand";
import api from "@/lib/axios"; // usamos la instancia preconfigurada

const useNoticiasStore = create((set, get) => ({
  noticias: [],
  paginaActual: 1,
  totalPaginas: 1,
  categoriaSeleccionada: "",

  cargarNoticias: async (pagina = 1, limite = 3, categoria = null) => {
    try {
      const params = {
        page: pagina,
        limit: limite,
      };

      // Si se pasa una nueva categoría (desde botón, por ejemplo), la usamos
      if (categoria !== null) {
        if (categoria !== "All") {
          params.categoria = categoria;
        }
        set({ categoriaSeleccionada: categoria });
      } else {
        // Si no se pasa, usamos la del estado actual
        const catActual = get().categoriaSeleccionada;
        if (catActual && catActual !== "All") {
          params.categoria = catActual;
        }
      }

      const { data } = await api.get("/articulos", { params });

      set({
        noticias: data.articulos,
        paginaActual: data.page,
        totalPaginas: Math.ceil(data.total / limite),
      });
    } catch (error) {
      console.error("Error al cargar noticias:", error);
    }
  },

  cambiarPagina: (nuevaPagina, limite = 3) => {
    const { cargarNoticias } = get();
    cargarNoticias(nuevaPagina, limite); // Usa la categoría guardada
  },
}));

export default useNoticiasStore;