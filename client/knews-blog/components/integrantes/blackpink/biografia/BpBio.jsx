import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";

export const BpBio = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden bg-[#F2A7C3]">
        {/* Imagen de fondo con animación de scroll */}

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Logo Jisoo */}
        <h2 className="absolute text-black  top-20  text-8xl font-extrabold ">
          - BLACKPINK -
        </h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg text-white text-center max-w-2xl absolute z-20 px-6"
        >
          Blackpink (en hangul, 블랙핑크; estilizado como BLΛƆKPIИK o BLACKPINK)
          es un grupo musical femenino surcoreano formado en 2016 por YG
          Entertainment. Está conformado por cuatro miembros: Jisoo, Jennie,
          Rosé y Lisa.
        </motion.p>
        <motion.a
          href="https://ygfamily.com/ko/artists/blackpink/main"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-10 z-30 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all ease-linear duration-300"
        >
          Conocer más <FaArrowRight />
        </motion.a>
      </div>
    
    </>
  )
}
