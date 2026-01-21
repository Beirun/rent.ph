<script setup lang="ts"></script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <Hero />
    <Marquee
      :items="[
        'Apartments',
        'Condos',
        'Boarding Houses',
        'Pet Friendly',
        'Near IT Park',
        'Budget Rentals',
      ]"
    />
    <div class="h-screen w-screen p-8 grid grid-cols-5 gap-y-4 place-items-center">
      <CardListing v-for="_ in new Array(10)"></CardListing>
    </div>
  </div>
</template>
