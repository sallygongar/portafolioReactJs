
import Product from './components/Product';
import data from './data/products.json';
import './css/styles.css';

function App() {
  return (
    <div className="content">
      {
        data.map((item,index) =>   <Product key={index} nombre={item.nombre} priceList={item.priceList} priceSelling={item.priceSelling} imagen= {item.imagen}/>)
      }
    </div>
  );
}

export default App;
