<template>
  <div class="min-h-screen w-full flex items-center justify-center bg-white dark:bg-zinc-950 py-10 lg:py-0 transition-colors duration-300">
    <div class="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-20 px-6 lg:px-24 max-w-full mx-auto">
      
      <div class="flex flex-col justify-start gap-8 lg:gap-12 text-center lg:text-left lg:w-1/2">
        <div class="space-y-6">
          <h2 class="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#262626] dark:text-white leading-[0.9] tracking-tighter">
            Real connections <br class="hidden lg:block"/> 
            <span class="text-[#fe8e0a]">shaping</span> the future
          </h2>

          <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
            "Our bond with international clients is something we truly value. We’re always looking for ways to grow and stay ahead in the rental space."
          </p>
        </div>
        
        <div class="flex flex-col items-center lg:items-start gap-6 pt-4">
          <a 
            href="https://www.japantimes.co.jp/country-report/2025/06/06/the-philippines-report-2025/rent-ph-real-connections-shaping-future-rentals/" 
            target="_blank"
            class="group flex items-center gap-4 no-underline"
          >
            <div class="h-[2px] w-16 bg-[#fe8e0a] transition-all duration-300 group-hover:w-24"></div>
            <p class="text-[#fe8e0a] font-bold tracking-[0.2em] uppercase text-xs md:text-sm transition-opacity group-hover:opacity-80">
              As Interviewed by The Japan Times
            </p>
          </a>

          <NuxtLink 
            to="https://www.japantimes.co.jp/country-report/2025/06/06/the-philippines-report-2025/rent-ph-real-connections-shaping-future-rentals/"
            target="_blank"
            class="px-8 py-3 bg-[#fe8e0a] text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-[#e67e00] transition-colors shadow-lg shadow-orange-500/20"
          >
            Read Full Article
          </NuxtLink>
        </div>
      </div>

      <div class="relative w-full lg:w-[40%] flex flex-col items-center">
        <div class="relative group w-full max-w-md lg:max-w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          <NuxtImg
            src="/Rent.ph-photo_web.jpg"
            class="w-full h-[50vh] sm:h-[65vh] lg:h-[80vh] object-cover object-top rounded-2xl"
            alt="Japan Times Interview"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>

    </div>
  </div>
</template>