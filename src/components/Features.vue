<script setup lang="ts">
import { Icon } from '@iconify/vue'

const features: object[] = [
  {
    title: 'Yuqori sifat',
    description: 'yuqori sifatli materiallardan tayyorlangan',
    icon: 'ri-trophy-line',
  },
  {
    title: 'Kafolatli himoya',
    description: '2 yildan ziyod',
    icon: 'ri-verified-badge-line',
  },
  {
    title: 'Yetkazib berish bepul',
    description: '$150 dan ortiq buyurtmalar uchun',
    icon: 'ri-truck-line',

  },
  {
    title: '24 / 7 Qo\'llab quvvatlash',
    description: 'Maxsus yordam',
    icon: 'ri-customer-service-line',

  },
]
</script>

<template>
  <section class="grid grid-cols-4 w-full items-start justify-between gap-40px">
    <div v-for="item in features" :key="item.title" class="flex items-center gap-4">
      <Icon class="text-10" :icon="item.icon" />
      <div class="flex flex-col items-start gap-1">
        <div class="text-4.5 font-600">
          {{ item.title }}
        </div>
        <div class="text-#898989 font-500">
          {{ item.description }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
