import React from 'react'
import { motion } from "framer-motion";


export const RoseBio = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden bg-[#D9B1A3]">
        {/* Imagen de fondo con animación de scroll */}

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Logo Jisoo */}
        <h2 className="absolute text-[#591F12]  top-20  text-8xl font-bold ">
          ROSE
        </h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg text-white text-center max-w-2xl absolute z-20 px-6"
        >
          <span className="text-[#591F12] font-bold">ROSÉ</span>, destacada como
          miembro de <span className="text-[#591F12] font-bold">BLACKPINK</span>
          , brilla con luz propia gracias a su inconfundible voz y sensibilidad
          artística. Como solista, ha establecido récords con su debut "On The
          Ground", que se convirtió en el video musical de una solista de K-pop
          más visto en 24 horas. ROSÉ también ha dejado huella en la moda,
          siendo embajadora global de prestigiosas marcas. Su autenticidad y
          talento la posicionan como una figura clave en la evolución del pop y
          la cultura contemporánea.
        </motion.p>
      </div>
    
    </>
  )
}
