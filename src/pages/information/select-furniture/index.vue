<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartProductsStore } from '~/stores/cart'
import { DSP, DVP, MDF } from '~/data/prices'

const cartProductsStore = useCartProductsStore()
const router = useRouter()
const products: object[] = [
  {
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Oshxona mebeli',
    description: 'Har xil turdagi oshxona mebellari',
  },
  {
    image: 'https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Yotoqxona mebeli',
    description: 'Har xil turdagi yotoqxona mebellari',
  },
]
const showModal = ref<boolean>(false)
const productName = ref<string>('')
const productMaterialType = ref<string>('MDF')
const productMaterialTypes = ['MDF', 'DVP', 'DSP']
const productLength = ref<number>(1.5)
const productLengthTypes = [1.5, 2, 3, 4, 5, 6]
const productColor = ref<string>('Jigarrang')
const productColorTypes = ['Oq', 'Qora', 'Jigarrang']
const productPrice = ref<any>(0)
function calculatePrice() {
  switch (productMaterialType.value) {
    case 'MDF':
      productPrice.value = MDF * productLength.value
      break
    case 'DVP':
      productPrice.value = DVP * productLength.value
      break
    case 'DSP':
      productPrice.value = DSP * productLength.value
      break
    default :{
      productPrice.value = MDF * productLength.value
    }
  }
}
function makeProduct(name: string) {
  productName.value = name
  showModal.value = true
}
function addToCart() {
  calculatePrice()
  cartProductsStore.createCartProduct({
    id: generateUniqueString(),
    name: productName.value,
    image: 'https://picsum.photos/300',
    materialType: productMaterialType.value,
    color: productColor.value,
    length: productLength.value,
    quantity: 1,
    price: productPrice.value,
  })
  router.push('../information/cart')
}
</script>

<template>
  <Header />

  <the-modal v-model="showModal">
    <div class="flex flex-col items-start gap-4">
      <div class="text-4 font-600">
        Material turini tanlang
      </div>
      <div class="flex items-center gap-2">
        <the-radio v-for="item in productMaterialTypes" :key="item" v-model="productMaterialType" :value="item">
          <template #default="{ checked }">
            <the-button :color="checked ? 'primary' : 'success'">
              {{ item }}
            </the-button>
          </template>
        </the-radio>
      </div>
      <div class="text-4 font-600">
        Mahsulot uzunligini tanlang
      </div>
      <div class="flex items-center gap-2">
        <the-radio v-for="item in productLengthTypes" :key="item" v-model="productLength" :value="item">
          <template #default="{ checked }">
            <the-button :color="checked ? 'primary' : 'success'">
              {{ item }} m
            </the-button>
          </template>
        </the-radio>
      </div>
      <div class="text-4 font-600">
        Mahsulot rangini tanlang
      </div>
      <div class="flex items-center gap-2">
        <the-radio v-for="item in productColorTypes" :key="item" v-model="productColor" :value="item">
          <template #default="{ checked }">
            <the-button :color="checked ? 'primary' : 'success'">
              {{ item }}
            </the-button>
          </template>
        </the-radio>
      </div>
      <div class="text-5 font-600">
        Siz tanlagan mahsulot xususiyatlari:
        <ul>
          <li>Mahsulot nomi: {{ productName }}</li>
          <li>Material turi: {{ productMaterialType }}</li>
          <li>Mahsulot uzunligi: {{ productLength }} m</li>
          <li> Mahsulot rangi: {{ productColor }}</li>
        </ul>
      </div>
      <the-button @click="addToCart">
        Buyurtma berish
      </the-button>
    </div>
  </the-modal>
  <div class="mt-108px flex flex-col items-start gap-10 px-74px py-36px">
    <div class="text-7 font-700">
      O'z mahsulotingizni quring
    </div>
    <div class="grid grid-cols-4 items-start gap-5">
      <div v-for="item in products" :key="item.title" class="flex flex-col items-start gap-3 overflow-x-hidden rounded-8px pb-3 duration-300 hover:translate-y-[-15px] hover:shadow-lg">
        <img :src="item.image" class="h-200px w-full" alt="">
        <div class="flex flex-col items-start gap-3 px-2">
          <div class="text-5 font-600">
            {{ item.title }}
          </div>
          <div class="text-#616161 font-500">
            {{ item.description }}
          </div>
          <the-button @click="makeProduct(item.title)">
            Tanlash
          </the-button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">

</style>
