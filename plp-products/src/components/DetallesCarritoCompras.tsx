import React from "react";


interface CarritoProps {
  carrito: any[],
  title: string
}

const DetallesCarritoCompras: React.FC<CarritoProps> = ({carrito,title}) => {
  return (
    <>
    <h2>{title}</h2>
    <ul>
      {carrito.map((item, index) => (
        <li key={index}>
         {item.cantidad} {item.nombre} - Talla {item.talla} -  $ {item.precioFinal}
        </li>
      ))}
    </ul>
  </>
  )
}

export default DetallesCarritoCompras;