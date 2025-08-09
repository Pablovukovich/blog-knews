import React from 'react'
import CoverflowSlider from '../../discSlide/CoverFlowSlider'
export const BpDisc = ({albums}) => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden bg-[#260104]">
                {/* Background */}
        
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />
        
                {/* Título */}
                <h2 className="text-4xl font-bold text-[#D9B1A3] z-20 mt-12 mb-4">
                  DISCOGRAFIA
                </h2>
        
                {/* Slider */}
                <CoverflowSlider albums={albums} />
              </div>
    
    </>
  )
}
