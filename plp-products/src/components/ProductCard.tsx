import React, { useState } from "react";
import { useCart } from '../contexto/CarritoContext';
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

const ProductCard: React.FC<ProductProps> = ({producto, isOpen, onOpen, onClose}) =>{
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [isSucessfull, setSucessful] = useState(false);
  const itemProduct: ProductoItem = formatoProducto(producto);
  const { dispatch } = useCart();
  
  
  const handleSize = (event: React.MouseEvent<HTMLSpanElement> ,talla: string) => {
    setTallaSeleccionada(talla);
    const targetElement = event.target as HTMLSpanElement; // Obtener el target

    //Recorriendo span para eliminar estilos
    const spans = document.querySelectorAll('.card__tallas span');
    spans.forEach(span => {
      span.removeAttribute('style');
      //span.classList.remove('nuevo_estilo') //Otra forma de remover clase css
    });
    
    targetElement.style.border = '1px solid red';
    //targetElement.classList.add('nuevo_estilo') //Otra forma de agregar clase css
  }

  const handleAgregarCarrito = (item: ProductoItem) =>{
   let producto = {...item, talla: tallaSeleccionada };
    dispatch({ type: "ADD_PRODUCT", producto });
    setTallaSeleccionada("")
    setSucessful(true);

    onClose?.(); // Asi se invoca una función que puede ser undefined
  
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
          tallaSeleccionada ? <ButtonCart texto="Agregar a carrito" onClick={() =>handleAgregarCarrito(itemProduct)}/> : <button className="card__button" onClick={onOpen} disabled={isSucessfull} style={{cursor: isSucessfull ? 'auto': 'pointer', background: isSucessfull ? 'gray': '' }}>{isSucessfull ? 'Producto Agregado' : 'Seleccionar Talla'}</button>
        }
        
        {
          isOpen ? <ModalTallas skus={producto.skus} handleClose={onClose} handleSize={handleSize}/> : ""
        
        }
    </section>
  )
} 

export default ProductCard;