import { ArticuloCompleto } from '@/components/articulos/articulo/ArticuloCompleto'

import React from 'react'

 const Articulo = ({ params }) => {
   const { slug } = params;
  return (
    <ArticuloCompleto slug={slug}/>
  )
}
export default Articulo;