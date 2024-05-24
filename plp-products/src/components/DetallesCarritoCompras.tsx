import React from "react";


interface CarritoProps {
  carrito: any[],
  title: string
}
 
const DetallesCarritoCompras: React.FC<CarritoProps> = ({carrito,title}) => {
  return (
    <>
    <h2>{title}</h2>
    <div className="cart__list-content">
      <div className="cart__list__container-productos">
      {carrito.map((item, index) => (
        <div className="cart__list__wrapper_detalles" key={index}>
        <div className="cart__list__wrapper_imagen">
          <div className="cart__list_img">
             <img src={item.imagen} alt={item.imagen} width="100%"/>
          </div>
        </div>
        <div className="cart__list__wrapper_producto">
          <div className="cart__list__caracteristicas">
            <span>{item.nombre}</span>
            <span>{item.talla}</span>
            <span>{item.precioFinal}</span>
          </div>
        </div>
      </div>
       ))}
      </div>
      <div  className="cart__list__container-resumen">
        <h1>Resumen de pgo</h1>
      </div>
    </div>
    
  </>
  )
}

export default DetallesCarritoCompras;