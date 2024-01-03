import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IProduct } from '~/interfaces'

interface IState {
  products: IProduct[]
}
export const useProductsStore = defineStore('products', {
  state: (): IState => ({
    products: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Shkaf',
        materialType: 'MDF',
        color: 'Oq',
        length: 3,
        quantity: 1,
        price: 3200000,
      },
      {
        id: '2',
        image: 'https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Kreslo',
        materialType: 'DVP',
        color: 'Oq',
        length: 2,
        quantity: 1,
        price: 4450000,
      },
      {
        id: '3',
        image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Stol stul to\'plami',
        materialType: 'MDF',
        color: 'Oq',
        length: 4,
        quantity: 1,

        price: 3200000,
      },
      {
        id: '4',
        image: 'https://images.pexels.com/photos/133919/pexels-photo-133919.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Stol stul to\'plami',
        materialType: 'DSP',
        color: 'Yo\'goch rang',
        length: 3,
        quantity: 1,
        price: 1000000,
      },
      {
        id: '5',
        image: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Oshxona mebellari to\'plami',
        materialType: 'MDF',
        color: 'Qaymoq rang',
        length: 2,
        quantity: 1,
        price: 8000000,
      },
    ],
  }),
  actions: {
    // Backenddan mahsulotlar olish uchun

    // async getProducts(){
    //   try {
    //     const res = await  axios.get('URL/api/products')
    //     this.products = res.data
    //   } catch (error) {

    //   }
    // }

    // Mahsulot qo'shish
    async createProduct(product: IProduct) {
      try {
        // const res = await axios.post('URL/api/post', product)
        // this.products.push(res.data)
        const newProduct = {
          id: generateUniqueString(),
          image: product.image,
          name: product.name,
          materialType: product.materialType,
          color: product.color,
          length: product.length,
          quantity: product.quantity,
          price: product.price,
        }
        this.products.push(newProduct)
      }
      catch (error) {

      }
    },
    // Mahsulotni tahrirlash
    async updateProduct(product: IProduct) {
      try {
        //     const res = await axios.put(`URL/api/put-product/${id}`,product)
        // this.products.push(res.data)
        // },
        const index = this.products.findIndex(item => item.id === product.id)
        this.products[index] = product
      }
      catch (error) {

      }
    },
    //  Mahsulotni o'chirish

    async deleteProduct(id: string) {
      try {
        // await axios.delete(`URL/api/delete/${id}`)
        const index = this.products.findIndex(product => product.id === id)
        this.products.splice(index, 1)
      }
      catch (error) {

      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore as any, import.meta.hot))
