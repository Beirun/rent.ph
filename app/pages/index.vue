<script setup lang="ts">

import ReelsSection from '@/components/reels/ReelsSection.vue'

</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <LandingHero />
    <div>
      <ClientOnly>
        <div>
            <ReelsSection/>
        </div>
        <div class="pt-15">
            <LandingPropertiesAndListings />
        </div>
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <LandingPopularRegionSection />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <LandingAgentShowcase />
    </div>
    <div class="flex items-center justify-center pt-15">
      <ClientOnly>
        <LandingTestimonialsCard />
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
