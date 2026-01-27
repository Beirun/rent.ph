<script setup lang="ts">
import Testimonials from '~/components/testimonials.vue'
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <div>
      <ClientOnly>
        <AboutusHero />
      </ClientOnly>
      <ClientOnly>
        <awards />
      </ClientOnly>
      <ClientOnly>
        <AboutCaresSection />
      </ClientOnly>
      <ClientOnly>
        <testimonials />
      </ClientOnly>
      <ClientOnly>
        <AboutTrustedPartners />
      </ClientOnly>
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
