import React from 'react'
import Silk from '@/components/deadline/fondo/Silk'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from "react-icons/fi";

export const BpDeadline = () => {
  return (
    <>
        <div className="flex flex-col items-center relative h-96 overflow-hidden">
        <Silk
          speed={5}
          scale={1}
          color="#261B1F"
          noiseIntensity={1.5}
          rotation={0}
          className="absolute h-auto"
        />

        <motion.img
          src="/logotour.png"
          alt="logo-tour"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-dvh h-auto"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <Link
          href="/deadline"
          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold flex items-center gap-2 hover:underline hover:text-pink-300  transition-colors duration-300"
        >
          Más info
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    
    </>
  )
}
