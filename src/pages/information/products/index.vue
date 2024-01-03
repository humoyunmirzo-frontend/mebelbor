<script setup lang="ts">
import { useProductsStore } from '~/stores/products'

const productsStore = useProductsStore()
const searchInput = ref<string>('')
const filteredProducts = computed(() => {
  return productsStore.products.filter(product => product.name.toLowerCase().trim().includes(searchInput.value.toLowerCase().trim()))
})
</script>

<template>
  <div class="mt-108px flex flex-col items-start justify-center gap-6 px-74px py-36px">
    <div class="text-10 text-#3A3A3A">
      Mahsulotlar
    </div>
    <div class="w-full flex justify-center">
      <label for="default-search" class="sr-only mb-2 text-sm text-gray-900 font-medium dark:text-white">Search</label>
      <div class="relative">
        <div class="pointer-events-none absolute start-0 inset-y-0 flex items-center ps-3">
          <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          id="default-search"
          v-model="searchInput"
          type="search"
          class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-gray-200 focus:ring-primary" placeholder="Qidirish"
        >
      </div>
    </div>
    <TransitionGroup name="list" class="w-full flex items-stretch gap-5" tag="ul">
      <the-product-card v-for="product in filteredProducts" :key="product.id" :data="product" />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
