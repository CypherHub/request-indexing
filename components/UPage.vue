<script setup lang="ts">
type Props = {
  /**
   * 1-col by default, becomes 3-col when side slots exist.
   */
  ui?: {
    wrapper?: string | string[]
  }
}

defineProps<Props>()
</script>

<template>
  <div :class="['grid grid-cols-1 gap-8 lg:grid-cols-12', ui?.wrapper]">
    <aside v-if="$slots.left" class="lg:col-span-3">
      <slot name="left" />
    </aside>

    <section :class="[$slots.left && $slots.right ? 'lg:col-span-6' : $slots.left || $slots.right ? 'lg:col-span-9' : 'lg:col-span-12']">
      <slot />
    </section>

    <aside v-if="$slots.right" class="lg:col-span-3">
      <slot name="right" />
    </aside>
  </div>
</template>

