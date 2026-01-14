<script setup lang="ts">
type Author = {
  name: string
  to?: string
  target?: string
}

defineProps<{
  icon?: string
  quote: string
  author?: Author
  card?: boolean
}>()
</script>

<template>
  <component :is="card ? 'UCard' : 'div'" class="max-w-3xl mx-auto">
    <div class="flex items-start gap-3">
      <UIcon v-if="icon" :name="icon" class="h-6 w-6 text-gray-400" />
      <div class="space-y-2">
        <blockquote class="text-base text-gray-700 dark:text-gray-200">
          “{{ quote }}”
        </blockquote>
        <div v-if="author?.name" class="text-sm text-gray-500 dark:text-gray-400">
          <a
            v-if="author.to"
            :href="author.to"
            :target="author.target"
            :rel="author.target === '_blank' ? 'noreferrer' : undefined"
            class="hover:underline"
          >
            {{ author.name }}
          </a>
          <span v-else>{{ author.name }}</span>
        </div>
      </div>
    </div>
  </component>
</template>

