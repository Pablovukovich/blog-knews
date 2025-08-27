"use client";
import { useEffect } from "react";
import useSlideHomeStore from "@/store/useSlideHomeStore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SlideSwiper() {
  const { sliders, fetchSliders, loading, error } = useSlideHomeStore();

  useEffect(() => {
    fetchSliders();
  }, [fetchSliders]);

  if (loading) return <p>Cargando slides...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!sliders || sliders.length === 0) return <p>No hay slides disponibles.</p>;

  return (
    <Swiper spaceBetween={20} slidesPerView={1}>
      {sliders.map((slider) =>
        slider.slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            {slide.__component === "slides.slide-personalizado" && (
              <div className="p-6 bg-gray-100 rounded-xl shadow-md">
                <h2 className="text-xl font-bold">{slide.titulo}</h2>
                <p>{slide.descripcion}</p>
                {slide.texto_boton && (
                  <a
                    href={slide.enlace_boton || "#"}
                    className="inline-block mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg"
                  >
                    {slide.texto_boton}
                  </a>
                )}
              </div>
            )}

            {slide.__component === "slides.slide-articulo" && (
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-lg font-semibold">Artículo relacionado</h2>
                
                <p>ID del artículo: {slide.id}</p>
              </div>
            )}
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
