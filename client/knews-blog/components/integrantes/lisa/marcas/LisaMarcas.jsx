import React from 'react'
import { motion } from 'framer-motion'
export const LisaMarcas = ({marcas, cardVariants}) => {
  return (
    <>
        <div className="relative min-h-screen w-full  overflow-hidden">
        {/* Fondo difuminado */}
        <img
          src="/lisa/lisa-bw.jpg"
          alt="fondo marcas"
          className="absolute inset-0 w-full h-full object-cover "
        />

        {/* Overlay negro suave */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        {/* Título */}

        {/* Contenedor de tarjetas */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6 py-36">
          {marcas.map((marca, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              className="group relative h-[500px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <a href={marca.link} target="_blank" rel="noopener noreferrer">
                {/* Imagen de fondo */}
                <img
                  src={marca.imagen}
                  alt={marca.nombre}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-all duration-300" />
                {/* Texto centrado */}
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold tracking-widest">
                    {marca.nombre}
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    
    
    </>
  )
}
