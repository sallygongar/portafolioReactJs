import React from "react";

interface ButtonProps {
  texto: string;
  background?: string;
  color?: string;
  onClick?: () => void;
}

const ButtonCart: React.FC<ButtonProps> = ({texto, onClick}) => {
 return(
  
    <button type="button" onClick={onClick} className="card__button">{texto}</button>
    
 )   
}

export default ButtonCart;