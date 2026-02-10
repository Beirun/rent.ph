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
      <Carousel
        class="w-full"
        :opts="{
          align: 'start',
          loop: true,
        }"
        @init-api="initAutoplay"
      >
        <CarouselContent class="-ml-2 md:-ml-4">
          <CarouselItem 
            v-for="agent in agents" 
            :key="agent.id" 
            class="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/5 flex justify-center"
          >
            <div ref="cardsRef" class="relative w-full max-w-[350px] sm:max-w-sm lg:max-w-[350px] xl:max-w-[350px]">
              <div
                class="relative rounded-2xl cursor-pointer w-full h-[28rem] md:h-[32rem] flex flex-col bg-white dark:bg-[#1e1e1e] shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-zinc-800"
              >
                <div class="h-3/5 w-full relative rounded-t-2xl overflow-hidden">
                  <div
                    :style="{ backgroundImage: `url(${agent.avatar})` }"
                    class="absolute inset-0 bg-cover bg-center"
                  ></div>
                  <div class="absolute top-4 left-4">
                    <img src="/rmpro.jpeg" alt="RMPro" class="w-12 h-6 object-contain" />
                  </div>
                </div>

                <div class="h-2/5 w-full flex p-4 flex-col justify-between bg-white dark:bg-[#1e1e1e] rounded-b-2xl">
                  <div class="text-lg font-bold text-[#262626] dark:text-[#e8e8e8]/90 text-center truncate">
                    {{ agent.name }}
                  </div>
                  
                  <div class="flex justify-between items-center">
                    <div class="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-tighter">
                      {{ agent.listings }} Listings
                    </div>
                    <div class="flex gap-0.5 items-center">
                      <Icon
                        v-for="_ in 5"
                        :key="_"
                        name="radix-icons:star-filled"
                        class="size-3 text-yellow-500"
                      />
                    </div>
                  </div>

                  <div class="flex flex-col gap-1.5 text-[11px] text-gray-600 dark:text-gray-400">
                    <div class="flex items-center gap-2 min-w-0">
                      <Icon name="lucide:phone" class="size-3 shrink-0" />
                      <span class="truncate">{{ agent.phone }}</span>
                    </div>
                    <div class="flex items-center gap-2 min-w-0">
                      <Icon name="lucide:mail" class="size-3 shrink-0" />
                      <span class="truncate">{{ agent.email }}</span>
                    </div>
                    <div class="flex items-center gap-2 min-w-0">
                      <Icon name="lucide:map-pin" class="size-3 shrink-0" />
                      <span class="truncate">{{ agent.location }}</span>
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

