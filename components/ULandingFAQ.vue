<script setup lang="ts">
defineProps<{
  items: Array<{ label: string, content: string }>
  multiple?: boolean
  defaultOpen?: boolean
}>()
</script>

<template>
  <div class="space-y-3">
    <details
      v-for="(item, idx) in items"
      :key="idx"
      class="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4"
      :open="defaultOpen"
    >
      <summary class="cursor-pointer select-none font-medium text-gray-900 dark:text-gray-100">
        {{ item.label }}
      </summary>
      <div class="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {{ item.content }}
      </div>
    </details>
  </div>
</template>

