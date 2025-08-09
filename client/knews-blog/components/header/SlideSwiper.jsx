import { useEffect } from 'react'
import { useSlideHomeStore } from '@/store/useSlideHomeStore'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link'

export default function SlideSwiper() {
  const { slides, relatedArticles, fetchSlides, loading } = useSlideHomeStore()

  useEffect(() => {
    fetchSlides()
  }, [])

  if (loading) return <p className="text-center">Cargando...</p>

  return (
  <div className="w-full">
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
  >
    {/* Slides personalizados */}
    {slides.map((slide, i) => (
      <SwiperSlide key={`slide-${i}`}>
        <div className="relative w-full h-[300px] md:h-[700px] group overflow-hidden">
          {slide.imagen && (
            <img
              src={slide.imagen}
              alt={slide.titulo}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900/100 to-transparent px-4 md:px-6 py-6 md:py-8 text-white text-left">
            <h3 className="text-xl md:text-3xl font-bold mb-2">{slide.titulo}</h3>
            <p className="text-sm md:text-lg mb-3 md:mb-4">{slide.subtitulo}</p>
            {slide.link && (
              <Link
                href={slide.link}
                className="inline-block text-sm md:text-base px-4 py-1.5 md:px-5 md:py-2 border border-white text-white rounded hover:bg-white hover:text-[#8e4256] transition"
              >
                Ver más
              </Link>
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}

    {/* Artículos relacionados */}
    {relatedArticles.map((art, i) => (
      <SwiperSlide key={`article-${i}`}>
        <div className="relative w-full h-[300px] md:h-[700px] group overflow-hidden">
          {art.imagen && (
            <img
              src={art.imagen}
              alt={art.titulo}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-zinc-900/100 to-transparent px-4 md:px-6 py-6 md:py-8 text-white text-left">
            <h3 className="text-xl md:text-3xl font-bold mb-2">{art.titulo}</h3>
            <p className="text-sm md:text-lg mb-3 md:mb-4">{art.resumen}</p>
            <Link
              href={art.link}
              className="inline-block text-sm md:text-base px-4 py-1.5 md:px-5 md:py-2 border border-white text-white rounded hover:bg-white hover:text-[#8e4256] transition"
            >
              Leer artículo
            </Link>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    
  )
}