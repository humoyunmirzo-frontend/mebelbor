<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IProp {
  modelValue: boolean
  withActions?: boolean
  modalWidth?: string
}
const props = withDefaults(defineProps<IProp>(), {
  withActions: false,
  modalWidth: '300px',
})
const emit = defineEmits(['update:model-value'])
function closeModal() {
  emit('update:model-value', false)
}
</script>

<template>
  <div v-if="props.modelValue" class="fixed bottom-0 left-0 right-0 top-0 z-1000 grid h-100vh w-full place-items-center bg-gray/40">
    <div
      class="relative h-80vh w-75% flex flex-col items-start gap-4 rounded-8px bg-white px-4 py-2"
    >
      <div class="h-10vh w-full flex justify-end border-b border-b-primary p-2">
        <Icon icon="ri-close-line" class="h-6 w-6 cursor-pointer rounded-full hover:bg-gray-200" @click="closeModal" />
      </div>
      <div class="h-70vh w-full overflow-y-auto">
        <slot />
      </div>
      <div class="w-full">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
