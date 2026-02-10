<script setup lang="ts">
import { ref } from 'vue'
import { Marquee } from '../ui/marquee'
import ReviewCard from '../ui/marquee/ReviewCard.vue'

const reviews = [
  {
    img: 'https://dev.filipinohomes.com/assets/logo-BXYkk-QU.png',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Logo_of_Cebu_Landmasters.jpg',
  },
  {
    img: 'https://leuteriorealty.com/icon0.svg?84ce967fb0744a96',
  },
]

const row = ref(reviews)
</script>

<template>
  <div class="p-10">
    <h1 class="text-4xl font-semibold">Partners & Sponsors</h1>
    <p>Lorem ipsum</p>
  </div>
  <div
    class="bg-background relative flex h-50 w-screen flex-col items-center justify-center overflow-hidden mb-5 gap-y-5"
  >
    <Marquee pause-on-hover class="[--duration:20s]">
      <ReviewCard v-for="review in row" :key="review.img" :img="review.img" />
    </Marquee>

    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white"
    />

    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white"
    />
  </div>
</template>
