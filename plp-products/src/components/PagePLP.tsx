
import Product from './Product';
import data from '../data/products.json';
import '../css/styles.css';
import { useState } from 'react';

const PagePLP: React.FC = () => {
 const [carrito, setCarrito] = useState<{nombre: string, price: string, talla: string}[]>([]);

 const agregarAlCarrito = (nombre: string, price: string, talla: string) => {
  setCarrito([...carrito, { nombre, price, talla }]);
};

  return (
    <div className="content">
      {
        data.map((item,index) => <Product key={index} nombre={item.nombre} priceList={item.priceList} priceSelling={item.priceSelling} imagen = {item.imagen} skus={item.tallas} agregarAlCarrito={agregarAlCarrito}/>)
      }
    </div>
  );
}

export default PagePLP;