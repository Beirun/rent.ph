<template>
  <div class="px-10 flex flex-col mt-10 max-w-[98%] mx-auto">
    <div ref="headerRef" class="flex flex-col w-full">
      <h1 class="text-4xl font-bold">Our Star Agents</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">Top Performers This Month</p>
    </div>

    <div
      class="flex flex-col md:flex-row gap-6 md:gap-12 mt-10 max-w-7xl mx-auto items-center md:items-start justify-center"
    >
      <div
        v-for="agent in topAgents"
        :key="agent.rank"
        ref="cardsRef"
        class="relative w-full max-w-sm md:flex-shrink-0"
        :class="[
          agent.rank === 2
            ? 'md:order-1 md:mt-8'
            : agent.rank === 1
              ? 'md:order-2'
              : 'md:order-3 md:mt-8',
          agent.rank === 1 ? 'scale-105 md:scale-110' : 'scale-100',
        ]"
      >
        <div
          class="relative rounded-2xl cursor-pointer w-full h-96 md:w-80 md:h-100 flex flex-col bg-white dark:bg-[#1e1e1e] shadow-lg transition-all duration-300 hover:scale-[1.02]"
          :class="[agent.rank === 1 ? 'shadow-2xl' : agent.rank === 2 ? 'shadow-xl' : 'shadow-lg']"
        >
          <div class="h-3/5 w-full relative rounded-t-2xl overflow-hidden">
            <div
              :style="{ backgroundImage: `url(${agent.avatar})` }"
              class="absolute inset-0 bg-cover bg-center object-cover"
            ></div>

            <div
              class="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              :class="getBadgeConfig(agent.rank).bgColor"
            >
              <Icon
                :name="getBadgeConfig(agent.rank).icon"
                class="w-7 h-7"
                :class="getBadgeConfig(agent.rank).iconColor"
              />
            </div>

            <span
              class="absolute top-0 left-0 py-1.5 px-4 text-sm text-[#fafafa] rounded-tl-2xl rounded-br-2xl shadow-sm"
              :class="[
                agent.rank === 1
                  ? 'bg-yellow-500'
                  : agent.rank === 2
                    ? 'bg-gray-500'
                    : agent.rank === 3
                      ? 'bg-amber-600'
                      : 'bg-blue-500',
              ]"
            >
              #{{ agent.rank }}
            </span>
          </div>

          <div
            class="h-2/5 w-full flex p-4 flex-col justify-between bg-white dark:bg-[#1e1e1e] rounded-b-2xl"
          >
            <div class="text-lg font-medium text-[#262626] dark:text-[#e8e8e8]/80 text-center">
              {{ agent.name }}
            </div>
            <div class="flex justify-between items-center">
              <div class="text-sm font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">
                {{ agent.listings }} Listings
              </div>
              <div class="flex gap-1 items-center">
                <Icon
                  v-for="_ in 5"
                  name="radix-icons:star-filled"
                  class="size-3 text-yellow-500"
                />
              </div>
            </div>
            <div class="flex flex-col gap-1 text-xs text-[#262626]/60 dark:text-[#e8e8e8]/50">
              <div class="flex items-center gap-1">
                <Icon name="lucide:phone" class="size-3" />
                <span>{{ agent.phone }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="lucide:mail" class="size-3" />
                <span>{{ agent.email }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="lucide:map-pin" class="size-3" />
                <span>{{ agent.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement[]>([])
const heartActive = ref(false)

// Sample data - replace with your actual agent data from API/props
const topAgents = ref([
  {
    rank: 1,
    name: 'Rica Grate',
    avatar: '/rica.jpg',
    listings: 127,
    phone: '+63 917 123 4567',
    email: 'rica.grate@rent.ph',
    location: 'Makati City',
  },
  {
    rank: 2,
    name: 'Elaine Mae Ofiaza',
    avatar: '/elaine-gemini.png',
    listings: 98,
    phone: '+63 918 234 5678',
    email: 'elaine.ofiaza@rent.ph',
    location: 'BGC, Taguig',
  },
  {
    rank: 3,
    name: 'Sammy & Jave',
    avatar: '/javie-gemini.png',
    listings: 85,
    phone: '+63 919 345 6789',
    email: 'sammy.jave@rent.ph',
    location: 'Quezon City',
  },
])

const getBadgeConfig = (
  rank: number,
): {
  label: string
  icon: string
  bgColor: string
  iconColor: string
} => {
  const configs: Record<
    number,
    { label: string; icon: string; bgColor: string; iconColor: string }
  > = {
    1: {
      label: 'Top Agent',
      icon: 'lucide:crown',
      bgColor: 'bg-yellow-500',
      iconColor: 'text-yellow-100',
    },
    2: {
      label: 'Star Agent',
      icon: 'lucide:medal',
      bgColor: 'bg-gray-500',
      iconColor: 'text-gray-100',
    },
    3: {
      label: 'Rising Star',
      icon: 'lucide:trophy',
      bgColor: 'bg-amber-600',
      iconColor: 'text-amber-100',
    },
  }

  return (
    configs[rank] || {
      label: 'Agent',
      icon: 'lucide:award',
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-100',
    }
  )
}

onMounted(() => {
  // Header animation - subtle
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

  // Cards animation - reduced bounce
  cardsRef.value.forEach((card, index) => {
    if (card) {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.15,
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
