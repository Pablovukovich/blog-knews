import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
export const Yg = () => {
  return (
    <>
        <div className="flex items-center justify-center relative h-screen overflow-hidden bg-black">
                {/* Imagen de fondo */}
        
                {/* Overlay negro transparente */}
                <div className="absolute inset-0 bg-black/30 z-10" />
        
                {/* Contenido centrado con animación */}
                <div className="z-20 flex flex-col items-center justify-center text-center px-4 max-w-2xl">
                  <h2 className="text-5xl text-white font-extrabold mb-6">YG</h2>
        
                  <p className="text-white text-base mb-6">
                    YG Entertainment estableció un sistema de producción interna de
                    vanguardia. Con un currículo sistematizado, YG ha lanzado con éxito
                    al mercado global artistas líderes de la industria como JINUSEAN,
                    1TYM, SE7EN, BIGBANG, 2NE1, AKMU, WINNER, iKON, BLACKPINK, TREASURE
                    y BABYMONSTER..
                  </p>
                  <a
                    href="https://ygfamily.com/en/main"
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
