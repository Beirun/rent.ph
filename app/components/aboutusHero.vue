<script setup lang="ts">
const rstats = [
    { count: '15+', label: 'Years of Experience' },
    { count: '5000+', label: 'Happy Clients' },
    { count: '98%', label: 'Homes Sold' },
]
</script>

<template>
    <div class="h-screen w-full bg-[#FAFAFA]">
        <div
            class="flex flex-col lg:flex-row
                   h-screen
                   items-center
                   justify-center
                   gap-10 lg:gap-16
                   px-6 lg:px-20"
        >
                <div class="flex flex-col justify-between gap-10 lg:gap-20 mt-30 lg:mt-0 text-center lg:text-left">
                <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold w-full lg:w-200">
                    About Our Real Estate Journey
                </h1>

                <span class="text-base sm:text-lg lg:text-xl w-full lg:w-160 text-gray-600 dark:text-gray-300">
                    For over 15 years, we've been helping families and individuals find their perfect home.
                    Our commitment to excellence and personalized service sets us apart.
                </span>

                <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center lg:justify-start">
                    <div
                        v-for="stat in rstats"
                        :key="stat.label"
                        class="flex flex-col gap-2 sm:gap-4 items-center"  
                    >
                        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-gray-300">
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
                    src="/aboutimg.png"
                    class="w-full h-[35vh] sm:h-[45vh] lg:h-[60vh] rounded-lg object-cover"
                />
            </div>
        </div>
    </div>
</template>
