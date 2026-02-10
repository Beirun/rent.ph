<script setup lang="ts">
import AboutusHero from '~/components/about/aboutusHero.vue';
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
        <AboutAwards />
      </ClientOnly>
      <ClientOnly>
        <AboutCaresSection />
      </ClientOnly>

      <ClientOnly>
        <AboutTrustedPartners />
      </ClientOnly>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <Backlinks />
      </ClientOnly>
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
