
import Navbar from "./components/Navbar";
import PagePLP from "./components/PagePLP";
import { ProductosProvider} from "./contexto/ProductosProvider";
import { CartProvider } from './contexto/CarritoContext';
import './css/styles.css';

const App: React.FC = () => {
  return (
   <ProductosProvider>
    <CartProvider>
      <Navbar/>
      <PagePLP title="PRODUCTOS DE COLECCIÓN"/>
    </CartProvider>
   </ProductosProvider>
  );
}

export default App;
