import React from "react";

interface ModalProps {
  skus?: string[],
  onClick?: () => void;
}

const ModalTallas: React.FC<ModalProps> = ({skus,onClick}) => {
 return(
    <div className="content__modal">
      <div className="content_tallas">
      <button type="button" className="close" onClick={onClick}>x</button>
      <div className="card__tallas">
        {
          skus?.map((item)=> <span>{item}</span>)
        }
      </div>
      </div>
    </div>
 )   
}

export default ModalTallas;