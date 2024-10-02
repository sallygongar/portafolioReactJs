
import Navbar from "./components/Navbar";
import GaleriaProductos from "./components/GaleriaProductos";
import { ProductosProvider} from "./contexto/ProductosProvider";
import { CartProvider } from './contexto/CarritoContext';
import './css/styles.css';

const App: React.FC = () => {
  return (
   <ProductosProvider>
    <CartProvider>
      <Navbar/>
      <GaleriaProductos title="GALERIA DE PRODUCTOS"/>
    </CartProvider>
   </ProductosProvider>
  );
}

export default App;
