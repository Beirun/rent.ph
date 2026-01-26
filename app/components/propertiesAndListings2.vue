<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import cardListingPropertiesPage from './cardListingPropertiesPage.vue'

</script>
<template>
  <div class="px-12 flex flex-col mt-15 max-w-full mx-auto">
    
    <PropertyCarousel 
      title="Popular Listings" 
      subtitle="Top picks from our community" 
      :items-count="8" 
    />

    <PropertyCarousel 
      title="Recently Visited" 
      subtitle="Pick up where you left off" 
      :items-count="3" 
    />

    <PropertyCarousel 
      title="Listings Near You" 
      subtitle="Properties right around the corner" 
      :items-count="8" 
    />

    <PropertyCarousel 
      title="New Listings" 
      subtitle="Freshest properties added to our platform" 
      :items-count="8" 
    />

    <PropertyCarousel 
      title="Budget Friendly" 
      subtitle="High-quality homes that fit your wallet perfectly" 
      :items-count="7" 
    />

  </div>
</template>