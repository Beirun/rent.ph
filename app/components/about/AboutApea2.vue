<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const rstats = [
    { count: '15+', label: 'Years of Experience' },
    { count: '5000+', label: 'Happy Clients' },
    { count: '98%', label: 'Homes Sold' },
]

// Simplified image array
const carouselImages = [
    '/aboutApea2.jpg',
    '/Apea2.2.jpg',
    '/Apea2.3.jpg',
    '/Apea2.4.jpg',
  
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
    <div class="h-screen w-full bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div
            class="flex flex-col lg:flex-row h-screen items-center justify-center gap-12 lg:gap-20 px-6 lg:px-24 max-w-full mx-auto">

                      <div class="relative w-full lg:w-1/2 flex flex-col items-center">
                <div class="relative overflow-hidden rounded-2xl w-full h-[40vh] sm:h-[50vh] lg:h-[75vh] shadow-2xl">
                    <transition-group name="fade">
                        <div v-for="(img, index) in carouselImages" :key="img" v-show="currentIndex === index"
                            class="absolute inset-0">
                            <NuxtImg :src="img" class="w-full h-full object-contain rounded-md" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </transition-group>
                </div>

                <div class="flex gap-3 mt-8">
                    <button v-for="(_, index) in carouselImages" :key="index" @click="currentIndex = index"
                        class="h-1.5 transition-all duration-300 rounded-full"
                        :class="currentIndex === index ? 'w-12 bg-[#fe8e0a]' : 'w-3 bg-gray-300 dark:bg-zinc-800'"></button>
                </div>
            </div>

            <div class="flex flex-col justify-center gap-8 lg:gap-12 text-center lg:text-left lg:w-1/2">
                <div class="space-y-6">
                    <h2
                        class="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#262626] dark:text-white leading-[0.9] tracking-tighter">
                        Tech-Driven, <br class="hidden lg:block" />
                        <span class="text-[#fe8e0a]">Human-Centered</span> <br class="hidden lg:block" />
                    </h2>

                    <p
                        class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
                        We revolutionized the Philippine market by blending cutting-edge innovation with expert human
                        support.<br class="hidden xl:block" />
                        We ensure every rental journey is seamless, building trust through professional excellence and a
                        people-centric approach.
                    </p>
                </div>

                <div class="flex flex-wrap gap-8 sm:gap-12 justify-center lg:justify-start pt-4">
                    <NuxtLink
                        to="https://apea.asia/philippines/hall-of-fame-ph-2025/corporate-excellence-ph-2025/rent-ph-ce-2025/"
                        target="_blank"
                        class="px-8 py-3 bg-[#fe8e0a] text-white font-bold uppercase text-xs tracking-widest rounded-full hover:bg-[#e67e00] transition-colors shadow-lg shadow-orange-500/20">
                        Read Full Article
                    </NuxtLink>
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
