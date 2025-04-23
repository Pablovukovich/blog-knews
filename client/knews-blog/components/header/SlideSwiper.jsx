"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import useDestacadosStore from "@/store/useDestacadosStore";

export default function SlideSwiper() {
  const {noticiasDestacadas, cargarNoticiasDestacadas} = useDestacadosStore()

  useEffect(() => {
    cargarNoticiasDestacadas(5);
  }, []);

  return (
    <Swiper
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="w-full h-[70vh]"
    >
      {noticiasDestacadas.map((articulo) => (
        <SwiperSlide key={articulo._id} className="relative h-full">
          <img
            src={articulo.imagen}
            alt={articulo.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 text-white p-6 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h2 className="text-2xl font-bold mb-2">{articulo.titulo}</h2>
            <p className="text-sm line-clamp-2 w-4/5">
              {articulo.contenido.substring(0, 100)}...
            </p>
            <Link
              href={`/noticias/${articulo.slug}`}
              className="mt-3 inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Ver más
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}