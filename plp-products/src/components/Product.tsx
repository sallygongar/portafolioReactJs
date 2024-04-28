import React, {useState} from "react";
import ButtonCart from "./ButtonCart";
import ModalTallas from "./ModalTallas";

interface ProductProps{
  nombre: string,
  priceSelling: string;
  priceList: string;
  imagen?: string;
  skus?: string[],
  agregarAlCarrito: (nombre: string, price: string, talla: string) => void;
}

const Product: React.FC<ProductProps> = ({nombre, priceSelling, priceList, imagen, skus, agregarAlCarrito}) =>{
  const [showTallas, setShowTallas] = useState(false);
  const [tallaSeleccionada, setTallaSeleccionada] = useState("");
  const [isSucessfull, setSucessful] = useState(false)
 
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
    agregarAlCarrito(nombre,priceSelling,tallaSeleccionada);
    setTallaSeleccionada("")
    setSucessful(true);
    setTimeout(()=>{
      setSucessful(false);
    },2000)
  }

  return(
    <section className="card__product">
      <img src={imagen} alt="zapato" width='100%'/>
        <div className="card__product-details">
          <span>{nombre}</span>
          <div className="card__prices">
            <span>{priceSelling}</span>
            <span>{priceList}</span>
          </div>
        </div>
       {
        showTallas ? <ModalTallas skus={skus} handleClose={closeModal} handleSize={handleSizeSelect}/>  
          : tallaSeleccionada?  <ButtonCart texto="Agregar a carrito" onClick={ handleAgregarCarrito}/> : <ButtonCart texto={isSucessfull ? "ITEM AGREGADO" : "Selecciona talla"} onClick={openTallas} disabled={isSucessfull}/>
       }
    </section>
  )
} 

export default Product;