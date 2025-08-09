import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const BlackLabel = () => {
  return (
    <>
        <div className="flex items-center justify-center relative h-screen overflow-hidden bg-[#733A19]">
                {/* Imagen de fondo */}
        
                {/* Overlay negro transparente */}
                <div className="absolute inset-0 bg-black/30 z-10" />
        
                {/* Contenido centrado con animación */}
                <div className="z-20 flex flex-col items-center justify-center text-center px-4 max-w-2xl">
                  <h2 className="text-5xl text-white font-extrabold mb-6">
                    THE BLACK LABEL
                  </h2>
        
                  <p className="text-white text-base mb-6">
                    THE BLACK LABEL es un sello discográfico que combina visión
                    artística con excelencia musical. Comprometido con la creatividad y
                    la calidad, impulsa carreras que marcan época y redefine los sonidos
                    del K-pop a nivel global. En este espacio donde el talento se
                    potencia y la autenticidad es el centro, nace una nueva era de
                    expresión artística. Esta es la esencia de THE BLACK LABEL, donde el
                    arte cobra voz propia.
                  </p>
                  <a
                    href="https://tblshop.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-10 z-30 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 hover:text-black hover:scale-105 transition-all ease-in-out duration-300"
                  >
                    <FaArrowUpRightFromSquare /> MORE INFO
                  </a>
                </div>
              </div>
    
    </>
  )
}
