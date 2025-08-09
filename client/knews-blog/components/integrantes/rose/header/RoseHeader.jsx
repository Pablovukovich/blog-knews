import React from 'react'
import { motion } from 'framer-motion'

export const RoseHeader = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen">
        {/* Background Image */}
        <img
          src="/rose/rose-background.jpg"
          alt="rose-background" // More descriptive alt text
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Centered Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute text-9xl  text-red-950 font-extrabold z-20"
        >
          ROSE
        </motion.h1>
      </div>
    
    </>
  )
}
