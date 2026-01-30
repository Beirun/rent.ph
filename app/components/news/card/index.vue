<script setup lang="ts">
import type { NewsItem } from '~/models/blog'

const props = withDefaults(defineProps<NewsItem>(), {})

console.log(props.content)
function stringToHTML(str: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')
  // For a single element, you often want the body content
  // Note: this handles only what's inside <body></body> implicitly
  return doc.body
}
function formatDate(s: string) {
  if (!s) throw new Error('Invalid date')
  const d = new Date(s)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}
const truncate = (string: string) => {
  return string.length > 175 ? string.substring(0, 172) + '...' : string
}
</script>
<template>
  <div
    class="grow flex flex-row xl:flex-col w-full xl:w-100 h-25 md:h-55 xl:h-auto rounded-lg shadow-lg overflow-hidden bg-white dark:bg-[#212121] border border-[#e8e8e8]/50 dark:border-[#2e2e2e]"
  >
    <div
      class="xl:w-full aspect-square bg-cover"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="h-full w-full p-2 md:p-8 flex flex-col justify-between gap-0.5 md:gap-4">
      <div class="flex flex-col gap-0.5 md:gap-4">
        <div class="flex gap-2 2xl:gap-4 text-sm w-full">
          <div class="flex items-center gap-2">
            <Icon name="radix-icons:calendar" class="size-2 md:size-4" />
            <span class="xl:text-[11px] md:text-[10px] text-[8px]">{{
              formatDate(created_at || new Date().toISOString())
            }}</span>
          </div>
          <div class="h-full">
            <span class="h-full">|</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="radix-icons:eye-open" class="size-2 md:size-4" />
            <span class="xl:text-[11px] md:text-[10px] text-[8px]"
              >{{ view }} view{{ view !== 1 ? 's' : '' }}</span
            >
          </div>
        </div>
        <div class="2xl:text-xl lg:text-lg sm:text-base text-sm font-bold">
          {{ title }}
        </div>
      </div>
      <!-- <div class="flex">
        <div
          class="hidden md:block md:leading-6 text-[6px] md:text-[10px] lg:text-xs xl:text-sm text-black/60 dark:text-white/60 text-ellipsis"
        >
          <div v-html="content"></div>
        </div>
      </div> -->
      <div class="flex flex-row items-center">
        <div class="flex flex-row items-center gap-2 justify-start w-1/2">
          <div class="pt-1 pr-2 pl-2 bg-blue-500 rounded-sm">
            <Icon name="lucide:facebook" class="text-white" />
          </div>
          <div class="pt-1 pr-2 pl-2 bg-pink-500 rounded-sm">
            <Icon name="lucide:instagram" class="text-white" />
          </div>
          <div class="pt-1 pr-2 pl-2 bg-green-500 rounded-sm">
            <Icon name="ic:baseline-whatsapp" class="text-white" />
          </div>
          <div class="pt-1 pr-2 pl-2 bg-red-500 rounded-sm">
            <Icon name="lucide:mail" class="text-white" />
          </div>
          <div class="pt-1 pr-2 pl-2 bg-gray-500 rounded-sm">
            <Icon name="lucide:link" class="text-white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
