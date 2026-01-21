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
    <div class="h-screen w-screen"></div>
  </div>
</template>
