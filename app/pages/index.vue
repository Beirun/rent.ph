<script setup lang="ts">
import PartnersAndSponsors from '~/components/partnersAndSponsors.vue'
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <div class="min-h-screen w-screen p-8 flex flex-wrap justify-evenly gap-y-4">
      <CardListing v-for="_ in new Array(8)"></CardListing>
    </div>
    <ClientOnly>
      <PartnersAndSponsors />
    </ClientOnly>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
