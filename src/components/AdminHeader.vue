<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useOrdersStore } from '~/stores/orders'

const ordersStore = useOrdersStore()
</script>

<template>
  <header class="w-full flex items-center justify-between bg-primary px-74px py-36px text-white">
    <router-link to="/" class="text-7 font-700">
      Funiro.
    </router-link>
    <div class="relative flex items-center gap-1 text-4.5">
      <Icon icon="ri-user-line" />
      Admin ismi
      <div class="absolute right-[-24px] top-[-24px] h-24px w-24px rounded-full bg-success text-center">
        {{ ordersStore.notAcceptedOrdersQuantity }}
      </div>
    </div>
  </header>
</template>
