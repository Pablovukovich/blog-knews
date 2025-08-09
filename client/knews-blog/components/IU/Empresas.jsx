import React from 'react'

export const Empresas = () => {
  return (
    <>
        <div className="lg:row-span-3 lg:col-start-4 lg:row-start-1">
                  <div className="bg-zinc-900 rounded-2xl p-4 flex flex-col items-center gap-4">
                    <h3 className="text-white text-xl font-bold mb-4">Empresas</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center w-full">
                      <img
                        src="/empresas/yg.png"
                        alt="YG Entertainment"
                        className="h-24 w-auto hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src="/empresas/lloud.png"
                        alt="Interscope"
                        className="h-24 w-auto hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src="/empresas/oddtailer.png"
                        alt="Universal Music"
                        className="h-24 w-auto hover:scale-105 transition-transform duration-300"
                      />
                      <img
                        src="/empresas/theBlackLabel.png"
                        alt="The Black Label"
                        className="h-24 w-auto hover:scale-105 transition-transform duration-300"
                      />
                      <img src="/empresas/blissoo.png" alt="Blisoo" className="h-24 w-auto hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
    
    </>
  )
}
