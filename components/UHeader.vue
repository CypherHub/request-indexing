<script setup lang="ts">
type Link = {
  label: string
  to: string
}

defineProps<{
  links?: Link[]
}>()

const isOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
    <UContainer class="h-16 flex items-center justify-between gap-4">
      <div class="flex items-center gap-4 min-w-0">
        <slot name="logo" />

        <nav v-if="links?.length" class="hidden md:flex items-center gap-1">
          <UButton
            v-for="(link, idx) in links"
            :key="idx"
            :to="link.to"
            color="gray"
            variant="link"
            size="sm"
          >
            {{ link.label }}
          </UButton>
        </nav>
      </div>

      <div class="flex items-center gap-2">
        <div class="hidden md:block">
          <slot name="right" />
        </div>

        <UButton
          class="md:hidden"
          color="gray"
          variant="ghost"
          icon="i-heroicons-bars-3"
          aria-label="Open menu"
          @click="isOpen = !isOpen"
        />
      </div>
    </UContainer>

    <div v-if="isOpen" class="md:hidden border-t border-gray-200 dark:border-gray-800">
      <UContainer class="py-4 space-y-3">
        <slot name="right" />
        <slot name="panel" />
      </UContainer>
    </div>
  </header>
</template>

