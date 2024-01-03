<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ComponentSizes, ComponentTypes } from '~/types/index'

interface IProp {
  modelValue: any
  value: any
  label?: string
  uniqueKey?: string
  checked?: boolean
  disabled?: boolean
  color?: ComponentTypes
  size?: ComponentSizes
}
const props = withDefaults(defineProps<IProp>(), {
  uniqueKey: 'id',
  checked: false,
  disabled: false,
  color: 'primary',
  size: 'md',
})
const emit = defineEmits(['update:model-value'])
const isChecked = computed(() => {
  if (typeof props.value === 'object')
    return props.modelValue[props.uniqueKey] === props.value[props.uniqueKey]
  else
    return props.modelValue === props.value
})

function onClick() {
  emit('update:model-value', props.value)
}
</script>

<template>
  <div @click="onClick">
    <slot :checked="isChecked" :data="props.modelValue">
      <div class="flex items-center gap-1">
        <Icon :icon="isChecked ? 'ri-circle-fill' : 'ri-circle-line'" /> <span>{{ props.label }}</span>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.radio-wrapper {
  @apply flex items-center gap-1;
  & > span {
    @apply select-none;
  }
}

.size-sm {
  svg {
    @apply w-3 h-3;
  }
  & > span {
    @apply text-sm;
  }
}
.size-md {
  svg {
    @apply w-4 h-4;
  }
  & > span {
    @apply text-md;
  }
}
.size-lg {
  svg {
    @apply w-5 h-5;
  }
  & > span {
    @apply text-lg;
  }
}
.color-primary {
  @apply border-1px border-blue-500 duration-300 scale-[1.1];
}
.color-secondary {
  @apply border-1px border-gray-500 duration-300 scale-[1.1];
}
.color-success {
  @apply border-1px border-green-500 duration-300 scale-[1.1];
}
</style>
