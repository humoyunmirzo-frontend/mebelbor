<script setup lang="ts">
import { Icon } from '@iconify/vue'

const footerLinks: object = [
  {
    title: 'Menyu',
    links: [
      {
        title: 'Mahsulotlar',
        path: '../information/products',
      },
      {
        title: 'Biz haqimizda',
        path: '../information/about-us',
      },
      {
        title: 'Servislar',
        path: '../information/services',
      },
    ],
  },
  {
    title: 'Hisobim',
    links: [
      {
        title: 'Mening hisobim',
        path: '/',
      },
      {
        title: 'Hisobni tekshirish',
        path: '/',
      },
      {
        title: 'Savatcha',
        path: '../information/cart',
      },
    ],
  },
  {
    title: 'Ijtimoiy tarmoqlarimiz',
    links: [
      {
        title: 'Telegram',
        path: '/',
      },
      {
        title: 'Instagram',
        path: '/',
      },
      {
        title: 'Facebook',
        path: '/',
      },
    ],
  },
]
</script>

<template>
  <footer class="grid grid-cols-4 w-full items-start justify-between gap-10 bg-primary px-74px py-38px text-white">
    <div class="flex flex-col items-start justify-center gap-6">
      <div class="text-6 font-700">
        Funiro.
      </div>
      <div class="text text-white leading-150%">
        2020 yildan beri butun dunyo bo'ylab mebel do'koni. Biz veb-saytimizda 1000 dan ortiq markali mahsulotlarni sotamiz
      </div>
      <div class="text flex items-center gap-1 text-white leading-150%">
        <Icon icon="ri-map-pin-fill" />
        O'zbekiston, Farg'ona
      </div>
      <div class="text flex items-center gap-1 text-white leading-150%">
        <Icon icon="ri-phone-fill" />
        +998 xxx xx xx
      </div>
      <router-link to="/" class="text text-white leading-150%">
        www.funiro.com
      </router-link>
    </div>
    <div v-for="link in footerLinks" :key="link.title" class="flex flex-col items-start justify-center gap-6">
      <div class="text-6 font-700">
        {{ link.title }}
      </div>
      <div v-for="childLink in link.links" :key="childLink.title" class="flex flex-col items-center justify-center gap-6">
        <router-link :to="childLink.path" class="text text-white leading-150%">
          {{ childLink.title }}
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
