import React from "react";
import Search from "./Search";

const Navbar: React.FC = () => {
  return(
    <nav className="navbar">
      <div className="nav__menu">
        <ul>
          <li><img className="nav__logo" src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/florskincare.jpg?alt=media&token=efc80054-2f92-4248-9f7f-18e6e5deba45" alt="Flor de loto" /></li>
          <li>Skin Facial</li>
          <li>Skin Corporal</li>
          <li>Protocolos</li>
          <li>Citas</li>
        </ul>
      </div>
      <div className="nav__compras">
        <ul>
          <li><img src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/usuario.png?alt=media&token=12aeaccb-3858-4b92-a247-5056433cf1e3" alt="usuario" width="25px"/></li>
          <li><img src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/carrito-de-compras.png?alt=media&token=e267cfea-0ddd-4c65-8dc3-b7d8122d99b4" alt="carrito de compras" width="25px"/></li>
        </ul>
        <Search/>
      </div>
    </nav>
  )
}

export default Navbar