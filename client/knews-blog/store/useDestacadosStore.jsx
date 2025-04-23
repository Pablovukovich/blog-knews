import { create } from "zustand";
import api from "@/lib/axios";

const useDestacadosStore = create((set) => ({
    noticiasDestacadas: [],

  cargarNoticiasDestacadas: async (limite = 5) => {
    try {
      const params = {
        limit: limite,
      };

      const { data } = await api.get("/articulos", { params });

      set({
        noticiasDestacadas: data.articulos,
      });
      
    } catch (error) {
      console.error("Error al cargar noticias:", error);
    }
  },
}));

export default useDestacadosStore;
