import { useProductosContext } from '../contexto/ProductosProvider'
import Gallery from './Gallery';
//import DetallesCarritoCompras from './DetallesCarritoCompras';

interface PageProps {
  title: string
}

const PagePLP: React.FC<PageProps> = ({ title}) => {
  const { productos } = useProductosContext();

  return (
    <div className="content">
      <h1>{title}</h1>
      <Gallery data={productos} />
      {/*<DetallesCarritoCompras carrito={carrito} title='Detalle de compra'/>*/}
  
    </div>
  );
}

export default PagePLP;