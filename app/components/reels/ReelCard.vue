<script setup lang="ts">
import { ref } from 'vue'

// Define the interface for a Reel
export interface Reel {
  id: number | string
  title: string
  views: string
  videoUrl: string
  thumbnailUrl: string
}

const props = defineProps<Reel>()

const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)

const playPreview = () => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => { /* Autoplay blocked */ })
    isPlaying.value = true
  }
}

const stopPreview = () => {
  if (videoRef.value) {
    videoRef.value.pause()
    videoRef.value.currentTime = 0
    isPlaying.value = false
  }
}
</script>

<template>
  <div 
    class="relative w-[240px] h-[420px] rounded-2xl overflow-hidden cursor-pointer group shrink-0 bg-gray-900"
    @mouseenter="playPreview"
    @mouseleave="stopPreview"
  >
    <video 
      ref="videoRef"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      :class="{ 'opacity-100': isPlaying, 'opacity-0': !isPlaying }"
      muted
      loop
      playsinline
      preload="none" 
    >
      <source :src="videoUrl" type="video/mp4">
    </video>

    <img 
      :src="thumbnailUrl" 
      alt="Thumbnail"
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
      :class="{ 'opacity-0': isPlaying, 'opacity-100': !isPlaying }"
    />
    
    <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 pointer-events-none"></div>

    <div class="absolute bottom-0 left-0 p-4 w-full pointer-events-none">
      <h3 class="text-white font-bold text-lg leading-tight mb-1 drop-shadow-md truncate">{{ title }}</h3>
      <div class="flex items-center gap-1.5 text-gray-300 text-sm">
        <Icon name="radix-icons:eye-open" class="size-4" />
        <span>{{ views }} views</span>
      </div>
    </div>
  </div>
</template>