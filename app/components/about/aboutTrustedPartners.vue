<script setup lang="ts">
import { ref } from 'vue'
import { Marquee } from '../ui/marquee'
import ReviewCard from '../ui/marquee/ReviewCard.vue'

interface Partner {
  name: string
  img: string
  description: string
}

const reviews: Partner[] = [
  {
    name: 'Filipino Homes',
    img: 'https://dev.filipinohomes.com/assets/logo-BXYkk-QU.png',
    description:
      'Filipino Homes is the largest comprehensive real estate solutions portal in the Philippines.',
  },
  {
    name: 'Cebu Landmasters',
    img: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Logo_of_Cebu_Landmasters.jpg',
    description: 'A leading local real estate developer in the Visayas and Mindanao regions.',
  },
  {
    name: 'Leuterio Realty',
    img: 'https://leuteriorealty.com/icon0.svg?84ce967fb0744a96',
    description: 'A multi-awarded real estate brokerage firm known for its extensive network.',
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
  <div class="px-6 py-8 md:p-10 text-center md:text-left">
    <h1 class="text-3xl md:text-4xl font-semibold">Our Trusted Partners</h1>
    <p class="uppercase pt-2 md:pt-4 text-xs md:text-sm text-gray-400 dark:text-gray-500 tracking-wider">
      Click logo for more details.
    </p>
  </div>

  <div class="relative flex h-40 md:h-50 w-full flex-col items-center justify-center overflow-hidden mb-5 gap-y-5">
    <Marquee pause-on-hover class="[--duration:20s]">
      <ReviewCard v-for="review in reviews" :key="review.img" :img="review.img"
        class="cursor-pointer transition-transform hover:scale-105 bg-white mx-2 md:mx-4"
        @click="selectPartner(review)" />
    </Marquee>

    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/3 bg-linear-to-r from-white" />
    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/3 bg-linear-to-l from-white" />
  </div>

  <div v-if="selectedPartner"
    class="mx-4 md:mx-auto max-w-4xl p-6 md:p-10 mt-5 bg-white/80 dark:bg-white/90 mb-10 border border-gray-100 shadow-xl rounded-2xl animate-in fade-in slide-in-from-bottom-4">
    <div class="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 relative">

      <img :src="selectedPartner.img" :alt="selectedPartner.name" class="h-16 md:h-20 w-auto object-contain shrink-0" />

      <div class="text-center md:text-left flex-1 pb-4 md:pb-0">
        <h2 class="text-xl md:text-2xl text-[#262626] font-bold">
          {{ selectedPartner.name }}
        </h2>
        <p class="text-sm md:text-base text-gray-600 mt-1 md:mt-2 leading-relaxed">
          {{ selectedPartner.description }}
        </p>
      </div>

      <button @click="selectedPartner = null" class="absolute -top-2 -right-2 md:static md:ml-auto 
         text-[#262626]
        dark:hover:text-zinc-100 
         p-2 transition-colors duration-200">
        <span class="hidden md:inline text-sm text-[#262626] cursor-pointer font-medium">Close</span>

        <div class="md:hidden 
              bg-gray-10 text-[#262626]
            dark:text-zinc-300 h-7 w-8
              rounded-full p-1 shadow-sm 
              border border-transparent dark:border-zinc-700">
          <Icon name="lucide:x" class="size-5 text-[#262626]" />
        </div>
      </button>
    </div>
  </div>
</template>
