<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ComponentSizes, ComponentTypes } from '~/types/index'

interface IProp {
  color?: ComponentTypes
  size?: ComponentSizes
  prependIcon?: string
  appendIcon?: string
  disabled?: boolean
  loading?: boolean
}
const props = withDefaults(defineProps<IProp>(), {
  color: 'primary',
  size: 'md',
  prependIcon: '',
  appendIcon: '',
  disabled: false,
  loading: false,
})
</script>

<template>
  <button :class="`text-center color-${props.color} size-${props.size} ${props.disabled && 'disabledClass'}`" :disabled="props.disabled || props.loading">
    <div class="flex items-center justify-center gap-1">
      <Icon v-if="props.prependIcon" :icon="props.prependIcon" />
      <Icon v-if="props.loading" icon="ri-loader-2-line" />
      <slot />
      <Icon v-if="props.appendIcon" :icon="props.appendIcon" />
    </div>
  </button>
</template>

<style scoped lang="scss">
.color-primary {
  @apply text-white bg-primary hover:opacity-95;
}
.color-secondary {
  @apply text-white bg-secondary hover:opacity-95;
}
.color-success {
  @apply text-white bg-success hover:opacity-95;
}
.color-danger {
  @apply text-white bg-danger hover:opacity-95;
}
.size-sm {
  @apply font-400 px-2 py-1 rounded-4px;
}
.size-md {
  @apply font-500 px-2.5 py-1.5 rounded-6px;
}
.size-lg {
  @apply font-600 px-3 py-2 rounded-8px;
}
.disabledClass {
  @apply opacity-75;
}
</style>
