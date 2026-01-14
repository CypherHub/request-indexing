<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  price?: string
  cycle?: string
  button?: {
    label: string
    to?: string
    color?: string
    variant?: string
  }
}>()
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-start justify-between gap-4">
        <div class="min-w-0">
          <div class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {{ title }}
          </div>
          <div v-if="description" class="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {{ description }}
          </div>
        </div>
        <div v-if="price" class="text-right shrink-0">
          <div class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {{ price }}
          </div>
          <div v-if="cycle" class="text-xs text-gray-500 dark:text-gray-400">
            / {{ cycle }}
          </div>
        </div>
      </div>
    </template>

    <div class="space-y-4">
      <slot />

      <UButton
        v-if="button?.label"
        :to="button.to"
        :color="(button.color as any) || 'green'"
        :variant="(button.variant as any) || 'solid'"
        class="w-full justify-center"
      >
        {{ button.label }}
      </UButton>
    </div>

    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </UCard>
</template>

