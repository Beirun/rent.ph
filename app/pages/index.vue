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
    <div class="min-h-screen w-screen p-8">
      <div class="flex flex-wrap justify-evenly gap-y-12 gap-x-2">
        <CardListing v-for="_ in new Array(8)"></CardListing>
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
