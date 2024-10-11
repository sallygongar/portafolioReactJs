import React, { useState } from 'react';

function ToogleMenu(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div className="toogle-menu-container">
      <button className="toogle-menu" onClick={toggleMenu}>☰</button>
      <nav className={`menu-mobile ${ isOpen? 'open' : ''}`}>
        <ul>
          <li><a href="#cauales">Casuales</a></li>
          <li><a href="#tenis">Tenis</a></li>
          <li><a href="#nuevos">Nuevos</a></li>
          <li><a href="#clasicos">Clásicos</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default ToogleMenu;