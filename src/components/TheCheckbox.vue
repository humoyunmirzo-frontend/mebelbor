<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IProp {
  modelValue: string[] | object[] | boolean
  value?: string | object
  indeterminate?: boolean
  uniqueKey?: string
  label?: string
  color?: string
  size?: string
}
const props = withDefaults(defineProps<IProp>(), {
  uniqueKey: 'id',
  indeterminate: false,
  label: 'Option 1',
  color: 'primary',
  size: 'md',
})
const emit = defineEmits(['update:model-value'])
const isChecked = computed(() => {
  if (typeof props.modelValue === 'boolean')
    return props.modelValue
  if (typeof props.value === 'object')
    return props.modelValue.findIndex((v: any) => v[props.uniqueKey] === props.value[props.uniqueKey]) > -1
  else
    return props.modelValue.includes(props.value)
})

function check() {
  if (typeof props.modelValue === 'boolean') {
    emit('update:model-value', !props.modelValue)
    return
  }
  const item = props.value
  const values = [...props.modelValue]
  if (typeof props.value === 'object') {
    const itemIndex = values.findIndex((v: any) => v[props.uniqueKey] === item[props.uniqueKey])
    if (itemIndex === -1)
      values.push(item)
    else
      values.splice(itemIndex, 1)
  }
  else {
    if (!values.includes(item)) {
      values.push(item)
    }
    else {
      const index = values.indexOf(item)
      values.splice(index, 1)
    }
  }
  emit('update:model-value', values)
}
</script>

<template>
  <div
    :class="`checkbox-wrapper color-${props.color} size-${props.size}`"
    @click="check"
  >
    <Icon
      :icon="props.indeterminate ? 'ri-checkbox-indeterminate-line' : isChecked ? 'ri-checkbox-line' : 'ri-checkbox-blank-line'"
    />
    <span> {{ props.label }} </span>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-wrapper {
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
  svg {
    @apply text-blue-500 hover:drop-shadow-lg hover:drop-shadow-[0_35px_35px_rgb(10,45,201)];
  }
}
.color-secondary {
  svg {
    @apply text-gray-500 hover:drop-shadow-lg hover:drop-shadow-[0_35px_35px_rgb(10,45,201)];
  }
}
.color-success {
  svg {
    @apply text-green-500 hover:drop-shadow-lg hover:drop-shadow-[0_35px_35px_rgb(10,45,201)];
  }
}
</style>
