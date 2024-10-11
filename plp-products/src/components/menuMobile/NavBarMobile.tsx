import React from "react";
import ToogleMenu from './ToogleMenu'

function NavBarMobile(){
  return(
      <div className="content_menu_mobile">
        <ToogleMenu/>
        <div className="nav-bar-mobile--img"><img className="nav__logo" src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/zapatillas.png?alt=media&token=fbc801b2-b189-4ca5-9bc3-4417d11145ae" alt="Tenis" /></div>
        <div className="content-opciones-menu-mobile">
          <ul>
            <li><img src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/usuario.png?alt=media&token=12aeaccb-3858-4b92-a247-5056433cf1e3" alt="usuario" width="25px"/></li>
            <li><img src="https://firebasestorage.googleapis.com/v0/b/proyectos-web-565ae.appspot.com/o/carrito-de-compras.png?alt=media&token=e267cfea-0ddd-4c65-8dc3-b7d8122d99b4" alt="carrito de compras" width="25px"/></li>
          </ul>
        </div>
      </div>
  )
}

export default NavBarMobile;