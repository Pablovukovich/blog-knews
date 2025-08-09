'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';



export default function CoverflowSlider({ albums = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? albums.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === albums.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative w-full max-w-screen-xl mx-auto flex items-center justify-center h-[500px] z-20"
    >
      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70 z-30"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70 z-30"
      >
        ›
      </button>

      {/* Slider */}
      <div className="flex items-center justify-center gap-6 relative w-full h-full">
        {albums.map((item, index) => {
          const offset = index - currentIndex;
          const translate = offset * 160;
          const rotate = offset * -15;
          const scale = 1 - Math.abs(offset) * 0.2;
          const zIndex = 10 - Math.abs(offset);

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out text-center"
              style={{
                transform: `translateX(${translate}px) scale(${scale}) rotateY(${rotate}deg)`,
                zIndex,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-48 md:w-[400px] h-auto object-cover rounded-xl shadow-lg mb-2"
              />
              <p className="text-white text-sm md:text-base font-semibold">{item.title}</p>
              <p className="text-gray-300 text-xs md:text-sm">{item.song}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}