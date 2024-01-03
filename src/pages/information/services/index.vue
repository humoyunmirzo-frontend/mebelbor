<script setup lang="ts">
const serviceCards: object[] = [
  {
    image: 'https://images.pexels.com/photos/5974325/pexels-photo-5974325.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Xodimlarimiz tomonidan servis hizmatlari ',
    description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat corporis eius, sit ut explicabo!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat corporis eius, sit ut explicabo!',
  },
  {
    image: 'https://images.pexels.com/photos/5089178/pexels-photo-5089178.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Xodimlarimiz shaharlararo servis hizmatlarini bajarishmoqda',
    description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat corporis eius, sit ut explicabo!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat corporis eius, sit ut explicabo!',
  },
  {
    image: 'https://images.pexels.com/photos/5089167/pexels-photo-5089167.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Mijozlar minnatdorchiligi bildirilmoqda',
    description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat corporis eius, sit ut explicabo!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat corporis eius, sit ut explicabo!',
  },
]
</script>

<template>
  <div class="mt-108px flex flex-col items-start justify-center gap-6 px-74px py-36px">
    <div class="text-10 text-#3A3A3A">
      Servis xizmatlarimizdan lavhalar
    </div>
    <div class="flex flex-col gap-5">
      <div v-for="card in serviceCards" :key="card.title" class="h-200px w-full flex items-start gap-10 overflow-hidden border border-gray-200 rounded-8px duration-300 hover:translate-y-[-15px] hover:shadow-lg">
        <img :src="card.image" class="w-300px" alt="">
        <div class="h-full flex flex-col justify-between gap-3 py-5 pr-5">
          <div class="flex flex-col gap-3">
            <div class="text-5 font-700">
              {{ card.title }}
            </div>
            <div class="text-#616161 font-700">
              {{ card.description }}
            </div>
          </div>
          <the-button class="flex self-end justify-end" color="secondary" append-icon="ri-arrow-right-line">
            Servis xizmatidan foydalanish
          </the-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
