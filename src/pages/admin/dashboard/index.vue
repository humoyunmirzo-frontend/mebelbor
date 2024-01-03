<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useOrdersStore } from '~/stores/orders'

const ordersStore = useOrdersStore()
const cards: object[] = [
  {
    title: 'Buyurtmalar',
    icon: 'ri-sort-desc',
    path: '/admin/dashboard/orders',
  },
]
</script>

<template>
  <div class="flex flex-col items-start gap-10">
    <admin-header />
    <div class="grid grid-cols-4 items-start gap-5 px-74px py-36px">
      <router-link v-for="card in cards" :key="card.title" :to="card.path" class="relative flex items-center gap-3 rounded-8px bg-primary px-5 py-2.5 text-white">
        <Icon :icon="card.icon" class="text-7 font-700" />
        <div class="text-7 text-white font-700">
          {{ card.title }}
        </div>
        <div class="absolute right-[-12px] top-[-12px] h-24px w-24px rounded-full bg-success text-center">
          {{ ordersStore.notAcceptedOrdersQuantity }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
