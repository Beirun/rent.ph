<script setup lang="ts">
const truncate = (string: string) => {
  return string.length > 175 ? string.substring(0, 172) + '...' : string
}
</script>
<template>
  <div class="h-175 flex flex-col w-100 rounded-lg shadow-lg overflow-hidden">
    <div class="w-full aspect-square bg-[url('/blog-news.jpg')] bg-cover"></div>
    <div class="h-full w-full p-8 flex flex-col gap-4">
      <div class="flex gap-6 text-sm">
        <div class="flex items-start gap-2">
          <Icon name="radix-icons:calendar" class="size-4" /> <span>Jan 23, 2026</span>
        </div>
        <span>|</span>
        <div class="flex items-start gap-2">
          <Icon name="radix-icons:eye-open" class="size-4" /> <span>160 views</span>
        </div>
      </div>
      <div class="text-xl font-bold">
        Post-Holiday Budget Reset: A Smart January Money Guide for Filipino Renters
      </div>
      <div class="flex">
        <div class="leading-6 text-sm text-black/60 text-ellipsis">
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
