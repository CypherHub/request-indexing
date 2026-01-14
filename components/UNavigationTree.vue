<script setup lang="ts">
type Link = {
  label: string
  to?: string
  target?: string
  icon?: string
  disabled?: boolean
  click?: () => void | Promise<void>
  children?: Link[]
}

defineProps<{
  title?: string
  links: Link[]
  defaultOpen?: boolean
}>()

function isExternal(to?: string) {
  return !!to && /^(https?:)?\/\//.test(to)
}
</script>

<template>
  <nav class="space-y-3">
    <div v-if="title" class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
      {{ title }}
    </div>

    <ul class="space-y-1">
      <li v-for="(link, idx) in links" :key="idx">
        <div v-if="link.children?.length" class="space-y-1">
          <div class="text-sm font-medium text-gray-700 dark:text-gray-200">
            {{ link.label }}
          </div>
          <ul class="ml-2 border-l border-gray-200 dark:border-gray-800 pl-2 space-y-1">
            <li v-for="(child, cIdx) in link.children" :key="cIdx">
              <component
                :is="child.click ? 'button' : (child.to ? 'a' : 'div')"
                class="w-full text-left flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 disabled:opacity-50"
                :disabled="child.disabled"
                :href="child.click || !child.to ? undefined : child.to"
                :target="child.click || !child.to ? undefined : (child.target || (isExternal(child.to) ? '_blank' : undefined))"
                :rel="child.click || !child.to ? undefined : (isExternal(child.to) ? 'noreferrer' : undefined)"
                @click="child.click"
              >
                <UIcon v-if="child.icon" :name="child.icon" class="h-4 w-4 text-gray-400" />
                <span class="truncate">{{ child.label }}</span>
              </component>
            </li>
          </ul>
        </div>

        <component
          v-else
          :is="link.click ? 'button' : (link.to ? 'a' : 'div')"
          class="w-full text-left flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 disabled:opacity-50"
          :disabled="link.disabled"
          :href="link.click || !link.to ? undefined : link.to"
          :target="link.click || !link.to ? undefined : (link.target || (isExternal(link.to) ? '_blank' : undefined))"
          :rel="link.click || !link.to ? undefined : (isExternal(link.to) ? 'noreferrer' : undefined)"
          @click="link.click"
        >
          <UIcon v-if="link.icon" :name="link.icon" class="h-4 w-4 text-gray-400" />
          <span class="truncate">{{ link.label }}</span>
        </component>
      </li>
    </ul>
  </nav>
</template>

