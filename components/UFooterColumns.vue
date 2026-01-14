<script setup lang="ts">
type FooterLink = {
  label: string
  to: string
  target?: string
}

type FooterColumn = {
  label: string
  children: FooterLink[]
}

defineProps<{
  links: FooterColumn[]
}>()
</script>

<template>
  <div class="grid gap-8 lg:grid-cols-12">
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-8">
      <div v-for="(col, idx) in links" :key="idx" class="space-y-3">
        <div class="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {{ col.label }}
        </div>
        <ul class="space-y-2">
          <li v-for="(link, lIdx) in col.children" :key="lIdx">
            <a
              :href="link.to"
              :target="link.target"
              :rel="link.target === '_blank' ? 'noreferrer' : undefined"
              class="text-sm text-gray-600 dark:text-gray-300 hover:underline"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="lg:col-span-4">
      <slot name="right" />
    </div>
  </div>
</template>

