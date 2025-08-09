import React from 'react'

export const IntFooter = ({integrante}) => {
  return (
    <>
        <footer className="bg-zinc-900 text-white py-6 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {`KNEWS | ${integrante} Fan Page. Todos los`}
            derechos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-pink-400 transition-colors">
              inicio
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Biografia
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Discografía
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Marcas
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              empresa
            </a>
          </div>
        </div>
      </footer>
    
    </>
  )
}
