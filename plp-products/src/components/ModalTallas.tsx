import React from "react";

interface ModalProps {
  skus?: string[]
}

const ModalTallas: React.FC<ModalProps> = ({skus}) => {
 return(
    <div className="content__tallas">
      <button type="button">x</button>
      <div className="card__tallas">
        {
          skus?.map((item)=> <span>{item}</span>)
        }
      </div>
    </div>
 )   
}

export default ModalTallas;