<script setup lang="ts">
import CardListing from './cardListing.vue'
</script>
<template>
  <div class="px-12 flex flex-col mt-28">
    <div class="flex flex-col ml-4 w-full">
      <h1 class="text-4xl font-bold">Our Most Popular Listings</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">Properties and Listings</p>
    </div>

    <div class="grid grid-cols-5 place-items-center gap-y-10 gap-x-2 mt-20">
      <CardListing v-for="_ in new Array(5)" orientation="vertical"></CardListing>
    </div>
  </div>
</template>
