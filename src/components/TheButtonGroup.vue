<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ComponentSizes, ComponentTypes } from '~/types/index'

interface IProp {
  modelValue: number
  type?: ComponentTypes
  size?: ComponentSizes
  disabled?: boolean
}
const props = withDefaults(defineProps<IProp>(), {
  type: 'primary',
  size: 'md',
  disabled: false,
})
const emit = defineEmits(['update:model-value'])
function countDown() {
  if (props.modelValue === 1)
    return
  emit('update:model-value', props.modelValue - 1)
}
function countUp() {
  emit('update:model-value', props.modelValue + 1)
}
</script>

<template>
  <div :class="`flex  rounded-8px items-center gap-1 type-${props.type}  ${props.disabled && 'disabledClass'}`">
    <button :class="`rounded-s-8px type-${props.type} size-${props.size}`" :disabled="props.disabled || props.loading" @click="countDown">
      <Icon icon="ri-subtract-line" />
    </button>
    <div class="py-1 text-white">
      |
    </div>
    <button :class="`rounded-e-8px type-${props.type} size-${props.size}`" :disabled="props.disabled || props.loading" @click="countUp">
      <Icon icon="ri-add-circle-line" />
    </button>
    <div class="py-1 text-white">
      |
    </div>
    <div :class="`text-white   size-${props.size}`">
      {{ props.modelValue }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.type-primary {
  @apply text-white hover:opacity-95 bg-primary;
}
.type-secondary {
  @apply text-white hover:opacity-95 bg-secondary;
}
.type-success {
  @apply text-white hover:opacity-95 bg-success;
}
.type-danger {
  @apply text-white hover:opacity-95 bg-danger;
}
.size-sm {
  @apply font-400 px-4;
}
.size-md {
  @apply font-500 px-5;
}
.size-lg {
  @apply font-600 px-6;
}
.disabledClass {
  @apply opacity-75;
}
</style>
