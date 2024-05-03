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
            {item.producto.nombre} - Talla: {item.talla} - ${item.producto.priceSelling}
          </li>
        ))}
      </ul>
    </>
    )
}

export default DetallesCarritoCompras;