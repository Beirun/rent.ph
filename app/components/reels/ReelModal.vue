<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { Reel } from './ReelCard.vue'

const props = defineProps<{
  reel: Reel
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'next'): void
  (e: 'prev'): void
}>()

const videoRef = ref<HTMLVideoElement | null>(null)

// Auto-play when reel changes
watch(() => props.reel, () => {
  if (videoRef.value) {
    videoRef.value.load()
    videoRef.value.currentTime = 0
    videoRef.value.play().catch(() => {})
  }
})

// Handle keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') emit('next')
  if (e.key === 'ArrowLeft') emit('prev')
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  // Lock body scroll
  document.body.style.overflow = 'hidden'
  // Initial play
  if (videoRef.value) {
    videoRef.value.play().catch(() => {})
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  // Restore body scroll
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" @click.self="$emit('close')">
    <!-- Close Button -->
    <button 
      class="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white transition-colors"
      @click="$emit('close')"
    >
      <Icon name="radix-icons:cross-2" class="size-8" />
    </button>

    <!-- Previous Button -->
    <button 
      class="hidden md:flex absolute left-4 z-40 p-4 text-white/50 hover:text-white transition-colors hover:scale-110"
      @click.stop="$emit('prev')"
    >
      <Icon name="radix-icons:chevron-left" class="size-12" />
    </button>

    <!-- Main Content -->
    <div class="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[9/16] max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl">
      <video
        ref="videoRef"
        class="w-full h-full object-cover"
        controls
        autoplay
        loop
        playsinline
      >
        <source :src="reel.videoUrl" type="video/mp4">
      </video>
      
      <!-- Overlay Info (Optional, can be removed if not needed since it's in the card) -->
      <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
        <h2 class="text-white text-xl font-bold mb-2">{{ reel.title }}</h2>
        <div class="flex items-center text-white/80 text-sm">
           <Icon name="radix-icons:eye-open" class="size-4 mr-2" />
           <span>{{ reel.views }} views</span>
        </div>
      </div>
    </div>

    <!-- Next Button -->
    <button 
      class="hidden md:flex absolute right-4 z-40 p-4 text-white/50 hover:text-white transition-colors hover:scale-110"
      @click.stop="$emit('next')"
    >
      <Icon name="radix-icons:chevron-right" class="size-12" />
    </button>
  </div>
</template>
