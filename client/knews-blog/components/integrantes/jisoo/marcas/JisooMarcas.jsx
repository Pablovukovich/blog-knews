import React from 'react'
import { motion } from 'framer-motion'
export const JisooMarcas = ({marcas}) => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden bg-[#C3C1D7]">
        <div className="grid grid-cols-7 grid-rows-1 h-screen w-full">
          {marcas.map((marca, index) => (
            <motion.div
              key={index}
              className="relative w-full h-full overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Imagen con efecto de escala en hover */}
              <img
                src={`/jisoo/foto-marcas/${marca.img}`}
                alt={`bg-${index}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#A5A4BF]/70 z-10 group-hover:opacity-0 transition-opacity duration-500" />

              {/* Logo centrado */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <img
                  src={`/jisoo/marcas/${marca.logo}`}
                  alt={`logo-${index}`}
                  className="w-96 h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    
    </>
  )
}
