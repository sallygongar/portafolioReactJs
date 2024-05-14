import React, { useState } from "react";
import { useCart } from '../contexto/CarritoContext';
import ButtonCart from "./ButtonCart";
import ModalTallas from "./ModalTallas";
import { Producto, ProductoItem } from '../types/product';
import formatoProducto from "../helpers/formatoProducto";

interface ProductProps{
  producto: Producto
}

const Product: React.FC<ProductProps> = ({producto}) =>{
  const [showTallas, setShowTallas] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [isSucessfull, setSucessful] = useState(false);
  const itemProduct: ProductoItem = formatoProducto(producto);
  const { dispatch } = useCart();
  //console.log("----itemProduct----", itemProduct)

  const openTallas = () => {
    setShowTallas(!showTallas);
  }

  const closeModal = () => {
    setShowTallas(false);
  }

  const handleSizeSelect = (talla: string) => {
    setTallaSeleccionada(talla)
    setShowTallas(false)
  }

  const handleAgregarCarrito = (item: ProductoItem) =>{
    let producto = {...item, talla: tallaSeleccionada };
    dispatch({ type: "ADD_PRODUCT", producto });
    setTallaSeleccionada("")
    setSucessful(true);
    setTimeout(()=>{
      setSucessful(false);
    },2000)
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
       {
        showTallas ? <ModalTallas skus={producto.skus} handleClose={closeModal} handleSize={handleSizeSelect}/>  
          : tallaSeleccionada?  <ButtonCart texto="Agregar a carrito" onClick={() =>handleAgregarCarrito(itemProduct)}/> : <ButtonCart texto={isSucessfull ? "ITEM AGREGADO" : "Selecciona talla"} onClick={openTallas} disabled={isSucessfull}/>
       }
    </section>
  )
} 

export default Product;