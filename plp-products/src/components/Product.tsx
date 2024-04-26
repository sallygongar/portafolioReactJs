import React, {useState} from "react";
import ButtonCart from "./ButtonCart";
import ModalTallas from "./ModalTallas";

interface ProductProps{
  nombre: string,
  priceSelling: string;
  priceList: string;
  imagen?: string;
  skus?: string[]
}

const Product: React.FC<ProductProps> = ({nombre, priceSelling, priceList, imagen, skus}) =>{
  const [showTallas, setShowTallas] = useState(false);

  const openTallas = () => {
    setShowTallas(!showTallas);
  }

  const closeModal = () => {
    setShowTallas(false);
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
        <ButtonCart texto="Selecciona talla" onClick={openTallas}/>
       {
        showTallas ? <ModalTallas skus={skus} onClick={closeModal}/>  
       : <></>
       }
    </section>
  )
} 

export default Product;