import { create } from "zustand";
import api from "@/lib/axios";

const useArticulosStore = create((set) => ({
  articulos: [],
  ultimosArticulos: [],
  loading: false,
  error: null,

  fetchArticulos: async () => {
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        "/articulos?populate[imagen][fields][0]=url&populate[categorias][fields][0]=categoria&fields[0]=titulo&fields[1]=resume&fields[2]=slug&fields[3]=FechaPublicacion"
      );

       const data = res.data?.data || [];

       set({articulos:data,loading:false})
       
    } catch (error) {
      console.error("Error al obtener artículos:", error);
      set({ error: "Error al obtener artículos", loading: false });
    }
  },
  fetchUltimasArticulos: async () => {
    set({ loading: true, error: null});

    try{

      const res = await api.get(
        "/articulos?populate[imagen][fields][0]=url&populate[categorias][fields][0]=categoria&fields[0]=titulo&fields[1]=resume&fields[2]=slug&fields[3]=FechaPublicacion&sort=FechaPublicacion:desc&pagination[limit]=3"
      ) 

      

      const data = res.data?.data || [];

      set({ultimosArticulos:data,loading:false})

    } catch(error){
      console.error("Error al obtener artículos:", error);
      set({ error: "Error al obtener artículos", loading: false });
    }
  }
}));

export default useArticulosStore;