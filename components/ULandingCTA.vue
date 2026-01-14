<script setup lang="ts">
type Link = {
  label: string
  to: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  variant?: string
  target?: string
}

defineProps<{
  title: string
  description?: string
  links?: Link[]
}>()
</script>

<template>
  <UCard class="py-6">
    <div class="space-y-4">
      <div class="flex flex-col gap-2">
        <div class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {{ title }}
        </div>
        <div v-if="$slots.description" class="text-gray-600 dark:text-gray-300">
          <slot name="description" />
        </div>
        <div v-else-if="description" class="text-gray-600 dark:text-gray-300">
          {{ description }}
        </div>
      </div>

      <div v-if="links?.length" class="flex flex-wrap gap-2">
        <UButton
          v-for="(link, idx) in links"
          :key="idx"
          :to="link.to"
          :target="link.target"
          :size="link.size || 'lg'"
          :color="(link.color as any) || 'green'"
          :variant="(link.variant as any) || 'solid'"
        >
          {{ link.label }}
        </UButton>
      </div>
    </div>
    <slot />
  </UCard>
</template>

