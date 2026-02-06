<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ReelCard, { type Reel } from './ReelCard.vue'
import ReelModal from './ReelModal.vue'

// Props: Allow parent to pass data, or fetch internally if you prefer
const props = defineProps<{
  reels?: Reel[]
}>()

// --- Modal Logic ---
const selectedReelIndex = ref<number | null>(null)

const selectedReel = computed(() => {
  if (selectedReelIndex.value === null || !props.reels) return null
  return props.reels[selectedReelIndex.value]
})

const openModal = (index: number) => {
  selectedReelIndex.value = index
}

const closeModal = () => {
  selectedReelIndex.value = null
}

const nextReel = () => {
  if (selectedReelIndex.value !== null && props.reels) {
    if (selectedReelIndex.value < props.reels.length - 1) {
      selectedReelIndex.value++
    } else {
      // Loop back to start (optional)
      selectedReelIndex.value = 0
    }
  }
}

const prevReel = () => {
  if (selectedReelIndex.value !== null && props.reels) {
    if (selectedReelIndex.value > 0) {
      selectedReelIndex.value--
    } else {
      // Loop back to end (optional)
      selectedReelIndex.value = props.reels.length - 1
    }
  }
}

// --- Carousel Logic (Simplified for Reels) ---
const scrollContainer = ref<HTMLElement | null>(null)
const showLeftArrow = ref(false)
const showRightArrow = ref(true)

const checkScroll = () => {
  if (scrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
    showLeftArrow.value = scrollLeft > 10
    showRightArrow.value = scrollLeft + clientWidth < scrollWidth - 10
  }
}

const scroll = (direction: 'left' | 'right') => {
  if (scrollContainer.value) {
    const scrollAmount = 300 // Slightly smaller scroll for narrower cards
    scrollContainer.value.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  scrollContainer.value?.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div class="flex-col flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-10 mt-15 max-w-[98%] mx-auto ">

    <div class="relative group">
      <button v-if="showLeftArrow" @click="scroll('left')"
        class="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all">
        <Icon name="radix-icons:arrow-left" class="size-6" />
      </button>

      <div ref="scrollContainer"
        class="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        
        <ReelCard 
          v-for="(reel, index) in reels" 
          :key="reel.id" 
          v-bind="reel"
          class="snap-center"
          @click="openModal(index)"
        />

        <div v-if="!reels?.length" class="text-gray-500 py-10 w-full text-center">
          No reels available at the moment.
        </div>
      </div>

       <button
        v-if="showRightArrow"
        @click="scroll('right')"
        class="absolute -right-12 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
      >
        <Icon name="radix-icons:arrow-right" class="size-6 text-gray-700 dark:text-gray-200" />
      </button>
    </div>

    <!-- Reel Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <ReelModal
        v-if="selectedReel"
        :reel="selectedReel"
        @close="closeModal"
        @next="nextReel"
        @prev="prevReel"
      />
    </Transition>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>