import React, { createContext, useContext, useReducer, Dispatch } from 'react';

// Definimos el tipo para un producto en el carrito
interface ProductItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  talla: string;
}

// Definimos el tipo para el estado del carrito
interface CartState {
  products: ProductItem[];
}

// Definimos las acciones que pueden modificar el estado del carrito
type CartAction =
  | { type: 'ADD_PRODUCT'; product: ProductItem }
  //| { type: 'ADD_TALLA'; productId: number; talla: string }
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
        products: [...state.products, action.product],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.productId
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.productId
            ? { ...product, quantity: action.quantity }
            : product
        ),
      };
    default:
      return state;
  }
};

// Creamos el proveedor del contexto de datos del carrito
export const CartProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, { products: [] });

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
