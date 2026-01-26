<script setup lang="ts">
const truncate = (string: string) => {
  return string.length > 175 ? string.substring(0, 172) + '...' : string
}
</script>
<template>
  <div
    class="grow flex flex-row xl:flex-col w-full xl:w-100 h-25 md:h-55 xl:h-auto rounded-lg shadow-lg overflow-hidden bg-[#fafafa] dark:bg-[#212121] border border-[#e8e8e8]/50 dark:border-[#2e2e2e]"
  >
    <div class="xl:w-full aspect-square bg-[url('/blog-news.jpg')] bg-cover"></div>
    <div class="h-full w-full p-2 md:p-8 flex flex-col gap-0.5 md:gap-4">
      <div class="flex gap-2 2xl:gap-4 text-sm w-full">
        <div class="flex items-center gap-2">
          <Icon name="radix-icons:calendar" class="size-2 md:size-4" />
          <span class="xl:text-[11px] md:text-[10px] text-[8px]">Jan 23, 2026</span>
        </div>
        <div class="h-full">
          <span class="h-full">|</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="radix-icons:eye-open" class="size-2 md:size-4" />
          <span class="xl:text-[11px] md:text-[10px] text-[8px]">160 views</span>
        </div>
      </div>
      <div class="2xl:text-xl lg:text-lg sm:text-base text-sm font-bold">
        Post-Holiday Budget Reset: A Smart January Money Guide for Filipino Renters
      </div>
      <div class="flex">
        <div
          class="hidden md:block md:leading-6 text-[6px] md:text-[10px] lg:text-xs xl:text-sm text-black/60 dark:text-white/60 text-ellipsis"
        >
          {{
            truncate(`Renting in 2026 is about more than just a monthly fee—it’s about peace of mind. From
          rising utility costs to the need for a home office, your budget needs to work harder than
          ever. We’ve broken down the ultimate 2026 Rent Affordability Guide to help you find a
          space that fits your wallet AND your lifestyle. Don't sign that lease until you read this!`)
          }}
        </div>
      </div>
    </div>
  </div>
</template>
