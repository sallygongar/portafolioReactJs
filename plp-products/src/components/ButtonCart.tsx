import React from "react";

interface ButtonProps {
  texto: string;
  background?: string;
  color?: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonCart: React.FC<ButtonProps> = ({texto, onClick, disabled = false}) => {
 return(
  
    <button type="button" onClick={onClick} disabled={disabled} className={`card__button ${disabled ? 'button__disabled' : ''}`}>{texto}</button>
    
 )   
}

export default ButtonCart;