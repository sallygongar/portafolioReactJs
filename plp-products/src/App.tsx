
import Navbar from "./components/Navbar";
import PagePLP from "./components/PagePLP";
import { ProductosProvider} from "./contexto/ProductosProvider";
import './css/styles.css';

const App: React.FC = () => {
  return (
   <ProductosProvider>
    <Navbar/>
    <PagePLP title="PRODUCTOS DE COLECCIÓN"/>
   </ProductosProvider>
  );
}

export default App;
