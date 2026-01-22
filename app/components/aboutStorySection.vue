<script setup lang="ts">
const stories = [
    { title: 'Trusted Services', label: 'Licensed and insured individuals', Icon: 'lucide:shield' },
    { title: 'Personal Touch', label: 'Tailored Soluitons for Every Clients',Icon: 'lucide:heart' },
]

</script>

<template>
    <div class="h-screen w-full bg-[#FAFAFA]">
        <div class="flex flex-col lg:flex-row
                   h-screen
                   items-center
                   justify-center
                   gap-10 lg:gap-16
                   px-6 lg:px-20">
            <div class="w-full lg:w-auto">
                <NuxtImg src="/aboutimg2.png" class="w-full h-[35vh] sm:h-[45vh] lg:h-[60vh] rounded-lg object-cover" />
            </div>

            <div class="flex flex-col justify-between gap-4 lg:gap-10 mt-30 lg:mt-0 text-center lg:text-left">
                <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold w-full lg:w-200">
                    Our Story & Mission
                </h1>

                <span class="text-base sm:text-lg lg:text-xl w-full lg:w-220 text-gray-600 dark:text-gray-300">
                    Established in 2014, under Philippine Real Estate Management Solutions Inc., Rent.ph was organized
                    with one goal in mind - to
                    serve as the vehicle in translating real estate investments into productive assets.
                </span>

                <span class="text-base sm:text-lg lg:text-xl w-full lg:w-220 text-gray-600 dark:text-gray-300">
                    Together with its sister brand Filipino Homes, Rent.ph has serviced owners and companies in
                    marketing their lands, apartments, houses, condominiums, warehouses
                    and commercial spaces across the country through our network of rent professionals in key cities and
                    provinces in the Philippines.
                </span>

                <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center lg:justify-start">
                    <div v-for="story in stories" :key="story.title" class="flex items-start gap-4">
                            <Icon :name="story.Icon" class="w-8 h-8 text-blue-600 mt-1 fill-blue-600/20" />

                        <div class="flex flex-col">

                            <h4 class="text-lg font-semibold">
                                {{ story.title }}
                            </h4>

                            <p class="text-gray-600 dark:text-gray-300">
                                {{ story.label }}
                            </p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>
