<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

interface Props {
  images: string[]
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const placeNames = [
  'Cebu City',
  'Metro Manila',
  'Iloilo City',
  'Palawan',
  'Siargao',
  'Bohol',
  'Davao',
  'Baguio',
]

const placeDescriptions = [
  'Beachfront Properties Available',
  'Urban Living Spaces',
  'Tropical Resort Homes',
  'Island Paradise Estates',
  'Surf & Beach Villas',
  'Countryside Retreats',
  'Mountain View Properties',
  'Highland Vacation Homes',
]
</script>

<template>
  <div class="flex flex-col md:flex-row h-80 md:h-96 w-full gap-2 md:gap-2" :class="[props.class]">
    <div
      v-for="(image, index) in images"
      :key="image"
      class="relative flex h-32 md:h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3] md:hover:flex-[3] group"
    >
      <img
        class="relative h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        :src="image"
        :alt="placeNames[index] || 'Property location'"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      />

      <div
        class="absolute inset-0 p-2 md:p-4 text-white flex items-center justify-center md:absolute md:bottom-0 md:left-0 md:right-0 md:items-start md:justify-start"
      >
        <div class="text-center md:text-left">
          <h3
            class="text-sm md:text-lg font-semibold drop-shadow-lg text-white transition-all duration-300 group-hover:translate-y-0 translate-y-0"
          >
            {{ placeNames[index] || 'Location' }}
          </h3>
          <p
            class="text-xs md:text-sm drop-shadow-md transform transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-90 text-white md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-90"
          >
            {{ placeDescriptions[index] || 'View Properties' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
