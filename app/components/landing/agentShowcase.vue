<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement[]>([])

const initAutoplay = (api: any) => {
  if (!api) return

  const startAutoplay = () => {
    return setInterval(() => {
      api.scrollNext()
    }, 4000)
  }

  let autoplayTimer = startAutoplay()

  api.on('select', () => {
    clearInterval(autoplayTimer)
    autoplayTimer = startAutoplay()
  })
}

const agents = ref([
  {
    id: 1,
    name: 'Rica Grate',
    avatar: '/rica.jpg',
    listings: 127,
    phone: '+63 917 123 4567',
    email: 'rica.grate@rent.ph',
    location: 'Makati City',
  },
  {
    id: 2,
    name: 'Elaine Mae Ofiaza',
    avatar: '/elaine-gemini.png',
    listings: 98,
    phone: '+63 918 234 5678',
    email: 'elaine.ofiaza@rent.ph',
    location: 'BGC, Taguig',
  },
  {
    id: 3,
    name: 'Sammy & Jave',
    avatar: '/javie-gemini.png',
    listings: 85,
    phone: '+63 919 345 6789',
    email: 'sammy.jave@rent.ph',
    location: 'Quezon City',
  },
  {
    id: 4,
    name: 'Alex Johnson',
    avatar: '/rica.jpg',
    listings: 112,
    phone: '+63 920 456 7890',
    email: 'alex.johnson@rent.ph',
    location: 'Pasig City',
  },
  {
    id: 5,
    name: 'Maria Santos',
    avatar: '/elaine-gemini.png',
    listings: 76,
    phone: '+63 921 567 8901',
    email: 'maria.santos@rent.ph',
    location: 'Mandaluyong',
  },
  {
    id: 6,
    name: 'John Reyes',
    avatar: '/javie-gemini.png',
    listings: 94,
    phone: '+63 922 678 9012',
    email: 'john.reyes@rent.ph',
    location: 'San Juan',
  },
  {
    id: 7,
    name: 'Sarah Lee',
    avatar: '/rica.jpg',
    listings: 103,
    phone: '+63 923 789 0123',
    email: 'sarah.lee@rent.ph',
    location: 'Manila',
  },
  {
    id: 8,
    name: 'Carlos Cruz',
    avatar: '/elaine-gemini.png',
    listings: 88,
    phone: '+63 924 890 1234',
    email: 'carlos.cruz@rent.ph',
    location: 'Caloocan',
  },
  {
    id: 9,
    name: 'Anna Martinez',
    avatar: '/javie-gemini.png',
    listings: 91,
    phone: '+63 925 901 2345',
    email: 'anna.martinez@rent.ph',
    location: 'Las Piñas',
  },
  {
    id: 10,
    name: 'David Kim',
    avatar: '/rica.jpg',
    listings: 79,
    phone: '+63 926 012 3456',
    email: 'david.kim@rent.ph',
    location: 'Parañaque',
  },
  {
    id: 11,
    name: 'Lisa Wong',
    avatar: '/elaine-gemini.png',
    listings: 105,
    phone: '+63 927 123 4567',
    email: 'lisa.wong@rent.ph',
    location: 'Makati City',
  },
  {
    id: 12,
    name: 'Mark Tan',
    avatar: '/javie-gemini.png',
    listings: 82,
    phone: '+63 928 234 5678',
    email: 'mark.tan@rent.ph',
    location: 'BGC, Taguig',
  },
  {
    id: 13,
    name: 'Emma Davis',
    avatar: '/rica.jpg',
    listings: 96,
    phone: '+63 929 345 6789',
    email: 'emma.davis@rent.ph',
    location: 'Quezon City',
  },
  {
    id: 14,
    name: 'Ryan Garcia',
    avatar: '/elaine-gemini.png',
    listings: 71,
    phone: '+63 930 456 7890',
    email: 'ryan.garcia@rent.ph',
    location: 'Pasig City',
  },
  {
    id: 15,
    name: 'Sophie Chen',
    avatar: '/javie-gemini.png',
    listings: 108,
    phone: '+63 931 567 8901',
    email: 'sophie.chen@rent.ph',
    location: 'Mandaluyong',
  },
])

onMounted(() => {
  gsap.from(headerRef.value, {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: headerRef.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  cardsRef.value.forEach((card, index) => {
    if (card) {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }
  })
})
</script>
<template>
  <div class="px-4 sm:px-10 flex flex-col mt-10 md:mt-15 max-w-[98%] mx-auto">

    <div ref="headerRef" class="flex flex-col pl-4 w-full mb-8 text-left">
      <h1 class="text-3xl md:text-4xl font-bold">Our Star Agents</h1>
      <p class="uppercase pt-2 md:pt-4 text-xs md:text-sm text-gray-400 dark:text-gray-500">
        Meet Our Top Performers
      </p>
    </div>

    <div class="relative w-full lg:max-w-full mx-auto">
      <Carousel class="w-full" :opts="{
        align: 'start',
        loop: true,
      }" @init-api="initAutoplay">
        <CarouselContent class="-ml-2 md:-ml-4 pb-5">
          <CarouselItem v-for="agent in agents" :key="agent.id"
            class="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/5 flex justify-center">
            <div ref="cardsRef" class="relative w-full max-w-87.5 sm:max-w-sm lg:max-w-87.5 xl:max-w-87.5">
              <div
                class="relative rounded-xl cursor-pointer w-full h-112 md:h-128 flex flex-col bg-white dark:bg-[#1e1e1e] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-zinc-800 overflow-hidden group">
                <!-- Image Section with Overlay -->
                <div class="h-3/5 w-full relative overflow-hidden">
                  <div :style="{ backgroundImage: `url(${agent.avatar})` }"
                    class="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500">
                  </div>
                  <div class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

                  <!-- Logo Badge -->
                  <div class="absolute top-4 left-4">
                    <div class="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm">
                      <img src="/rmpro.jpeg" alt="RMPro" class="w-10 h-5 object-contain" />
                    </div>
                  </div>

                  <!-- Rating Badge -->
                  <div class="absolute bottom-4 right-4">
                    <div
                      class="flex gap-1 items-center bg-white/95 dark:bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                      <Icon name="ph:star-fill" class="size-3.5 text-amber-400" />
                      <span class="text-xs font-semibold text-gray-800 dark:text-gray-200">5.0</span>
                    </div>
                  </div>
                </div>

                <!-- Content Section -->
                <div class="h-2/5 w-full flex p-5 flex-col justify-between bg-white dark:bg-[#1e1e1e]">
                  <!-- Agent Name and Contact Button -->
                  <div class="flex items-start justify-between gap-2 mb-2">
                    <div class="flex-1 min-w-0">
                      <div class="text-lg font-bold text-[#262626] dark:text-[#e8e8e8] truncate mb-1">
                        {{ agent.name }}
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/30 rounded-md">
                          <span
                            class="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-tight">
                            {{ agent.listings }} Listings
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      class="shrink-0 size-9 rounded-full bg-linear-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                      title="Contact Agent">
                      <Icon name="ph:chat-circle-dots-fill" class="size-4 text-white" />
                    </button>
                  </div>

                  <!-- Contact Information -->
                  <div class="flex flex-col gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <a :href="`tel:${agent.phone}`"
                      class="flex items-center gap-2.5 min-w-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/item">
                      <div
                        class="shrink-0 size-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-950/30 transition-colors">
                        <Icon name="ph:phone-fill"
                          class="size-3.5 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400" />
                      </div>
                      <span class="truncate font-medium">{{ agent.phone }}</span>
                    </a>
                    <a :href="`mailto:${agent.email}`"
                      class="flex items-center gap-2.5 min-w-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/item">
                      <div
                        class="shrink-0 size-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-950/30 transition-colors">
                        <Icon name="ph:envelope-simple-fill"
                          class="size-3.5 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400" />
                      </div>
                      <span class="truncate font-medium">{{ agent.email }}</span>
                    </a>
                    <div class="flex items-center gap-2.5 min-w-0">
                      <div
                        class="shrink-0 size-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                        <Icon name="ph:map-pin-fill" class="size-3.5 text-gray-600 dark:text-gray-400" />
                      </div>
                      <span class="truncate font-medium">{{ agent.location }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious class="-left-4 lg:-left-12 hidden md:flex" />
        <CarouselNext class="-right-4 lg:-right-12 hidden md:flex" />
      </Carousel>
    </div>
  </div>
</template>
