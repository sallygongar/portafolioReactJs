import React, { createContext, useContext, useReducer, Dispatch } from 'react';

// Definimos el tipo para un producto en el carrito
interface ProductItem {
  id: number;
  nombre: string;
  imagen?: string;
  precioNormal: number;
  precioVenta: number;
  precioFinal: number;
  cantidad: number;
  talla: string;
  descuentoAplicado: number
}

interface childrenProps {
  children?: React.ReactNode; // Permitir children
}

// Definimos el tipo para el estado del carrito
interface CartState {
  productos: ProductItem[];
}

// Definimos las acciones que pueden modificar el estado del carrito
type CartAction =
  | { type: 'ADD_PRODUCT'; producto: ProductItem }
  | { type: 'REMOVE_PRODUCT'; productId: number }
  | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number };

// Creamos el contexto de datos del carrito
const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
} | undefined>(undefined);

// Definimos el reducer para gestionar las acciones del carrito
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        productos: [...state.productos, action.producto],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== action.productId
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id === action.productId
            ? { ...producto, quantity: action.quantity }
            : producto
        ),
      };
    default:
      return state;
  }
};

// Creamos el proveedor del contexto de datos del carrito
export const CartProvider: React.FC<childrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { productos: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de datos del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
