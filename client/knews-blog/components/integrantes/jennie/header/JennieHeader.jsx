"use client";
import React from "react";
import { motion } from "framer-motion";

export const JennieHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative h-screen">
        {/* Background Image */}
        <img
          src="/jennie/jennie-background-3.jpg"
          alt="Abstract background with Jennie's theme"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Transparent Black Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Centered Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute text-9xl font-bold text-white z-20"
        >
          JENNIE
        </motion.h1>
      </div>
    </>
  );
};
