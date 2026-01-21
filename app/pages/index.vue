<script setup lang="ts">
import PartnersAndSponsors from '~/components/partnersAndSponsors.vue'
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <ClientOnly>
      <PartnersAndSponsors />
    </ClientOnly>
    <div class="h-screen w-screen p-8 grid grid-cols-4 gap-y-4 place-items-center">
      <CardListing v-for="_ in new Array(10)"></CardListing>
    </div>
  </div>
</template>
