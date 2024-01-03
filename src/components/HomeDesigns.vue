<script setup lang="ts">
import { register } from 'swiper/element/bundle'
import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

register()
</script>

<template>
  <div class="grid grid-cols-3 h-100vh items-center justify-between">
    <div class="flex flex-col items-start gap-3">
      <div class="text-10 font-700">
        50+ chiroyli xonalar
        dizayni
      </div>
      <div class="mb-3 text-#616161 font-500">
        Bizning dizaynerimiz sizni ilhomlantiradigan juda ko'p chiroyli xona prototiplarini yaratdi
      </div>
      <the-button append-icon="ri-arrow-right-line" color="secondary" size="lg">
        Ko'proq ko'rish
      </the-button>
    </div>
    <div class="col-span-2">
      <swiper-container
        effect="cards"
        loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :grab-cursor="true"
        :centered-slides="true"
        :slides-per-view="3"
        :coverflow-effect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        class="mySwiper"
      >
        <swiper-slide>
          <img class="h-250px w-300px object-cover" src="https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="h-250px w-300px object-cover" src="https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="h-250px w-300px object-cover" src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="h-250px w-300px object-cover" src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-pagination {
  .swiper-pagination-bullet .swiper-pagination-bullet-active {
    background-color: #6a2b2b !important;
  }
}
</style>
