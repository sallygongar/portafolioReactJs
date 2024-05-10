

import '../css/styles.css';
//import { useState } from 'react';
//import { Producto } from '../types/product';
//import Gallery from './Gallery';
//import DetallesCarritoCompras from './DetallesCarritoCompras';

interface PageProps {
  title: string
}

const PagePLP: React.FC<PageProps> = ({ title}) => {
 

  return (
    <div className="content">
      <h1>{title}</h1>
      {/*<Gallery data={data} agregarAlCarrito={agregarAlCarrito}/>
      <DetallesCarritoCompras carrito={carrito} title='Detalle de compra'/>
  */}
    </div>
  );
}

export default PagePLP;