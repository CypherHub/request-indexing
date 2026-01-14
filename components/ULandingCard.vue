<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  icon?: string
  color?: string
}>()
</script>

<template>
  <UCard class="h-full">
    <div class="flex items-start gap-3">
      <UIcon v-if="icon" :name="icon" class="h-6 w-6 text-gray-400" />
      <div class="min-w-0">
        <div v-if="title" class="font-medium text-gray-900 dark:text-gray-100">
          {{ title }}
        </div>
        <div v-if="description" class="mt-1 text-sm text-gray-600 dark:text-gray-300">
          {{ description }}
        </div>
      </div>
    </div>
    <slot />
  </UCard>
</template>

