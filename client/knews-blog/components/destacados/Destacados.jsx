import React from 'react'
import  Titulo  from '@/components/IU/Titulo'
import { CardDestacada } from '@/components/destacados/tarjetas/CardDestacada'

const noticiasMock = [
  {
    imagen: "#",
    titulo: "Nuevo álbum rompe récords globales globales globales globales",
    categoria: "Música",
    fecha: "1 Jul 2025",
    resumen: "BLACKPINK lanza su álbum más esperado y domina las listas en más de 60 países.",
    link: "#",
  },
  {
    imagen: "#",
    titulo: "Gira 'BLVCK FANTASY' comienza en Seúl",
    categoria: "Tour",
    fecha: "28 Jun 2025",
    resumen: "El estadio se llena de fans en el inicio de la nueva gira mundial. e la nueva gira mundial. e la nueva gira mundial.",
    link: "#",
  },
  {
    imagen: "#",
    titulo: "Jennie deslumbra en evento de moda",
    categoria: "Estilo",
    fecha: "25 Jun 2025",
    resumen: "Jennie marca tendencia con su look en el desfile de Chanel.",
    link: "#",
  },
];

export const Destacados = () => {
  return (
   <>
    <section className='bg-zinc-900  p-8  flex  flex-col items-center justify-center'>
    <Titulo >DESTACADOS</Titulo>
     <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
        {noticiasMock.map((noticia, i) => (
          <CardDestacada key={i} {...noticia} />
        ))}
      </div>
    </section>
   </>
  )
}
