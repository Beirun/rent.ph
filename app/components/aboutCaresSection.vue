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
        title: 'YTransforming Real Estate Investment Into Positive Assets',
        subtitle: ' Established in 2014, under Philippines Real Estates Management Solution Inc., Rent.ph was organized with one goal in mind - to serve as the vehicle in translating real estate investment into productive assets.',
    },
]
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10 justify-center lg:justify-start p-25 bg-[#FAFAFA]">
        <div v-for="about in abouts" :key="about.img" class="flex flex-col items-center text-center gap-6 ">
            <NuxtImg :src="about.img" class="h-30 w-30" />
            <h3 class="font-bold text-xl text-gray-700 dark:text-gray-300"> {{ about.title }}</h3>
            <p>{{ about.subtitle }}</p>
        </div>
    </div>
</template>