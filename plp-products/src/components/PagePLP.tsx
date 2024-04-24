
import Product from './Product';
import data from '../data/products.json';
import '../css/styles.css';

function PagePLP() {
  return (
    <div className="content">
      {
        data.map((item,index) =>   <Product key={index} nombre={item.nombre} priceList={item.priceList} priceSelling={item.priceSelling} imagen= {item.imagen}/>)
      }
    </div>
  );
}

export default PagePLP;