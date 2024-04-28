
// example

import React from 'react';
import { useCarrito } from './CarritoContext';

const Componente: React.FC = () => {
  const { carrito, agregarAlCarrito } = useCarrito();

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito({ id: 1, nombre: 'Producto', precio: 10 });
  };

  return (
    <div>
      <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
      <p>Productos en el carrito: {carrito.length}</p>
    </div>
  );
};

export default Componente;