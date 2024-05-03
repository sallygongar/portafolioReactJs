import React from "react";
import Product from './Product';
import { Producto } from '../types/product';

interface GalleryProps {
 data: Producto[],
 agregarAlCarrito: (producto: Producto, talla: string) => void;
}


const Gallery: React.FC<GalleryProps> = ({data, agregarAlCarrito}) => {
  return(
    <div className="gallery_content">
      {
        /* GALLERY  */
        data.map((item,index) => <Product key={index} producto={item} agregarAlCarrito={agregarAlCarrito}/>)
      }

    </div>
  )
}

export default Gallery;