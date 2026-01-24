<script setup lang="ts">
import PartnersAndSponsors from '~/components/partnersAndSponsors.vue'
import PropertiesAndListings from '~/components/propertiesAndListings.vue';
import Testimonials from '~/components/testimonials.vue'
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <ClientOnly>
      <PropertiesAndListings />
    </ClientOnly>
    <!-- <ClientOnly>
      <PartnersAndSponsors />
    </ClientOnly> -->
    <ClientOnly>
      <TestimonialsCard />
    </ClientOnly>
    <ClientOnly>
      <Backlinks/>
    </ClientOnly>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
