<script setup lang="ts">
type Link = {
  label: string
  to: string
  target?: string
  icon?: string
}

defineProps<{
  title: string
  description?: string
  headline?: string
  icon?: string
  links?: Link[]
}>()
</script>

<template>
  <div class="mb-6">
    <div class="flex items-start justify-between gap-6">
      <div class="min-w-0">
        <div v-if="headline" class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {{ headline }}
        </div>

        <div class="mt-1 flex items-center gap-2">
          <UIcon v-if="icon" :name="icon" class="h-6 w-6 text-gray-400" />
          <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 truncate">
            {{ title }}
          </h1>
        </div>

        <p v-if="description" class="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {{ description }}
        </p>
      </div>

      <div v-if="links?.length" class="hidden sm:flex items-center gap-2 shrink-0">
        <UButton
          v-for="(link, idx) in links"
          :key="idx"
          :to="link.to"
          :target="link.target"
          color="gray"
          variant="soft"
          size="sm"
          :icon="link.icon"
        >
          {{ link.label }}
        </UButton>
      </div>
    </div>
  </div>
</template>

