import { Producto } from '../types/product';
import calcularDescuento from './porcentajeDescuento';

export default function formatoProducto(producto: Producto){

    const contextProductItem = {
      id: producto.id,
      nombre: producto.nombre,
      imagen: producto.imagen,
      precioNormal: producto.priceList,
      precioVenta: producto.priceSelling,
      precioFinal: calcularDescuento(producto.priceSelling, producto.priceList) > 0 ?  producto.priceList : producto.priceSelling,
      descuentoAplicado: calcularDescuento(producto.priceSelling, producto.priceList),
      cantidad: 1,
      talla: ""
    }
    return contextProductItem;

}