<script setup lang="ts">
// If you are passing properties from index.vue
const props = defineProps<{
  properties: any[]
}>()
</script>

<template>
  <div class="px-12 flex flex-col mt-15 max-w-full mx-auto">
    <PropertyCarousel 
      title="Popular Listings" 
      subtitle="Top picks from our community" 
      :items="properties" 
    />
    <!-- jasdkajsd -->
    <PropertyCarousel 
      title="Popular Listings" 
      subtitle="Top picks from our community" 
      :items="properties"
    />
        <PropertyCarousel 
      title="Popular Listings" 
      subtitle="Top picks from our community" 
      :items="properties" 
    />
        <PropertyCarousel 
      title="Popular Listings" 
      subtitle="Top picks from our community" 
      :items="properties" 
    />
        <PropertyCarousel 
      title="Popular Listings" 
      subtitle="Top picks from our community" 
      :items="properties" 
    />
    
    </div>
</template>