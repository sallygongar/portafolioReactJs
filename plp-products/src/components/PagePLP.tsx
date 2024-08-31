import { useCart } from '../contexto/CarritoContext';
import Gallery from './Gallery';
import DetallesCarritoCompras from './DetallesCarritoCompras';

interface PageProps {
  title: string
}

const PagePLP: React.FC<PageProps> = ({ title}) => {

  const { state } = useCart();
  console.log("Lista de productos", state)

  return (
    <div className="content">
      <h1>{title}</h1>
      <Gallery />
      <DetallesCarritoCompras carrito={state.productos} title='Detalle de compra'/>
  
    </div>
  );
}

export default PagePLP;