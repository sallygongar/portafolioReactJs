
import { useState } from 'react'
import { useProductosContext } from '../contexto/ProductosProvider';
import ProductCard from './ProductCard';

interface PageProps {
  title: string
}

const GaleriaProductos: React.FC<PageProps> = ({ title}) => {
  const { productos } = useProductosContext();

  const [openModalId, setOpenModalId] = useState(-1); // Estado para controlar el modal abierto

  const handleOpenModal = (id: any) => {
    setOpenModalId(id); // Abre el modal del producto con el ID especificado
  };

  const handleCloseModal = () => {
    setOpenModalId(-1); // Cierra cualquier modal abierto
  };

  return (
    <div className="content">
      <h1>{title}</h1>
      <div className="gallery_content">
      {
        /* GALLERY  */
        productos.map((item,index) => (
        <ProductCard key={index} 
          producto={item} 
          isOpen={openModalId === item.id} 
          onOpen={() => handleOpenModal(item.id)}
          onClose={handleCloseModal}
          />
        ))
      }

    </div>

  
    </div>
  );
}

export default GaleriaProductos;