<script setup lang="ts">
import LandingShowcase from '~/components/landingShowcase.vue'
import LandingPopularRegionSection from '~/components/landingPopularRegionSection.vue'
import PartnersAndSponsors from '~/components/partnersAndSponsors.vue'
import PropertiesAndListings from '~/components/propertiesAndListings.vue'
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
    <ClientOnly>
      <LandingPopularRegionSection />
    </ClientOnly>
    <LandingShowcase />
    <div class="flex items-center justify-center">
      <ClientOnly>
        <TestimonialsCard />
      </ClientOnly>
    </div>

    <ClientOnly>
      <Backlinks />
    </ClientOnly>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
