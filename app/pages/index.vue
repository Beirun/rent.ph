<script setup lang="ts">
import PartnersAndSponsors from '~/components/partnersAndSponsors.vue'
import Testimonials from '~/components/testimonials.vue'
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <div class="min-h-screen w-screen p-10">
      <h1 class="text-4xl py-10 font-bold">Properties and Listings</h1>

      <div class=""></div>
      <div class="grid grid-cols-4 gap-y-12 gap-x-2">
        <CardListing v-for="_ in new Array(8)" orientation="vertical"></CardListing>
      </div>
    </div>
    <ClientOnly>
      <PartnersAndSponsors />
    </ClientOnly>
    <ClientOnly>
      <Testimonials />
    </ClientOnly>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
