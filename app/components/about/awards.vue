<script setup lang="ts">
import { ref } from 'vue'

interface Award { // Standard convention: Capitalized and singular
    id: number;
    type: string;
    year: number;
    description: string;
    photo: string;
    details: string;
}

// Track the active award ID
const activeId = ref<number | null>(null)

const toggleAward = (id: number) => {
    activeId.value = activeId.value === id ? null : id
}

const awards: Award[] = [
    { 
        id: 1, 
        type: 'Award', 
        year: 2013, 
        description: 'Philippines #1 Rental Website', 
        photo: '/trophy.png', 
        details: 'Awarded 2024 International Realtor of the year by National Association of Realtors' 
    },
        { 
        id: 2, 
        type: 'Placeholder', 
        year: 2014, 
        description: 'Philippines #1 Rental ', 
        photo: '/trophy.png', 
        details: 'Awarded 2025 International Realtor of the year by National Association of Realtors' 
    },
        { 
        id: 3, 
        type: 'Award', 
        year: 2015, 
        description: 'Philippines #1 Rental Website', 
        photo: '/trophy.png', 
        details: 'Awarded 2026 International Realtor of the year by National Association of Realtors' 
    },
        { 
        id: 4, 
        type: 'Placeholder', 
        year: 2016, 
        description: 'Philippines #1 Rental ', 
        photo: '/trophy.png', 
        details: 'Awarded 2027 International Realtor of the year by National Association of Realtors' 
    },
        { 
        id: 5, 
        type: 'Award', 
        year: 2017, 
        description: 'Philippines #1 Rental Website', 
        photo: '/trophy.png', 
        details: 'Awarded 2028 International Realtor of the year by National Association of Realtors' 
    },
]
</script>
<template>
    <div class="min-h-screen w-full bg-white dark:bg-zinc-950 py-12 md:py-20 transition-colors duration-300">
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10 md:gap-16">

            <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8">
                <h2 class="uppercase text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-900 dark:text-white leading-none">
                    Achievements
                </h2>
                <div class="w-full lg:w-[35%] text-left md:text-justify text-gray-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                    <p> Together with its sister brand Filipino Homes, Rent.ph has serviced owners and companies in
                        marketing their lands, apartments, houses, condominiums, warehouses
                        and commercial spaces across the country through our network of rent professionals.</p>
                </div>
            </div>

            <div class="w-full flex flex-col border-b border-gray-200 dark:border-zinc-800">
                <div v-for="award in awards" :key="award.id" 
                    class="flex flex-col border-t border-gray-200 dark:border-zinc-800 transition-colors">
                    
                    <div 
                        @click="toggleAward(award.id)"
                        class="group w-full flex flex-row items-center justify-between py-6 md:py-10 transition-colors hover:bg-gray-50 dark:hover:bg-zinc-900/50 cursor-pointer px-2"
                    >
                        <div class="flex flex-col w-20 md:w-32 shrink-0">
                            <span class="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 dark:text-zinc-500">
                                {{ award.type }}
                            </span>
                            <span class="text-lg md:text-2xl font-medium text-zinc-900 dark:text-zinc-200">
                                {{ award.year }}
                            </span>
                        </div>

                        <div class="flex-1 flex justify-center px-4">
                            <NuxtImg :src="award.photo" 
                                class="h-10 md:h-20 w-auto grayscale group-hover:grayscale-0 dark:brightness-90 dark:contrast-125 transition-all duration-500" />
                        </div>

                        <div class="w-1/2 md:w-[30%] lg:w-[25%] text-right">
                            <p class="text-sm md:text-xl lg:text-2xl uppercase font-light tracking-tight text-zinc-800 dark:text-zinc-300 leading-tight">
                                {{ award.description }}
                            </p>
                        </div>
                    </div>

                    <div 
                        v-if="activeId === award.id" 
                        class="pb-8 px-2 md:px-0 animate-in fade-in slide-in-from-top-2 duration-300"
                    >
                        <div class="p-5 md:p-8 bg-gray-50 dark:bg-zinc-900/80 w-full rounded-xl border border-gray-100 dark:border-zinc-800">
                             <p class="text-sm md:text-lg text-gray-700 dark:text-zinc-400 italic font-light text-center">
                                "{{ award.details }}"
                             </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>