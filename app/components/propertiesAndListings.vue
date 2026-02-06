<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CardListing from './cardListing.vue'
import { Skeleton } from './ui/skeleton'

interface Property {
  id: number
  title: string
  image: string
  price: string
  bed: number
  bathroom: number
  square: number
  address: string
  user_name: string
  user_avatar?: string
  agent_title: string
  agent_phone: string
  agent_email: string
}

const scrollContainer = ref<HTMLElement | null>(null)
const showLeftArrow = ref(false)
const showRightArrow = ref(true)
const properties = ref<Property[]>([])
const loading = ref(true)

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

const fetchProperties = async () => {
  try {
    const response = await fetch('https://rent.ph/api/properties')
    const data = await response.json()
    if (data.status === 'success') {
      properties.value = data.data.slice(0, 8) // Get first 8 properties for the carousel
    }
  } catch (error) {
    console.error('Error fetching properties:', error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await fetchProperties()

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
  <div class="px-10 flex flex-col mt-15 max-w-[98%] mx-auto">
    <div class="flex flex-col w-full">
      <h1 class="text-4xl font-bold">Featured Listings</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">Properties and Listings</p>
    </div>

    <div class="relative mt-10 group">
      <button
        v-if="showLeftArrow"
        @click="scroll('left')"
        class="absolute -left-12 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all ease-out active:scale-95"
      >
        <Icon name="radix-icons:arrow-left" class="size-6 text-gray-700 dark:text-gray-200" />
      </button>

      <div
        ref="scrollContainer"
        class="flex gap-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-4 px-2"
      >
        <div v-if="loading" class="flex gap-x-6">
          <div v-for="i in 8" :key="i" class="w-80 h-90 flex flex-col gap-4 snap-start shrink-0">
            <Skeleton class="h-44 w-full rounded-t-lg" />
            <div class="flex-1 flex flex-col gap-3 p-3">
              <Skeleton class="h-6 w-3/4" />
              <Skeleton class="h-5 w-1/2" />
              <Skeleton class="h-4 w-full" />
              <div class="flex gap-4">
                <Skeleton class="h-3 w-12" />
                <Skeleton class="h-3 w-12" />
                <Skeleton class="h-3 w-16" />
              </div>
              <div class="flex justify-between items-center mt-2">
                <div class="flex items-center gap-2">
                  <Skeleton class="h-7 w-7 rounded-full" />
                  <Skeleton class="h-3 w-20" />
                </div>
                <div class="flex gap-2">
                  <Skeleton class="h-8 w-8 rounded-full" />
                  <Skeleton class="h-8 w-8 rounded-full" />
                  <Skeleton class="h-8 w-8 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardListing
          v-else
          v-for="property in properties"
          :key="property.id"
          :property="property"
          orientation="vertical"
          class="snap-start shrink-0"
        />
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
