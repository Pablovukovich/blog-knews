import { create } from "zustand";
import api from "@/lib/axios";
const baseUrl =
  process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace("/api", "") ||
  "http://localhost:1337";

export const useSlideHomeStore = create((set) => ({
  slides: [],
  relatedArticles: [],
  loading: false,
  error: null,

  fetchSlides: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/slide-home", {
        params: {
          populate: {
            slides: {
              populate: {
                imagen: true,
                articuloRelacionado: {
                  populate: {
                    imagen: true,
                  },
                },
              },
            },
          },
        },
      });

      const slideData = res.data.data.slides || [];

      const slides = slideData
        .filter(
          (slide) =>
            slide.titulo || slide.imagen || slide.subtitulo || slide.link
        )
        .map((slide) => ({
          titulo: slide.titulo,
          subtitulo: slide.subtitulo,
          imagen: slide.imagen?.url ? `${baseUrl}${slide.imagen.url}` : "",
          link: slide.link || "",
        }));

      const relatedArticles = slideData
        .filter((s) => s.articuloRelacionado)
        .map((s) => {
          const art = s.articuloRelacionado;
          return {
            titulo: art.titulo,
            resumen: art.resume || art.descripcionBreve || "",
            imagen: art.imagen?.[0]?.url
              ? `${baseUrl}${art.imagen[0].url}`
              : "",
            link: `/articulo/${art.slug || art.id}`,
          };
        });

      set({ slides, relatedArticles, loading: false });
    } catch (err) {
      console.error(err);
      set({ error: err.message, loading: false });
    }
  },
}));
