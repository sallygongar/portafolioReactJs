import React from "react";

interface ProductProps{
    nombre: string,
    priceSelling: string;
    priceList: string;
    imagen?: string
}

const Product: React.FC<ProductProps> = ({nombre, priceSelling, priceList, imagen}) =>{
  return(
    <section className="card__product">
      <img src={imagen} alt="zapato" width='100%'/>
        <div>
          <span>{nombre}</span>
          <span>{priceSelling}</span>
          <span>{priceList}</span>
        </div>
    </section>
  )
} 

export default Product;