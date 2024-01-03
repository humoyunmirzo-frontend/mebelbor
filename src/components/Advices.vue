<script setup lang="ts">
const adviceCards: object[] = [
  {
    image: 'https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Yashash uchun qanday xona kerak?',
    date: '12-yanvar, 2023',
  },
  {
    image: 'https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Ishlaydigan toza ko\'rinish uchun yechim bo\'sh joy',
    date: '15-fevral, 2023',
  },
  {
    image: 'https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Oshpazlik faoliyatingizni qiling yaxshi sozlash bilan yanada qiziqarli',
    date: '8-avgust, 2023',
  },
]
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <div class="text-10 text-#3A3A3A">
      Siz uchun maslahatlar
    </div>
    <div class="grid grid-cols-3 w-full items-start gap-5">
      <div v-for="advice in adviceCards" :key="advice.title" class="rounded-8px pb-3 duration-300 hover:translate-y-[-15px] hover:shadow-lg">
        <div class="w-full flex flex-col items-start gap-3">
          <img :src="advice.image" class="h-200px w-full object-cover" alt="">
          <div class="flex flex-col items-start gap-1 px-4">
            <div class="text-6 text-#3a3a3a">
              {{ advice.title }}
            </div>
            <div class="text-3.5 text-#898989">
              {{ advice.date }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
