import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";
export const JisooBio = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden">
        {/* Imagen de fondo con animación de scroll */}
        <motion.img
          src="/jisoo/background-1.png"
          alt="Fondo Jisoo"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Logo Jisoo */}
        <motion.img
          src="/jisoo/jisoo_logo.png"
          alt="Logo Jisoo"
          className="absolute top-20 z-20 w-64"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg text-white text-center max-w-2xl absolute z-20 px-6"
        >
          <span className="text-[#A5A4BF] font-bold">JISOO</span>, quien debutó
          con BLACKPINK en 2016, es una artista polifacética que destaca tanto
          como cantante como actriz. Es reconocida no solo por sus
          contribuciones al grupo, sino también por su exitosa carrera como
          solista, recibiendo múltiples premios en música y actuación.
          Consolidada como un ícono, JISOO continúa expandiendo su influencia en
          los ámbitos de la moda, la belleza y más allá
        </motion.p>

        {/* Extra: botón con animación */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-10 z-30 flex items-center gap-2 bg-white text-[#A5A4BF] px-6 py-3 rounded-lg hover:bg-[#A5A4BF] hover:text-white transition-all"
        >
          Conocer más <FaArrowRight />
        </motion.button>
      </div>

    
    </>
  )
}
