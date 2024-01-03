import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IOrder } from '~/interfaces'

interface IState {
  orders: IOrder[]
}
export const useOrdersStore = defineStore('orders', {
  state: (): IState => ({
    orders: [
      {
        id: '1',
        clientName: 'Humoyun Xoliqberdiyev',
        clientPhone: '+998 91 737 50 20',
        orderedProducts: [
          {
            id: 4,
            image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Stol stul to\'plami',
            materialType: 'DSP',
            color: 'Yo\'goch rang',
            length: 4,
            price: 1000000,
          },
          {
            id: 5,
            image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Oshxona mebellari to\'plami',
            materialType: 'MDF',
            color: 'Qaymoq rang',
            length: 6,
            price: 8000000,
          },
        ],
        allPrice: 9000000,
        status: 'Yangi',
      },
      {
        id: '2',
        clientName: 'Ozod Akbarov',
        clientPhone: '+998 91 737 50 20',
        orderedProducts: [
          {
            id: 1,
            image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Shkaf',
            materialType: 'MDF',
            color: 'Oq',
            length: 2,
            price: 3200000,
          },
        ],
        allPrice: 3200000,
        status: 'Yangi',
      },
    ],
  }),
  getters: {
    notAcceptedOrdersQuantity(state) {
      return state.orders.filter(order => order.status === 'Yangi').length
    },
  },
  actions: {
    async getOrders() {
      try {
        // const res = await  axios.get('URL/api/orders')
        // this.orders = res.data
        return this.orders
      }
      catch (error) {
      }
    },
    async createOrder(order: IOrder) {
      try {
      //     const res = await axios.post(`URL/api/post-order/`,order)
      // this.products.push(res.data)
      // },
        this.orders.push(order)
      }
      catch (error) {

      }
    },
    async updateOrder(order: IOrder) {
      try {
      //     const res = await axios.put(`URL/api/put-order/${id}`,order)
      // this.products.push(res.data)
      // },
        const index = this.orders.findIndex(item => item.id === order.id)
        this.orders[index] = order
      }
      catch (error) {

      }
    },
    async deleteOrder(id: string) {
      try {
        // await axios.delete(`URL/api/delete/${id}`)
        const index = this.orders.findIndex(item => item.id === id)
        this.orders.splice(index, 1)
      }
      catch (error) {

      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useOrdersStore as any, import.meta.hot))
