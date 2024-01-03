<script setup lang="ts">
import { useCartProductsStore } from '~/stores/cart'
import { useOrdersStore } from '~/stores/orders'

const cartProducts = useCartProductsStore()
const ordersStore = useOrdersStore()
function allProductPrice() {
  return cartProducts.cartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
}
const totalPrice = ref<any>(allProductPrice())
function deleteCartProduct(id: string) {
  cartProducts.deleteCartProduct(id)
  totalPrice.value = allProductPrice()
}
const name = ref<string>('')
const phone = ref<string>('')
function createNewOrder(e: any) {
  e.preventDefault()
  const total = allProductPrice()
  ordersStore.createOrder({
    id: generateUniqueString(),
    clientName: name.value,
    clientPhone: phone.value,
    orderedProducts: cartProducts.cartProducts,
    allPrice: total,
    status: 'Yangi',
  })
  cartProducts.cartProducts = []
}
</script>

<template>
  <Header />

  <div
    class="mt-108px flex flex-col items-start justify-center gap-6 px-74px py-36px"
  >
    <div class="text-10 text-#3A3A3A">
      Savat
    </div>

    <div class="w-full flex flex-col items-start gap-5">
      <div
        v-for="product in cartProducts.cartProducts"
        :key="product.id"
        class="relative h-200px w-full flex items-start gap-10 gap-3 overflow-hidden border border-gray-200 rounded-8px"
      >
        <img :src="product.image" class="h-200px w-300px" alt="">
        <div class="flex flex-col items-start justify-between gap-200px p-2">
          <div class="flex flex-col">
            <div class="text-5 font-700">
              {{ product.name }}
            </div>
            <div class="w-full flex items-center justify-between">
              <div class="font-500">
                Material turi:
              </div>
              <div>{{ product.materialType }}</div>
            </div>
            <div class="w-full flex items-center justify-between">
              <div class="font-500">
                Rangi:
              </div>
              <div>{{ product.color }}</div>
            </div>
            <div class="w-full flex items-center justify-between">
              <div class="font-500">
                Uzunligi:
              </div>
              <div>{{ product.length }} m</div>
            </div>
            <div class="w-full flex items-center justify-between">
              <div class="font-500">
                Narxi:
              </div>
              <div>{{ numeralFormat(product.price * product.quantity) }} so'm</div>
            </div>
            <div class="w-full flex items-center justify-between gap-3">
              <div class="font-500">
                Soni:
              </div>
              <the-button-group
                v-model="product.quantity"
                @click=" totalPrice = allProductPrice()

                "
              />
            </div>
          </div>
        </div>
        <the-icon-button
          type="danger"
          class="absolute right-10px top-10px"
          icon="ri-delete-bin-line"
          @click="deleteCartProduct(product.id)"
        />
      </div>
      <div
        class="w-full flex flex-col items-center justify-center gap-10 rounded-8px bg-primary px-30px py-14px text-white"
      >
        <div class="text-7 font-800">
          Jami summa: {{ numeralFormat(totalPrice) }} so'm
        </div>
        <form
          class="flex flex-col items-center justify-center gap-10"
          @submit="(e) => createNewOrder(e)"
        >
          <input
            v-model="name"
            required
            class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-200 focus:ring-primary"
            type="text"
            placeholder="Ismingiz"
          >
          <input
            v-model="phone"
            v-mask="'+(998) ## ### ## ##'"
            required
            class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-200 focus:ring-primary"
            type="text"
            placeholder="Telefon raqamingiz"
          >
          <the-button
            type="submit"
            :disabled="cartProducts.cartProducts.length <= 0"
            color="success"
            class="w-full"
          >
            Buyurtma berish
          </the-button>
        </form>
        <router-link to="../admin/dashboard">
          Admin sifatida buyurtmalarni ko'rish uchun bosing
        </router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
</style>
