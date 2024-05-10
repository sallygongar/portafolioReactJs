import { useContext, useEffect, useState } from 'react';
import { Productos } from "../types/product";
import { ProductosContext } from './ProductosContext';
import data from '../data/products.json';

interface OtherProps {
  children?: React.ReactNode; // Permitir children
}

export const ProductosProvider: React.FC<OtherProps> = ({ children }) => {

    const [productos, setProductos] = useState<Productos[]>([])

    const fetchProductos = async () => {
      const fetchedProductos: Productos[] = data;
      setProductos(fetchedProductos)
    }

    useEffect(() => {
        fetchProductos()

    }, [])

    return (
      <ProductosContext.Provider value={{productos, fetchProductos}}>
        {children}
      </ProductosContext.Provider>
    )
}

// Hook personalizado para consumir el contexto
export const useProductosContext = () => {
  const context = useContext(ProductosContext);
  if(!context){
    throw new Error('useProductosContext must be used within a ProductProvider')
  }
  return context;
}
