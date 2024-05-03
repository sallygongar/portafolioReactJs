

import '../css/styles.css';
import { useState } from 'react';
import { Producto } from '../types/product';
import Gallery from './Gallery';
import DetallesCarritoCompras from './DetallesCarritoCompras';

interface PageProps {
  data: Producto[],
  title: string
}

const PagePLP: React.FC<PageProps> = ({data, title}) => {
 const [carrito, setCarrito] = useState<{producto: Producto, talla: string}[]>([]);

 const agregarAlCarrito = (producto: Producto, talla: string) => {
  setCarrito([...carrito, { producto, talla }]);
};

  return (
    <div className="content">
      <h1>{title}</h1>
      <Gallery data={data} agregarAlCarrito={agregarAlCarrito}/>
      <DetallesCarritoCompras carrito={carrito} title='Detalle de compra'/>
    </div>
  );
}

export default PagePLP;