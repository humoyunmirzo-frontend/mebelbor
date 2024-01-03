import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IProduct } from '~/interfaces'

interface IState {
  cartProducts: IProduct[]
}
export const useCartProductsStore = defineStore('cartProducts', {
  state: (): IState => ({
    cartProducts: [
      {
        id: '1',
        image: '/src/assets/images/divan.png',
        name: 'Divan',
        materialType: 'MDF',
        color: 'Oq',
        length: 5,
        quantity: 1,
        price: 3200000,
      },
      {
        id: '2',
        image: '/src/assets/images/stol5.png',
        name: 'Stol stullar to\'plami',
        materialType: 'DVP',
        color: 'Oq',
        length: 2.5,
        quantity: 1,
        price: 1800000,
      },
    ],
  }),
  actions: {
    // Backenddan mahsulotlar olish uchun

    // async getCartProducts(){
    //   try {
    //     const res = await  axios.get('URL/api/products')
    //     this.products = res.data
    //   } catch (error) {

    //   }
    // }

    // Mahsulot qo'shish
    async createCartProduct(product: IProduct) {
      try {
        // const res = await axios.post('URL/api/post',product)
        // this.products.push(res.data)
        this.cartProducts.push(product)
      }
      catch (error) {

      }
    },
    // Mahsulotni tahrirlash
    async updateCartProduct(product: IProduct) {
      try {
        //     const res = await axios.put(`URL/api/put-product/${id}`,product)
        // this.products.push(res.data)
        // },

        const index = this.cartProducts.findIndex(item => item.id === product.id)
        this.cartProducts[index] = product
      }
      catch (error) {

      }
    },
    //  Mahsulotni o'chirish

    async deleteCartProduct(id: string) {
      try {
        // await axios.delete(`URL/api/delete/${id}`)
        const index = this.cartProducts.findIndex(product => product.id === id)
        this.cartProducts.splice(index, 1)
      }
      catch (error) {

      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCartProductsStore as any, import.meta.hot))
