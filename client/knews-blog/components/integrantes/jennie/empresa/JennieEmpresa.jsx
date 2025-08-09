import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const JennieEmpresa = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="flex items-center justify-center relative h-screen overflow-hidden">
        {/* Imagen de fondo */}
        <img
          src="/jennie/background-4.png"
          alt="Abstract background with Jennie's theme"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay negro transparente */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Contenido centrado con animación */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-20 flex flex-col items-center justify-center text-center px-4 max-w-2xl"
        >
          <h2 className="text-5xl text-white font-bold mb-6">ODDATELIER</h2>
          <img
            src="/jennie/oddatelier_logo.png"
            alt="Odd Atelier Logo"
            className="w-40 h-auto mb-6"
          />
          <p className="text-white text-base mb-6">
            OA, acrónimo de ODD ATELIER, es un espacio que busca crear nuevos
            productos que llamen la atención de una forma diferente a lo
            habitual o esperado. Es una marca fundada por la artista Jennie en
            noviembre de 2023.
          </p>
          <a
            href="https://oddatelier.net/oddatelier/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-950 text-white px-5 py-3 rounded-md hover:bg-red-800 transition-colors"
          >
            <FaArrowUpRightFromSquare /> MORE INFO
          </a>
        </motion.div>
      </div>
    </>
  );
};
