<script setup lang="ts">
</script>
<template>
  <div class="mt-20">
    <div class="grid grid-cols-4 gap-y-12 gap-x-2 mt-20">
      <CardListing v-for="_ in new Array(8)" orientation="vertical"></CardListing>
    </div>
  </div>
</template>
