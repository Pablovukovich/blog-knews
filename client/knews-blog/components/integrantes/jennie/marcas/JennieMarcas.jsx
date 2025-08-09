import React from 'react'
import { motion } from 'framer-motion'
export const JennieMarcas = ({marcas}) => {
  return (
    <>
        <div className="relative h-screen w-full flex items-center justify-between overflow-x-hidden ">
        {/* Imagen de fondo */}
        <img
          src="/jennie/background-4.png"
          alt="Jennie background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay negro */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Título */}
        <h2 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-red-200 z-20">
          Marcas
        </h2>

        {/* Imagen izquierda */}
        <div className="relative z-50 w-[40%] flex h-screen py-20">
          <img
            src="/jennie/marcas/jennie-marcas.jpg"
            alt="jennie marcas principal"
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Grid con animaciones */}
        <div className="relative z-50 w-[50%] h-auto grid grid-rows-4 gap-4 my-20">
          {marcas.map((marca, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-black text-white text-center flex items-center justify-around rounded-l-2xl text-xl font-semibold h-28 "
            >
              {marca.content}
            </motion.div>
          ))}
        </div>
      </div>
    
    
    </>
  )
}
