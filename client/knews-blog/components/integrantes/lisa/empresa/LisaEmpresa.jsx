import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from "react-icons/fa";

export const LisaEmpresa = () => {
  return (
    <>
        <div className="flex flex-col items-center   relative  h-auto overflow-hidden">
        <img
          src="/lisa/lisa-rca.jpg"
          alt="lisa-rca"
          className="w-full h-full object-cover"
        />
        <motion.a
          href="https://www.rcarecords.com/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-10 z-30 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all ease-linear duration-300 "
        >
          RCA <FaArrowRight />
        </motion.a>
      </div>
    
    </>
  )
}
