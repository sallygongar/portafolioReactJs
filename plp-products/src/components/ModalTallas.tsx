import React from "react";

interface ModalProps {
  skus?: string[],
  handleClose?: () => void;
  handleSize: (talla: string) => void;
}

const ModalTallas: React.FC<ModalProps> = ({skus,handleClose, handleSize}) => {
 return(
    <div className="content__modal">
      <div className="content_tallas">
      <button type="button" className="close" onClick={handleClose}>x</button>
      <div className="card__tallas">
        {
          skus?.map((item, index)=> <span key={index} onClick={() => handleSize(item) } >{item}</span>)
        }
      </div>
      </div>
    </div>
 )   
}

export default ModalTallas;