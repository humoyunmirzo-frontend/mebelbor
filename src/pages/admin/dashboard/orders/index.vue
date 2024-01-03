<script setup lang="ts">
import type { IOrder } from '~/interfaces'
import { useOrdersStore } from '~/stores/orders'

const ordersStore = useOrdersStore()
const columns: object[] = [
  {
    title: 'F.I.SH',
    value: 'clientName',
  },
  {
    title: 'Telefon raqam',
    value: 'clientPhone',
  },
  {
    title: 'Umumiy narx',
    value: 'allPrice',
  },
  {
    title: 'Status',
    value: 'status',
  },
  {
    title: 'Amallar',
    value: 'actions',
  },
]
const activeOrderId = ref<string>('0')
const showModal = ref<boolean>(false)
const order = ref<any>([])
const allPrices = ordersStore.orders.reduce((acc, curr) => acc + curr.allPrice, 0)
const oneOrderAllPrice = ref<number>(0)
function showOrders(data: any) {
  activeOrderId.value = data.id
  oneOrderAllPrice.value = data.allPrice
  showModal.value = true
  order.value = data.orderedProducts
}
const orders = ref<IOrder[]>(ordersStore.orders)
onMounted(() => {
  ordersStore.getOrders()
  orders.value = ordersStore.orders
})
function acceptOrder(id: string) {
  const orderIndex = ordersStore.orders.findIndex((order: any) => order.id === id)
  const order = ordersStore.orders[orderIndex]
  const updatedOrder: IOrder = {
    id,
    clientName: order.clientName,
    clientPhone: order.clientPhone,
    orderedProducts: order.orderedProducts,
    allPrice: order.allPrice,
    status: 'Qabul qilingan',
  }
  ordersStore.updateOrder(updatedOrder)
  showModal.value = false
}
</script>

<template>
  <div class="flex flex-col items-start gap-10">
    <the-modal v-model="showModal" modal-width="70%">
      <div class="w-full flex flex-col items-start gap-2 pr-5">
        <div v-for="item in order" :key="item" class="w-full flex items-start justify-between overflow-hidden rounded-2 shadow-sm">
          <img :src="item.image" class="h-150px w-200px object-cover" alt="">
          <div class="flex flex-col gap-1">
            <div class="text-right text-6 font-600">
              {{ item.name }}
            </div>

            <div class="text-right">
              {{ item.color }}
            </div>

            <div class="text-right">
              {{ item.length }} m
            </div>

            <div class="text-right text-5 font-600">
              {{ numeralFormat(item.price) }} so'm
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="mb-3 h-full w-full flex items-center justify-between rounded-12px bg-primary p-3 text-white">
          <div class="font-500">
            Jami summa: {{ numeralFormat(oneOrderAllPrice) }} so'm
          </div>
          <the-button color="success" prepend-icon="ri-check-line" @click="acceptOrder(activeOrderId)">
            Qabul qilish
          </the-button>
        </div>
      </template>
    </the-modal>
  </div>
  <admin-header />
  <div class="w-full flex flex-col items-start gap-10 px-74px py-36px">
    <div class="w-full flex items-end justify-between">
      <div class="text-5 font-500">
        Buyurtmalar soni : {{ ordersStore.orders.length }}
      </div>
      <div class="text-5 font-500">
        Buyurtmalar summasi : {{ numeralFormat(allPrices) }} so'm
      </div>
    </div>
    <the-table numerable :columns="columns" :rows="ordersStore.orders">
      <template #allPrice="{ data }">
        <td>
          {{ numeralFormat(data.allPrice) }} so'm
        </td>
      </template>
      <template #actions="{ data }">
        <div class="flex items-center gap-2">
          <abbr title="Buyurtmalarni ko'rish">
            <the-icon-button icon="ri-eye-line" @click="showOrders(data)" />
          </abbr>
          <abbr title="Tahrirlash">
            <the-icon-button disabled icon="ri-edit-line" type="success" />
          </abbr>
          <abbr title="O'chirish">
            <the-icon-button disabled icon="ri-delete-bin-line" type="danger" />
          </abbr>
        </div>
      </template>
      <the-table />
    </the-table>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
