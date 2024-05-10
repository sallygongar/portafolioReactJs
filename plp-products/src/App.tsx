
//import Navbar from "./components/Navbar";
//import PagePLP from "./components/PagePLP";
import { ProductosProvider, useProductosContext } from "./contexto/ProductosProvider";

const ProductosList: React.FC = () => {
  const { productos } = useProductosContext();
  
  return(
    <div>
      <h2>Productos</h2>
      <ul>
        {
          productos.map(producto =>(<li key={producto.id}>{producto.nombre}</li>))
        }
      </ul>
    </div>
  )
}
const App: React.FC = () => {
  return (
   <ProductosProvider>
    <ProductosList />
   </ProductosProvider>
  );
}

export default App;
