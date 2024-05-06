
import Navbar from "./components/Navbar";
import PagePLP from "./components/PagePLP";
import data from './data/products.json';

function App() {
  return (
   <>
   <Navbar/>
   <PagePLP data={data} title="Tenis de temporada"/>
   </>
  );
}

export default App;
