
import Product from './Product';
import data from '../data/products.json';
import '../css/styles.css';
import { useState } from 'react';
import { Producto } from '../types/product';

const PagePLP: React.FC = () => {
 const [carrito, setCarrito] = useState<{producto: Producto, talla: string}[]>([]);

 const agregarAlCarrito = (producto: Producto, talla: string) => {
  setCarrito([...carrito, { producto, talla }]);
};

  return (
    <div className="content">
      {
        data.map((item,index) => <Product key={index} producto={item} agregarAlCarrito={agregarAlCarrito}/>)
      }
      {
        <>
          <h2>Carrito de compras</h2>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                {item.producto.nombre} - Talla: {item.talla} - ${item.producto.priceSelling}
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
}

export default PagePLP;