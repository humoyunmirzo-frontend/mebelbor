<script setup lang="ts">
</script>

<template>
  <div class="grid h-100vh place-items-center">
    <div class="flex flex-col items-center gap-3">
      <div class="xs:text-8 text-primary md:text-14 md:text-18 sm:text-10">
        OOPS...
      </div>
      <div class="xs:text-12 text-primary md:text-18 md:text-22 sm:text-16">
        404
      </div>
      <router-link to="/">
        <the-button prepend-icon="ri-arrow-left-line" class="text-5 text-primary">
          Bosh sahifaga qaytish
        </the-button>
      </router-link>
    </div>
  </div>
</template>
