<script setup lang="ts">
const name = ref<string>('')
const phone = ref<string>('')
const message = ref<string>('')
</script>

<template>
  <div class="mt-108px flex flex-col items-start justify-center gap-6 px-74px py-36px">
    <div class="text-10 text-#3A3A3A">
      Biz bilan bog'lanish
    </div>
    <div class="grid grid-cols-2 items-start gap-10 overflow-x-hidden border border-gray-200 rounded-8px">
      <img src="https://images.pexels.com/photos/859264/pexels-photo-859264.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      <div class="h-full flex flex-col justify-between gap-3 p-5">
        <form class="flex flex-col gap-3">
          <input v-model="name" required class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-200 focus:ring-primary" type="text" placeholder="Ismingiz">
          <input v-model="phone" v-mask="'+(998) ## ### ## ##'" required class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-200 focus:ring-primary" type="text" placeholder="Telefon raqamingiz">
          <textarea id="" v-model="message" placeholder="Xabar matnini kriting" required class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-200 focus:ring-primary" name="" cols="30" rows="4" />
          <the-button>Yuborish</the-button>
        </form>
        <div class="flex items-center self-end gap-3">
          <a href="">
            <the-icon-button icon="ri-telegram-line" />
          </a>
          <a href="">
            <the-icon-button icon="ri-youtube-line" />
          </a>
          <a href="">
            <the-icon-button icon="ri-instagram-line" />
          </a>
          <a href="">
            <the-icon-button icon="ri-facebook-line" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
