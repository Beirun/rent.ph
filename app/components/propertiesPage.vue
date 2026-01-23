<script setup lang="ts">
import CardListing from './cardListing.vue'
</script>
<template>
  <div class="px-12 mt-20">
    <div class="grid grid-cols-4 gap-y-12 gap-x-2 mt-20">
      <CardListing v-for="_ in new Array(8)" orientation="horizontal"></CardListing>
    </div>
  </div>
</template>
