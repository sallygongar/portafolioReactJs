import React from "react";
import ButtonCart from "./ButtonCart";

interface ProductProps{
    nombre: string,
    priceSelling: string;
    priceList: string;
    imagen?: string
}

const addProduct = () => {
  console.log("Selecciona tu talla")
}

const Product: React.FC<ProductProps> = ({nombre, priceSelling, priceList, imagen}) =>{
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
        <ButtonCart texto="Selecciona talla" onClick={addProduct}/>
    </section>
  )
} 

export default Product;