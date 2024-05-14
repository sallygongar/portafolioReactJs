export interface Productos {
  id: string,
  nombre: string,
  priceSelling: number,
  priceList: number,
  imagen?: string,
  skus?: string[]
}

export interface Producto {
  id: string,
  nombre: string,
  priceSelling: number,
  priceList: number,
  imagen?: string,
  skus?: string[]
}

export interface ProductoItem {
  id: string,
  nombre: string,
  imagen?: string,
  precioNormal: number,
  precioVenta: number,
  precioFinal: number,
  cantidad: number,
  talla: string,
  descuentoAplicado: number
}