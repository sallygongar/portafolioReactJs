import React, { useState } from "react";
//import { useCart } from '../contexto/CarritoContext';
import ButtonCart from "./ButtonCart";
import ModalTallas from "./ModalTallas";
import { Producto, ProductoItem } from '../types/product';
import formatoProducto from "../helpers/formatoProducto";

interface ProductProps{
  producto: Producto,
  isOpen?: boolean,
  onOpen?: (id: any) => void;
  onClose?: () => void;
}

const ProductCard: React.FC<ProductProps> = ({producto, isOpen, onOpen,onClose}) =>{
  //const [showTallas, setShowTallas] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  //const [isSucessfull, setSucessful] = useState(false);
  const itemProduct: ProductoItem = formatoProducto(producto);
  //const { dispatch } = useCart();
  console.log("isOpen:",isOpen)
  //console.log("----itemProduct----", itemProduct)

  /*const openTallas = () => {
    setShowTallas(!showTallas);
  }

  const closeModal = () => {
    setShowTallas(false);
  }*/

  const handleSize = (talla: string) => {
    setTallaSeleccionada(talla)
  }

  const handleAgregarCarrito = (item: ProductoItem) =>{
    console.log(item)
   /* let producto = {...item, talla: tallaSeleccionada };
    dispatch({ type: "ADD_PRODUCT", producto });
    setTallaSeleccionada("")
    setSucessful(true);
    setTimeout(()=>{
      setSucessful(false);
    },2000)*/
  }

  return(
    <section className="card__product">
      <img src={itemProduct.imagen} alt="zapato" width='100%'/>
        <div className="card__product-details">
          <span>{itemProduct.nombre}</span>
          {
            itemProduct.descuentoAplicado > 0 ?
            <div className="card__prices">
              <span className="price__descuento">{itemProduct.precioNormal}</span>
              <span className="price__anterior">{itemProduct.precioVenta}</span>
            </div>
            :
            <div className="card__prices">
              <span>{itemProduct.precioVenta}</span>
            </div>
          }
        
        </div>
        <button onClick={onOpen}>Seleccionar Producto</button>
        {
          isOpen ? <ModalTallas skus={producto.skus} handleClose={onClose} handleSize={handleSize}/> : ""
        
        }
    </section>
  )
} 

export default ProductCard;