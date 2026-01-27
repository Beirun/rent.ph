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
    <div class="min-h-screen w-full bg-white py-20">
        <div class="max-w-8xl mx-auto px-6 lg:px-20 flex flex-col gap-16">

            <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
                <h2 class="uppercase text-6xl font-bold">Achievements</h2>
                <div class="lg:w-[35%] text-justify text-gray-600 text-sm leading-relaxed">
                    <p> Together with its sister brand Filipino Homes, Rent.ph has serviced owners and companies in
                        marketing their lands, apartments, houses, condominiums, warehouses
                        and commercial spaces across the country through our network of rent professionals.</p>
                </div>
            </div>

            <div class="w-full flex flex-col">
                <div v-for="award in awards" :key="award.id" class="flex flex-col border-t border-gray-200 last:border-b">
                    
                    <div 
                        @click="toggleAward(award.id)"
                        class="group w-full flex items-center justify-between py-8 transition-colors hover:bg-gray-50 cursor-pointer"
                    >
                        <div class="flex flex-col w-32">
                            <span class="text-xs uppercase tracking-widest text-gray-400">{{ award.type }}</span>
                            <span class="text-xl font-medium">{{ award.year }}</span>
                        </div>

                        <div class="flex-1 flex justify-center">
                            <NuxtImg :src="award.photo" class="h-16 w-auto grayscale group-hover:grayscale-0 transition-all" />
                        </div>

                        <div class="w-[20%] text-right lg:text-left">
                            <p class="text-lg lg:text-2xl uppercase font-light tracking-tight">
                                {{ award.description }}
                            </p>
                        </div>
                    </div>

                    <div 
                        v-if="activeId === award.id" 
                        class="pb-10 flex items-center justify-center animate-in w-full fade-in slide-in-from-top-1 duration-300"
                    >
                        <div class="p-6 bg-gray-50 w-full flex items-center justify-center rounded-lg border border-gray-100">
                             <p class="text-gray-700 italic">"{{ award.details }}"</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>