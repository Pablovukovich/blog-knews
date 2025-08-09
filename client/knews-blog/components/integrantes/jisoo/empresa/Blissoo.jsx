import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export const Blissoo = () => {
  return (
    <>
        <div className="flex items-center justify-center relative h-screen overflow-hidden bg-[#413F73]">
                {/* Imagen de fondo */}
        
                {/* Overlay negro transparente */}
                <div className="absolute inset-0 bg-black/30 z-10" />
        
                {/* Contenido centrado con animación */}
                <div className="z-20 flex flex-col items-center justify-center text-center px-4 max-w-2xl">
                  <h2 className="text-5xl text-white font-extralight mb-6">BLISSOO</h2>
        
                  <p className="text-white text-base mb-6">
                    BLISSOO es el nuevo sello discográfico de JISOO, una combinación de
                    BLISS, que simboliza la felicidad plena, y JISOO, una artista cuyo
                    encanto se despliega como un regalo precioso. Trascendiendo las
                    fronteras de géneros y campos, nuestra misión es compartir la
                    felicidad que JISOO crea a su manera única.
                  </p>
                  <a
                    href="https://www.blissoo.co.kr/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-10 z-30 flex items-center gap-2 bg-white text-[#A5A4BF] px-6 py-3 rounded-lg hover:bg-[#A5A4BF] hover:text-white transition-all"
                  >
                    <FaArrowUpRightFromSquare /> MORE INFO
                  </a>
                </div>
              </div>
    
    </>
  )
}
