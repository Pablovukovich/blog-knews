import { create } from "zustand";
import api from "@/lib/axios";

const useDestacadosStore = create((set) => ({
  noticiasDestacadas: [],

  cargarNoticiasDestacadas: async () => {
    try {
      const res = await api.get(
        "/destacado?populate[articulosDestacados][populate][imagen]=true&populate[articulosDestacados][populate][categorias]=true"
      );

      const articulos = res.data?.data?.articulosDestacados || [];

      // Mapeo correcto según la estructura de tu API
      const noticias = articulos.map((item) => ({
        id: item.id,
        titulo: item.titulo,
        slug: item.slug,
        contenido: item.contenido,
        FechaPublicacion: item.FechaPublicacion,
        fuente: item.fuente,
        autor: item.autor,
        likes: item.likes,
        imagen: item.imagen?.[0] || null, // Aquí está el cambio clave
        categorias: item.categorias || []
      }));

      set({ noticiasDestacadas: noticias });
      console.log("Noticias destacadas con imágenes:", noticias);
    } catch (error) {
      console.error("Error al cargar noticias destacadas:", error);
    }
  },
}));

export default useDestacadosStore;