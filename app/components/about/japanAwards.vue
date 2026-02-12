<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="flex flex-col lg:flex-row-reverse h-screen items-center justify-center gap-10 lg:gap-10 px-6 lg:px-20">
      
      <div class="flex flex-col justify-between gap-6 lg:gap-10 text-center lg:text-left">
        <h2 class="text-4xl sm:text-5xl text-[#262626] dark:text-white/80 lg:text-7xl font-bold w-full lg:w-200">
          Rent.ph: Real connections shaping the future of rentals
        </h2>

        <div class="flex flex-col gap-6">
          <span class="text-base sm:text-lg lg:text-xl w-full lg:w-160 text-gray-600 dark:text-gray-300">
            "Our bond with international clients is something we truly value. We’re always looking for ways to grow and stay ahead in the rental space,"
          </span>
          
          <div class="flex items-center justify-center lg:justify-start gap-4">
            <div class="h-0.5 w-12 bg-[#fe8e0a]"></div>
            <p class="text-[#fe8e0a] font-bold tracking-widest uppercase text-sm">
              As Interviewed by The Japan Times
            </p>
          </div>
        </div>
      </div>

      <div class="relative w-full lg:w-220 flex flex-col items-center">
        <div class="relative overflow-hidden rounded-lg w-full h-[35vh] sm:h-[45vh] lg:h-[60vh]">
          <NuxtImg
            src="/Rent.ph-photo_web.jpg"
            class="w-full h-full object-contain rounded-lg shadow-2xl"
            alt="Japan Times Interview"
          />
        </div>
        
        <div class="flex gap-2 mt-4">
          <div class="w-12 h-1 rounded-full bg-[#fe8e0a]"></div>
          <div class="w-3 h-1 rounded-full bg-gray-300"></div>
          <div class="w-3 h-1 rounded-full bg-gray-300"></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
// Logic-free component for clean presentation
</script>

<style scoped>
/* Scoped to match your existing aesthetic */
</style>