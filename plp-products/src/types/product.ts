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