<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div class="py-10">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between gap-4">
          <div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Error
            </div>
            <div class="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {{ error.statusCode || 500 }} — {{ error.statusMessage || 'Something went wrong' }}
            </div>
          </div>
          <UButton to="/" color="gray" variant="soft">
            Go home
          </UButton>
        </div>
      </template>

      <div class="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
        {{ error.message }}
      </div>
    </UCard>
  </div>
</template>

