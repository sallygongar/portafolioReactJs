import React, {useState} from "react";
import ButtonCart from "./ButtonCart";
import ModalTallas from "./ModalTallas";
import { Producto } from '../types/product';
import calcularDescuento from '../helpers/porcentajeDescuento';

interface ProductProps{
  producto: Producto
}

const Product: React.FC<ProductProps> = ({producto}) =>{
  console.log(producto)
  const [showTallas, setShowTallas] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [isSucessfull, setSucessful] = useState(false);
  const descuento = calcularDescuento(producto.priceSelling, producto.priceList);

  console.log("descuento",descuento)

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

  const handleAgregarCarrito = () =>{
    setTallaSeleccionada("")
    setSucessful(true);
    setTimeout(()=>{
      setSucessful(false);
    },2000)
  }

  return(
    <section className="card__product">
      <img src={producto.imagen} alt="zapato" width='100%'/>
        <div className="card__product-details">
          <span>{producto.nombre}</span>
          <div className="card__prices">
            {
              descuento > 0 ?
              <div>
                <span>{producto.priceList}</span>
                <span>{producto.priceSelling}</span>
              </div>
              :
              <span>{producto.priceSelling}</span>
            }
          </div>
        </div>
       {
        showTallas ? <ModalTallas skus={producto.skus} handleClose={closeModal} handleSize={handleSizeSelect}/>  
          : tallaSeleccionada?  <ButtonCart texto="Agregar a carrito" onClick={ handleAgregarCarrito}/> : <ButtonCart texto={isSucessfull ? "ITEM AGREGADO" : "Selecciona talla"} onClick={openTallas} disabled={isSucessfull}/>
       }
    </section>
  )
} 

export default Product;