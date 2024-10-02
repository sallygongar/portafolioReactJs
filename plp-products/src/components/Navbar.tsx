import React from "react";
import Search from "./Search";

const Navbar: React.FC = () => {
  return(
    <nav className="navbar">
      <div className="nav__menu">
        <ul>
          <li><img className="nav__logo" src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/zapatillas.png?alt=media&token=fbc801b2-b189-4ca5-9bc3-4417d11145ae" alt="Tenis" /></li>
          <li>Casuales</li>
          <li>Tenis</li>
          <li>Nuevos</li>
          <li>Clasicos</li>
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