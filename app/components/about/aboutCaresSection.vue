<script setup lang="ts">

const abouts = [
    {
        img: '/partnersimg.png',
        title: 'Your Trusted Rental Partner',
        subtitle: 'To date, Rent.ph is the only rental portal backed by realtors, rent managers and licensed real estate professionals  to help property owners and assist clients personally making us the most trusted brand in rental marketing and servicing.',
    },
    {
        img: '/rphcaresimg.png',
        title: 'Rent.ph Cares Your Rental, Their Home',
        subtitle: 'Our tagline, "Your Rentals, Their Hope," reflects this commitment. It is a reminder that the simple act of renting a home can inspire meaningful, lasting change for those in need. With Rent.ph Cares, every successful rental transaction becomes an opportunity to give back. Whether it is supporting local  families, empowering education, or funding community programs, your trust in us fuels hope and transforms lives.',
    },
    {
        img: '/houseimg.png',
        title: 'Your Comprehensive Rental Solution Nationwide',
        subtitle: 'Together with its sister brand Filipino Homes, Rent.ph has serviced owners and companies in  marketing their lands, apartments, houses, condominiums, warehouses and commercial spaces across the country through our network of rent professionals in key cities and provinces in the Philippines.',
    },
    {
        img: '/transformimg.png',
        title: 'Transforming Real Estate Investment Into Positive Assets',
        subtitle: ' Established in 2014, under Philippines Real Estates Management Solution Inc., Rent.ph was organized with one goal in mind - to serve as the vehicle in translating real estate investment into productive assets.',
    },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-zinc-950 py-16 px-6 lg:px-20 transition-colors duration-300">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto">
      
      <div 
        v-for="about in abouts" 
        :key="about.img" 
        class="group flex flex-col items-center text-center p-8 gap-6 transition-all duration-300
               bg-white dark:bg-zinc-900 
               rounded-2xl border border-gray-100 dark:border-zinc-800
               shadow-sm hover:shadow-xl hover:-translate-y-1"
      >
        <div class="p-4 rounded-full bg-blue-50 dark:bg-blue-900/20 group-hover:scale-110 transition-transform duration-300">
          <NuxtImg :src="about.img" class="h-20 w-20 object-contain" />
        </div>

        <div class="space-y-3">
          <h3 class="font-bold text-lg leading-snug text-gray-900 dark:text-zinc-100">
            {{ about.title }}
          </h3>
          
          <p class="text-sm leading-relaxed text-gray-600 dark:text-zinc-400">
            {{ about.subtitle }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>