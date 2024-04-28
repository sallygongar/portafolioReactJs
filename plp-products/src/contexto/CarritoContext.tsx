import React, { createContext, useContext, useState } from 'react';

// Definimos el tipo para el producto del carrito
interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

// Definimos el tipo para el contexto del carrito
interface CarritoContextType {
  carrito: Producto[];
  agregarAlCarrito: (producto: Producto) => void;
  eliminarDelCarrito: (indice: number) => void;
  vaciarCarrito: () => void;
}

// Creamos el contexto del carrito
const CarritoContext = createContext<CarritoContextType>({
  carrito: [],
  agregarAlCarrito: () => {},
  eliminarDelCarrito: () => {},
  vaciarCarrito: () => {},
});

// Creamos un hook personalizado para acceder al contexto
export const useCarrito = () => useContext(CarritoContext);

interface Props {
 children: React.ReactNode
}

// Creamos un proveedor de contexto
export const CarritoProvider: React.FC<Props> = ({ children }) => {
  // Definimos el estado del carrito usando useState
  const [carrito, setCarrito] = useState<Producto[]>([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (indice: number) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(indice, 1);
    setCarrito(nuevoCarrito);
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Creamos el valor del contexto
  const carritoContextValue: CarritoContextType = {
    carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    vaciarCarrito,
  };

  // Proporcionamos el contexto a los componentes hijos
  return (
    <CarritoContext.Provider value={carritoContextValue}>
      {children}
    </CarritoContext.Provider>
  );
};