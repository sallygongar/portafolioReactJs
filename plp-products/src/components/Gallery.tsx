import React from "react";
import Product from './Product';
import { Productos } from '../types/product';

interface GalleryProps {
 data: Productos[],
}


const Gallery: React.FC<GalleryProps> = ({ data }) => {
 
  return(
    <div className="gallery_content">
      {
        /* GALLERY  */
        data.map((item,index) => <Product key={index} producto={item} />)
      }

    </div>
  )
}

export default Gallery;