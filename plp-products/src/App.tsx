
import Navbar from "./components/Navbar";
import NavBarMobile from "./components/menuMobile/NavBarMobile";
import GaleriaProductos from "./components/GaleriaProductos";
import { ProductosProvider} from "./contexto/ProductosProvider";
import { CartProvider } from './contexto/CarritoContext';
import './css/styles.css';
import './css/stylesMenu.css';

const App: React.FC = () => {
  return (
   <ProductosProvider>
    <CartProvider>
      <Navbar/>
      <NavBarMobile/>
      <GaleriaProductos title="GALERIA DE PRODUCTOS"/>
    </CartProvider>
   </ProductosProvider>
  );
}

export default App;
