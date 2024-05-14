import { useProductosContext } from '../contexto/ProductosProvider';
import { useCart } from '../contexto/CarritoContext';
import Gallery from './Gallery';
import DetallesCarritoCompras from './DetallesCarritoCompras';

interface PageProps {
  title: string
}

const PagePLP: React.FC<PageProps> = ({ title}) => {
  const { productos } = useProductosContext();
  const { state } = useCart();
  console.log("Lista de productos", state)

  return (
    <div className="content">
      <h1>{title}</h1>
      <Gallery data={productos} />
      <DetallesCarritoCompras carrito={state.productos} title='Detalle de compra'/>
  
    </div>
  );
}

export default PagePLP;