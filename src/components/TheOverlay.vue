<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IProp {
  modelValue: boolean
}
const props = defineProps<IProp>()
</script>

<template>
  <div v-if="props.modelValue" class="fixed bottom-0 left-0 right-0 top-0 z-10000 grid h-100vh w-full place-items-center opacity-75">
    <Icon icon="ri-loader-2-line" class="animate-spin text-10 text-primary" />
  </div>
</template>
