import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";
export const LisaBio = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden">
        {/* Imagen de fondo con animación de scroll */}
        <motion.img
          src="/lisa/lisa-black.jpg"
          alt="Fondo Jisoo"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Logo Jisoo */}
        <h2 className="absolute text-white  top-20  text-8xl font-bold ">
          LISA
        </h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg text-white text-center max-w-2xl absolute z-20 px-6"
        >
          <span className="text-primary font-bold">LISA</span>, reconocida como
          miembro de <span className="text-primary font-bold">BLACKPINK</span>,
          trasciende al grupo con su impacto global en la música y la moda. Con
          múltiples récords Guinness, los logros de LISA son incomparables. Es
          la primera solista femenina de K-pop en ganar el premio a la "Mejor
          Artista de K-pop" en los MTV Music Video Awards y los Europe Music
          Awards, y la primera en superar los mil millones de reproducciones en
          Spotify. Superando constantemente los límites, la trayectoria de LISA
          es un testimonio de su influencia en el cambiante mundo del
          entretenimiento global.
        </motion.p>

        {/* Extra: botón con animación */}
        <motion.a
          href="https://www.lloud.co/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-10 z-30 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all ease-linear duration-300"
        >
          Conocer más <FaArrowRight />
        </motion.a>
      </div>
    
    
    </>
  )
}
