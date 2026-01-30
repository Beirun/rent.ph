<script setup lang="ts">
import type { NewsItem } from '~/models/blog'
function formatDate(s: string) {
  if (!s) throw new Error('Invalid date')
  const d = new Date(s)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}
const props = withDefaults(defineProps<NewsItem>(), {})
</script>
<template>
  <div class="w-screen flex justify-center pb-5 md:py-10">
    <div
      class="flex md:flex-row md:h-100 md:max-h-90 flex-col w-9/10 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-[#212121] border border-[#e8e8e8]/50 dark:border-[#2e2e2e]"
    >
      <div
        :style="{ backgroundImage: `url(${image})` }"
        class="h-full aspect-square bg-cover"
      ></div>
      <div class="w-full justify-between p-6 xl:p-8 flex flex-col gap-2 xl:gap-4">
        <div class="flex gap-6">
          <div class="flex items-center gap-2">
            <Icon name="radix-icons:calendar" class="size-4" />
            <span class="xl:text-sm 2xl:text-base md:text-xs">{{
              formatDate(created_at || new Date().toISOString())
            }}</span>
          </div>
          <span class="h-full w-0.5 bg-foreground/50"></span>
          <div class="flex items-center gap-2">
            <Icon name="radix-icons:eye-open" class="size-4" />
            <span class="xl:text-base md:text-[10px]"
              >{{ view }} view{{ view !== 1 ? 's' : '' }}</span
            >
          </div>
        </div>
        <div class="2xl:text-4xl xl:text-2xl font-bold">
          {{ title }}
        </div>
        <div>
          <div class="leading-6 xl:leading-8 2xl:text-base xl:text-xs text-[11px]">
            Renting in 2026 is about more than just a monthly fee—it’s about peace of mind. From
            rising utility costs to the need for a home office, your budget needs to work harder
            than ever. We’ve broken down the ultimate 2026 Rent Affordability Guide to help you find
            a space that fits your wallet AND your lifestyle. Don't sign that lease until you read
            this!
          </div>
          <div class="text-[#205ed7] dark:text-[#0454A1] 2xl:text-base xl:text-xs text-[11px]">
            #RentPH #PhilippineRealEstate #BudgetingTips2026
          </div>
        </div>
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
          <div class="flex items-center gap-2 justify-end w-1/2">
            <Button variant="link" class="p-0">
              <span class="text-[#205ed7] dark:text-[#0454A1]">Read More</span>
              <Icon name="radix-icons:arrow-right" class="bg-[#205ed7] dark:bg-[#0454A1]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
