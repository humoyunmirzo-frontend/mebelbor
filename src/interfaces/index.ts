export interface IProduct {
  id: string
  image: string
  name: string
  materialType: string
  color: string
  length: number
  quantity: number
  price: number
}
export interface IService {
  image: string
  title: string
  description: string
}
export interface IOrder {
  id: string
  clientName: string
  clientPhone: string
  orderedProducts: object[]
  allPrice: any
  status: 'Yangi' | 'Qabul qilingan'
}
