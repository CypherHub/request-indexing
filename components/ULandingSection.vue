<script setup lang="ts">
type Feature = {
  name: string
  description?: string
  icon?: string
}

defineProps<{
  id?: string
  title?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  features?: Feature[]
  ui?: {
    wrapper?: string | string[]
    container?: string | string[]
  }
}>()
</script>

<template>
  <section :id="id" :class="['py-16 sm:py-20', ui?.wrapper]">
    <UContainer :class="ui?.container">
      <div class="space-y-6">
        <slot name="top" />

        <div v-if="title || description" :class="[
          'max-w-3xl',
          align === 'center' ? 'mx-auto text-center' : align === 'right' ? 'ml-auto text-right' : 'text-left',
        ]">
          <h2 v-if="title" class="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {{ title }}
          </h2>
          <p v-if="description" class="mt-2 text-base text-gray-600 dark:text-gray-300">
            {{ description }}
          </p>
        </div>

        <div v-if="features?.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="(feature, idx) in features" :key="idx" class="h-full">
            <div class="flex items-start gap-3">
              <UIcon v-if="feature.icon" :name="feature.icon" class="h-6 w-6 text-gray-400" />
              <div>
                <div class="font-medium text-gray-900 dark:text-gray-100">
                  {{ feature.name }}
                </div>
                <div v-if="feature.description" class="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {{ feature.description }}
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <slot />
        <slot name="bottom" />
      </div>
    </UContainer>
  </section>
</template>

