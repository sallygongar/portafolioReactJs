import React from "react";
import ProductCard from './ProductCard';
import { useProductosContext } from '../contexto/ProductosProvider';


const Gallery: React.FC = () => {
  const { productos } = useProductosContext();
  return(
    <div className="gallery_content">
      {
        /* GALLERY  */
        productos.map((item,index) => <ProductCard key={index} producto={item} />)
      }

    </div>
  )
}

export default Gallery;