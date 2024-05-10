import { createContext } from "react";
import { Productos } from "../types/product";

interface ProductContextType {
    productos: Productos[];
    fetchProductos: () => void;
}

// Creando contexto
export const ProductosContext = createContext<ProductContextType | undefined>(undefined);