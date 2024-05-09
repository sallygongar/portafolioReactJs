export interface Producto {
  id: string,
  nombre: string,
  priceSelling: string,
  priceList: string,
  imagen?: string,
  skus?: string[]
}

export interface ProductoList {
  id: string,
  nombre: string,
  priceSelling: string,
  priceList: string,
  imagen?: string,
  skus?: string[]
}

export interface ProductoItem {
  id: string,
  nombre: string,
  precio: string,
  cantidad: number
}