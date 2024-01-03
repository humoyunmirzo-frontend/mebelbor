<script setup lang="ts">
interface IProp {
  rows: any
  columns: any
  numerable?: boolean
}
const props = withDefaults(defineProps<IProp>(), {
  numerable: false,
})

function getValueFromObject(item: any, keys: string | any) {
  const arrayKeys = keys.split('.')
  let obj = item
  try {
    arrayKeys.forEach((a: any) => {
      obj = obj[a]
    })
    return obj
  }
  catch (error) {
    return ''
  }
}
</script>

<template>
  <table class="w-full overflow-x-scroll text-left text-sm text-gray-500">
    <thead class="bg-gray-100 text-xs text-gray-700 uppercase">
      <tr>
        <th v-if="props.numerable" class="px-6 py-3">
          &numero;
        </th>
        <th v-for="(item, index) in props.columns" :key="index" class="px-6 py-3">
          {{ item.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in props.rows" :key="rowIndex" class="border-b bg-white">
        <td v-if="props.numerable" class="px-6 py-4">
          {{ rowIndex + 1 }}
        </td>
        <td v-for="(col, colIndex) in props.columns" :key="colIndex" class="px-6 py-4">
          <slot :name="col.value" :data="row">
            {{ getValueFromObject(row, col.value) }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
</style>
