<script setup lang="ts">
import { useProductsStore } from '~/stores/products'

const productsStore = useProductsStore()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <div class="text-10 text-#3A3A3A">
      Bizning mahsulotlar
    </div>
    <div class="w-full flex items-stretch gap-5">
      <the-product-card v-for="product in productsStore.products" :key="product.id" :data="product" />
    </div>
    <router-link to="../information/products" class="mt-20">
      <the-button size="lg" color="secondary" append-icon="ri-arrow-right-line">
        Ko'proq
      </the-button>
    </router-link>
  </div>
</template>

<style scoped>

</style>
