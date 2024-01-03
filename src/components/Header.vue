<script setup lang="ts">
const headerLinks: object[] = [
  {
    title: 'Mahsulotlar',
    path: '../information/products',
  },
  {
    title: 'Mebel tanlash',
    path: '../information/select-furniture',
  },
  {
    title: 'Servislar',
    path: '../information/services',
  },
  {
    title: 'Biz haqimizda',
    path: '../information/about-us',
  },
  {
    title: 'Bog\'lanish',
    path: '../information/contact',
  },
]
</script>

<template>
  <header class="fixed left-0 top-0 z-10 w-full flex justify-between bg-primary px-74px py-36px text-white shadow-sm">
    <router-link to="/">
      <div class="text-6 font-700">
        Funiro.
      </div>
    </router-link>
    <div class="flex items-center gap-5">
      <router-link v-for="link in headerLinks" :key="link" :to="link.path">
        <div class="font-500 duration-300 hover:underline">
          {{ link.title }}
        </div>
      </router-link>
    </div>
    <div class="flex items-center gap-3">
      <router-link to="../information/cart">
        <the-icon-button icon="ri-shopping-cart-line" />
      </router-link>
      |
      <router-link to="../auth/login">
        <the-button>Kirish</the-button>
      </router-link>
    </div>
  </header>
</template>
