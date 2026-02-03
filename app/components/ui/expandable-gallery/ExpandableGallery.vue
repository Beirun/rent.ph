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
  <!-- Mobile: Horizontal scrollable grid with full images -->
  <div class="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
    <div class="flex gap-4 w-max">
      <div
        v-for="(image, index) in images"
        :key="image"
        class="relative w-72 h-56 cursor-pointer overflow-hidden rounded-2xl group"
      >
        <img
          class="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-active:scale-95"
          :src="image"
          :alt="placeNames[index] || 'Property location'"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
        />

        <div class="absolute bottom-0 left-0 right-0 p-5">
          <h3 class="text-xl font-bold text-white drop-shadow-lg">
            {{ placeNames[index] || 'Location' }}
          </h3>
          <p class="text-sm text-white/90 drop-shadow-md mt-1">
            {{ placeDescriptions[index] || 'View Properties' }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Desktop: Expandable horizontal strip layout -->
  <div class="hidden md:flex h-96 w-full gap-2" :class="[props.class]">
    <div
      v-for="(image, index) in images"
      :key="image"
      class="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3] group"
    >
      <img
        class="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        :src="image"
        :alt="placeNames[index] || 'Property location'"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent transition-opacity duration-300"
      />

      <div class="absolute bottom-0 left-0 right-0 p-6 text-white dark:text-white  flex flex-col justify-end">
        <h3 class="text-xl text-[#fafafa] font-bold drop-shadow-lg whitespace-nowrap">
          {{ placeNames[index] || 'Location' }}
        </h3>
        <p class="text-sm drop-shadow-md text-[#fafafa] transform transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 mt-1 whitespace-nowrap">
          {{ placeDescriptions[index] || 'View Properties' }}
        </p>
      </div>
    </div>
  </div>
</template>