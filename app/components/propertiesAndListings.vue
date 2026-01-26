<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CardListing from './cardListing.vue'

const scrollContainer = ref<HTMLElement | null>(null)
const showLeftArrow = ref(false)
const showRightArrow = ref(true)

// Function to calculate visibility of arrows
const updateArrows = () => {
  if (scrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
    showLeftArrow.value = scrollLeft > 10
    showRightArrow.value = scrollLeft + clientWidth < scrollWidth - 10
  }
}

const scroll = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    const scrollAmount = 350
    scrollContainer.value.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  const el = scrollContainer.value
  if (el) {
    el.addEventListener('scroll', updateArrows)
    updateArrows()
  }
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', updateArrows)
})
</script>

<template>
  <div class="px-10 flex flex-col mt-10 max-w-[98%] mx-auto">
    <div class="flex flex-col w-full">
      <h1 class="text-4xl font-bold">Our Most Popular Listings</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">Properties and Listings</p>
    </div>

    <div class="relative mt-10 group">
      <button
        v-if="showLeftArrow"
        @click="scroll('left')"
        class="absolute -left-12 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all ease-in ease-out active:scale-95"
      >
        <Icon name="radix-icons:arrow-left" class="size-6 text-gray-700 dark:text-gray-200" />
      </button>

      <div
        ref="scrollContainer"
        class="flex gap-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-4 px-2"
      >
        <CardListing v-for="i in 8" :key="i" orientation="vertical" class="snap-start shrink-0" />
      </div>

      <button
        v-if="showRightArrow"
        @click="scroll('right')"
        class="absolute -right-12 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
      >
        <Icon name="radix-icons:arrow-right" class="size-6 text-gray-700 dark:text-gray-200" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
