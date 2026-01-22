<script setup lang="ts">
import { ref } from 'vue'
import { Marquee } from './ui/marquee'
import ReviewCard from './ui/marquee/ReviewCard.vue'

// 1. Define the shape of your partner data
interface Partner {
  name: string
  img: string
  description: string
}

const reviews: Partner[] = [
  {
    name: 'Filipino Homes',
    img: 'https://dev.filipinohomes.com/assets/logo-BXYkk-QU.png',
    description: 'Filipino Homes is the largest comprehensive real estate solutions portal in the Philippines.'
  },
  {
    name: 'Cebu Landmasters',
    img: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Logo_of_Cebu_Landmasters.jpg',
    description: 'A leading local real estate developer in the Visayas and Mindanao regions.'
  },
  {
    name: 'Leuterio Realty',
    img: 'https://leuteriorealty.com/icon0.svg?84ce967fb0744a96',
    description: 'A multi-awarded real estate brokerage firm known for its extensive network.'
  },
]

// 2. Use Generics < > to tell the ref it can be a Partner OR null
const selectedPartner = ref<Partner | null>(null)

// 3. Type the parameter in your function
const selectPartner = (partner: Partner) => {
  selectedPartner.value = partner
}
</script>

<template>
  <div class="p-10 bg-[#fafafa]">
    <h1 class="text-4xl font-semibold">Partners & Sponsors</h1>
    <p>Click a logo to view more details.</p>
  </div>

  <div class="bg-[#fafafa] relative flex h-50 w-screen flex-col items-center justify-center overflow-hidden mb-5 gap-y- ">
    <Marquee pause-on-hover class="[--duration:20s]">
      <ReviewCard 
        v-for="review in reviews" 
        :key="review.img" 
        :img="review.img" 
        class="cursor-pointer transition-transform hover:scale-105"
        @click="selectPartner(review)"
      />
    </Marquee>

    <div class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white" />
    <div class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white" />
  </div>

  <div v-if="selectedPartner" class="mx-auto max-w-4xl p-10 mt-5 border-t border-gray-100 animate-in fade-in slide-in-from-bottom-4">
    <div class="flex items-center gap-6">
      <img :src="selectedPartner.img" :alt="selectedPartner.name" class="h-20 w-auto object-contain" />
      <div>
        <h2 class="text-2xl font-bold">{{ selectedPartner.name }}</h2>
        <p class="text-gray-600 mt-2">{{ selectedPartner.description }}</p>
      </div>
      <button @click="selectedPartner = null" class="ml-auto text-sm text-gray-400 hover:text-black">
        Close
      </button>
    </div>
  </div>
</template>