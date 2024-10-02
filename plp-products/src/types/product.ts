export interface Productos {
  id: number,
  nombre: string,
  priceSelling: number,
  priceList: number,
  imagen?: string,
  skus?: string[]
}

export interface Producto {
  id: number,
  nombre: string,
  priceSelling: number,
  priceList: number,
  imagen?: string,
  skus?: string[]
}

export interface ProductoItem {
  id: number,
  nombre: string,
  imagen?: string,
  precioNormal: number,
  precioVenta: number,
  precioFinal: number,
  cantidad: number,
  talla: string,
  descuentoAplicado: number
}