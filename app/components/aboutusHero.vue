<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const rstats = [
    { count: '15+', label: 'Years of Experience' },
    { count: '5000+', label: 'Happy Clients' },
    { count: '98%', label: 'Homes Sold' },
]

// Simplified image array
const carouselImages = [
    '/top1.jpg',
    '/award2.jpg',
    '/award3.jpg',
    '/award4.jpg'
]

const currentIndex = ref(0)
let timer: any = null

// Auto-play logic
const startTimer = () => {
    timer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % carouselImages.length
    }, 3000) // Changes every 3 seconds
}

onMounted(() => startTimer())
onUnmounted(() => clearInterval(timer))
</script>

<template>
    <div class="h-screen w-full">
        <div class="flex flex-col lg:flex-row h-screen items-center justify-center gap-10 lg:gap-10 px-6 lg:px-20">
            
            <div class="flex flex-col justify-between gap-10 lg:gap-20 mt-30 lg:mt-0 text-center lg:text-left">
                <h1 class="text-4xl sm:text-5xl text-[#262626] dark:text-white/80 lg:text-7xl font-bold w-full lg:w-200">
                    Philippines #1 Property Rental Website
                </h1>

                <span class="text-base sm:text-lg lg:text-xl w-full lg:w-160 text-gray-600 dark:text-gray-300">
                    Awarded 2024 International Realtor of the year by National Association of Realtors
                </span>

                <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center lg:justify-start">
                    <div v-for="stat in rstats" :key="stat.label" class="flex flex-col gap-2 sm:gap-4 items-center">
                        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#fe8e0a]">
                            {{ stat.count }}
                        </h2>
                        <p class="text-gray-800 text-base sm:text-lg lg:text-xl dark:text-gray-300">
                            {{ stat.label }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative w-full lg:w-220 flex flex-col items-center">
                <div class="relative overflow-hidden rounded-lg w-full h-[35vh] sm:h-[45vh] lg:h-[60vh]">
                    <transition-group name="fade">
                        <div 
                            v-for="(img, index) in carouselImages" 
                            :key="img"
                            v-show="currentIndex === index"
                            class="absolute inset-0"
                        >
                            <NuxtImg
                                :src="img"
                                class="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </transition-group>
                </div>

                <div class="flex gap-2 mt-4">
                    <button 
                        v-for="(_, index) in carouselImages" 
                        :key="index"
                        @click="currentIndex = index"
                        class="w-3 h-3 rounded-full transition-colors duration-300"
                        :class="currentIndex === index ? 'bg-[#fe8e0a]' : 'bg-gray-300'"
                    ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
