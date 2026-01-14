<script setup lang="ts">
type Link = {
  label: string
  to: string
  target?: string
  icon?: string
}

defineProps<{
  title?: string
  links: Link[]
}>()
</script>

<template>
  <div>
    <div v-if="title" class="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
      {{ title }}
    </div>
    <div class="space-y-1">
      <a
        v-for="(link, idx) in links"
        :key="idx"
        :href="link.to"
        :target="link.target"
        :rel="link.target === '_blank' ? 'noreferrer' : undefined"
        class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
      >
        <UIcon v-if="link.icon" :name="link.icon" class="h-4 w-4 text-gray-400" />
        <span class="truncate">{{ link.label }}</span>
      </a>
    </div>
  </div>
</template>

