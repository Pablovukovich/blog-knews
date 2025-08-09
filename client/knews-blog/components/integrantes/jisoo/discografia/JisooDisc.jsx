import React from 'react'
import CoverflowSlider from '../../discSlide/CoverFlowSlider'
export const JisooDisc = ({albums}) => {
  return (
    <>
        <div className="flex flex-col items-center justify-center relative h-screen overflow-hidden bg-[#A5A4BF]">
                {/* Background */}
        
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 z-10" />
        
                {/* Título */}
                <h2 className="text-4xl font-bold text-[#464C59] z-20 mt-12 mb-4">
                  DISCOGRAFIA
                </h2>
        
                {/* Slider */}
                <CoverflowSlider albums={albums} />
        </div>
    
    </>
  )
}
