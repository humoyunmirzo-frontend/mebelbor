<script setup lang="ts">
import { useCartProductsStore } from '~/stores/cart'
import type { IProduct } from '~/interfaces'

interface IProp {
  data: IProduct
}

const props = defineProps<IProp>()
const cartProductsStore = useCartProductsStore()
const isPushed = ref<boolean>(false)
function addToCart(data: IProduct) {
  cartProductsStore.createCartProduct(data)
  isPushed.value = true
}
</script>

<template>
  <div class="flex flex-col items-start justify-between gap-3 rounded-4px px-3 py-2 duration-500 hover:translate-y-[-10px] hover:shadow-lg">
    <img class="h-200px w-300px rounded-t-4px" :src="props.data.image" alt="">
    <div class="w-full flex flex-col items-start px-2">
      <div class="font-600">
        {{ props.data.name }}
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="font-500">
          Material turi:
        </div>
        <div>{{ props.data.materialType }}</div>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="font-500">
          Rangi:
        </div>
        <div>{{ props.data.color }}</div>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="font-500">
          Uzunligi:
        </div>
        <div>{{ props.data.length }} m</div>
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="font-500">
          Narxi:
        </div>
        <div>{{ numeralFormat(props.data.price) }} so'm</div>
      </div>
    </div>
    <div class="h-1px w-120px flex self-center bg-primary" />
    <the-button prepend-icon="ri-shopping-basket-line" size="lg" class="w-full pt-3" @click="!isPushed && addToCart(props.data)">
      {{ !isPushed ? "Savatga qo'shish" : "Savatda mavjud" }}
    </the-button>
  </div>
</template>

  <style scoped lang="scss">

</style>
