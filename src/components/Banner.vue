<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section
    class="banner grid h-[calc(100vh-108px)] w-full flex flex-col justify-center gap-4 bg-no-repeat pl-60px"
  >
    <div class="card w-494px flex flex-col gap-4 rounded-12px px-2">
      <div class="text-28px font-700">
        Yuqori sifatli  mebel faqat siz uchun
      </div>
      <div class="text-20px text-#898989 font-500">
        Bizning mebelimiz sizning orzuingizdagi uyga mos keladigan tanlangan va
        eng sifatli materiallardan tayyorlangan
      </div>
      <the-button color="secondary" @click="router.push('../information/select-furniture')">
        Mebel tanlash
      </the-button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.banner {
  background-image: url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600');
  background-size: 100%;
  object-fit: cover;
  background-position: center;
}
.card {
  backdrop-filter: blur(15.5px);
}
</style>
