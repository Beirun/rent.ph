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
    <div>
      <ClientOnly>
        <PropertiesAndListings />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <LandingPopularRegionSection />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <LandingShowcase />
    </div>
    <div class="flex items-center justify-center pt-15">
      <ClientOnly>
        <TestimonialsCard />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <Backlinks />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </div>
  </div>
</template>
