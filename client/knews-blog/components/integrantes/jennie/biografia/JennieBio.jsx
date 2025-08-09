"use client"
import React from "react";
import { motion, useInView } from "framer-motion";
export const JennieBio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative h-screen">
        {/* Imagen de fondo con animación de aparición */}
        <motion.img
          src="/jennie/background-4.png"
          alt="background-2"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Título principal */}
        <motion.img
          src="/jennie/title_jennie.png"
          alt="title-jennie"
          className="absolute top-20 z-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Párrafo descriptivo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg text-white text-center max-w-2xl absolute z-20 px-4"
        >
          Jennie es una de las integrantes más destacadas del grupo{" "}
          <span className="text-red-900 font-bold">BLACKPINK</span> , conocida
          por su talento vocal, habilidades de rap y presencia escénica. Desde
          su debut en 2016, ha cautivado a millones de fans en todo el mundo con
          su estilo único y carisma.
        </motion.p>

        {/* Título secundario con animación de entrada */}
        <motion.img
          src="/jennie/title_ruby.png"
          alt="title-ruby"
          className="absolute bottom-20 z-20 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </>
  );
};
