import { create } from "zustand";
import api from "@/lib/axios";

const useArticulosStore = create((set) => ({
  articulos: [],
  ultimosArticulos: [],
  articuloCompleto:[],
  loading: false,
  error: null,

  fetchArticulos: async () => {
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        "/articulos?populate[imagen][fields][0]=url&populate[categorias][fields][0]=categoria&fields[0]=titulo&fields[1]=resume&fields[2]=slug&fields[3]=FechaPublicacion&sort=FechaPublicacion:desc"
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
  },
  fetchArticuloCompleto: async (slug) =>{
    set({ loading: true, error: null});
    try{
      const res = await api.get(
        `/articulos?filters[slug][$eq]=${slug}&populate[imagen][fields][0]=url&populate[categorias][fields][0]=categoria&fields[0]=titulo&fields[1]=contenido&fields[2]=slug&fields[3]=FechaPublicacion&fields[4]=fuente&fields[5]=autor&sort=FechaPublicacion:desc`
      )

      const data = res.data?.data || [];

      set({articuloCompleto: data, loading: false})
    }catch(error){
      console.error("Error al obtener el artículo:", error);
      set({ error: "Error al obtener el artículos", loading: false });
    }
  }
}));

export default useArticulosStore;