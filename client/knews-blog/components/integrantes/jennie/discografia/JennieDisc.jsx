import React from 'react'
import CoverflowSlider from '../../discSlide/CoverFlowSlider'
export const JennieDisc = ({albums}) => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden">
                {/* Background */}
                <img
                  src="/jennie/background-4.png"
                  alt="Jennie background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
        
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />
        
                {/* Título */}
                <h2 className="text-4xl font-bold text-red-200 z-20 mt-12 mb-4">
                  Discografía
                </h2>
        
                {/* Slider */}
                <CoverflowSlider albums={albums} />
              </div>
    
    
    </>
  )
}
