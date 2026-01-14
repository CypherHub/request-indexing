<template>
  <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
    <UContainer class="py-10 space-y-10">
      <div v-if="$slots.top">
        <slot name="top" />
      </div>

      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div class="flex flex-col gap-2">
          <slot name="left" />
        </div>
        <div class="flex items-center gap-2">
          <slot name="right" />
        </div>
      </div>
    </UContainer>
  </footer>
</template>

