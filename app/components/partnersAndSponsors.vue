<script setup lang="ts">
import { ref } from 'vue'
import { Marquee } from './ui/marquee'
import ReviewCard from './ui/marquee/ReviewCard.vue'

const reviews = [
  {
    img: 'https://software-finder-prod.blr1.digitaloceanspaces.com/Dev_Rev_34ec11f8f2.png',
  },
  {
    img: 'https://fullscale.ph/wp-content/uploads/2024/02/FS-LOGO-180x100.png',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpJPdFtsokVTZaDGRaEXQK5ewo6jUwVSUqA&s',
  },
  {
    img: 'https://connect-assets.prosple.com/cdn/ff/HQPGVBRwmdkL3kmxsn5sc1g55fEekpm7ulqKfYfj3DA/1695176993/public/2023-09/banner-allliance-1786x642-2023.png',
  },
  {
    img: 'https://ph.joblum.com/uploads/21/20827.png',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbb6YHjjPZxbuf4hFnFpUv11sh4cH6Fi9tQ&s',
  },
]

const firstRow = ref(reviews.slice(0, reviews.length / 2))
const secondRow = ref(reviews.slice(reviews.length / 2))
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl">Partners & Sponsors</h1>
    <p>Lorem ipsum</p>
  </div>
  <div
    class="bg-background relative flex h-50 w-screen flex-col items-center justify-center overflow-hidden mb-5 gap-y-5"
  >
    <Marquee pause-on-hover class="[--duration:20s]">
      <ReviewCard v-for="review in firstRow" :key="review.img" :img="review.img" />
    </Marquee>

    <Marquee reverse pause-on-hover class="[--duration:20s]">
      <ReviewCard v-for="review in secondRow" :key="review.img" :img="review.img" />
    </Marquee>

    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white"
    />

    <div
      class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white"
    />
  </div>
</template>
