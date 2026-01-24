<script setup lang="ts">
import { ref } from 'vue'
import CardListing from './cardListing.vue'

// Reference to the card row for scrolling
const scrollContainer = ref<HTMLElement | null>(null)

const scroll = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    // Scrolls by roughly the width of one card (320px) plus gap
    const scrollAmount = 350 
    scrollContainer.value.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <div class="px-12 flex flex-col mt-28 max-w-[98] mx-auto">
    <div class="flex flex-col ml-4 w-full">
      <h1 class="text-4xl font-bold">Our Most Popular Listings</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">Properties and Listings</p>
    </div>

    <div class="relative mt-20 group">
      
      <button 
        @click="scroll('left')"
        class="absolute -left-9 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
      >
        <Icon name="radix-icons:arrow-left" class="size-6 text-gray-700 dark:text-gray-200" />
      </button>

      <div 
        ref="scrollContainer" 
        class="flex gap-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-4 px-2"
      >
        <CardListing 
          v-for="_ in 6" 
          :key="_"
          orientation="vertical" 
          class="snap-start shrink-0"
        />
      </div>

      <button 
        @click="scroll('right')"
        class="absolute -right-6 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
      >
        <Icon name="radix-icons:arrow-right" class="size-6 text-gray-700 dark:text-gray-200" />
      </button>
      
    </div>
  </div>
</template>

<style scoped>
/* Hides the scrollbar visually but keeps the scroll logic functional */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>