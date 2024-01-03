<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ComponentSizes, ComponentTypes } from '~/types/index'

interface IProp {
  type?: ComponentTypes
  size?: ComponentSizes
  icon?: string
  disabled?: boolean
}
const props = withDefaults(defineProps<IProp>(), {
  type: 'primary',
  size: 'md',
  icon: 'ri-remixicon-line',
  disabled: false,
})
</script>

<template>
  <button class="rounded-full border-none" :class="`type-${props.type} size-${props.size} ${props.disabled && 'disabledClass'}`" :disabled="props.disabled">
    <Icon :icon="props.icon" />
  </button>
</template>

<style scoped lang="scss">
.type-primary {
  @apply text-white bg-primary hover:opacity-95;
}
.type-secondary {
  @apply text-white bg-secondary hover:opacity-95;
}
.type-success {
  @apply text-white bg-success hover:opacity-95;
}
.type-danger {
  @apply text-white bg-danger hover:opacity-95;
}
.size-sm {
  @apply font-400 px-2 py-2;
}
.size-md {
  @apply font-500 px-2.5 py-2.5;
}
.size-lg {
  @apply font-600 px-3 py-3;
}
.disabledClass {
  @apply opacity-75;
}
</style>
