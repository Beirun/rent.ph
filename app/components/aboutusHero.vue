<script setup lang="ts">
const rstats = [
    { count: '15+', label: 'Years of Experience' },
    { count: '5000+', label: 'Happy Clients' },
    { count: '98%', label: 'Homes Sold' },
]
</script>

<template>
    <div class="h-screen w-full">
        <div
            class="flex flex-col lg:flex-row
                   h-screen
                   items-center
                   justify-center
                   gap-10 lg:gap-10
                   px-6 lg:px-20"
        >
                <div class="flex flex-col justify-between gap-10 lg:gap-20 mt-30 lg:mt-0 text-center lg:text-left">
                <h1 class="text-4xl sm:text-5xl text-[#262626] dark:text-white/80 lg:text-7xl font-bold w-full lg:w-200">
                    Philippines #1 Property Rental Website
                </h1>

                <span class="text-base sm:text-lg lg:text-xl w-full lg:w-160 text-gray-600 dark:text-gray-300">
                    Awarded 2024 International Realtor of the year by National Association of Realtors
                </span>

                <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center lg:justify-start">
                    <div
                        v-for="stat in rstats"
                        :key="stat.label"
                        class="flex flex-col gap-2 sm:gap-4 items-center"  
                    >
                        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fe8e0a]">
                            {{ stat.count }}
                        </h2>
                        <p class="text-gray-800 text-base sm:text-lg lg:text-xl dark:text-gray-300">
                            {{ stat.label }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-auto">
                <NuxtImg
                    src="/filAwards.png"
                    class="w-[90%] h-[35vh] sm:h-[45vh] lg:h-[60vh] rounded-lg object-cover"
                />
            </div>
        </div>
    </div>
</template>
