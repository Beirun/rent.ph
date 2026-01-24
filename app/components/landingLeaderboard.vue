<template>
  <div class="px-10 flex flex-col mt-10 max-w-[98%] mx-auto">
    <div ref="headerRef" class="flex flex-col w-full">
      <h1 class="text-4xl font-bold">Our Star Agents</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">Top Performers This Month</p>
    </div>

    <!-- Leaderboard Cards -->
    <div class="grid md:grid-cols-3 gap-8 mt-10">
      <!-- Agent Card -->
      <div
        v-for="agent in topAgents"
        :key="agent.rank"
        ref="cardsRef"
        class="relative"
        :class="agent.rank === 1 ? 'md:order-2' : agent.rank === 2 ? 'md:order-1' : 'md:order-3'"
      >
        <div
          class="relative bg-white dark:bg-[#2e2e2e] rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02]"
          :class="[getBadgeConfig(agent.rank).border, agent.rank === 1 ? 'md:-mt-4' : '']"
        >
          <!-- Rank Badge Header -->
          <div class="relative h-28 bg-gradient-to-br" :class="getBadgeConfig(agent.rank).gradient">
            <div
              class="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <Icon
                :name="getBadgeConfig(agent.rank).icon"
                class="w-7 h-7"
                :class="getBadgeConfig(agent.rank).iconColor"
              />
            </div>
          </div>

          <!-- Avatar -->
          <div class="relative px-6 -mt-16 pb-6">
            <div class="relative mx-auto w-32 h-32">
              <div
                class="absolute inset-0 bg-gradient-to-br rounded-full blur-sm opacity-50"
                :class="getBadgeConfig(agent.rank).gradient"
              ></div>
              <img
                :src="agent.avatar"
                :alt="agent.name"
                class="relative w-full h-full rounded-full border-4 border-white dark:border-[#2e2e2e] object-cover shadow-xl"
              />
              <div
                class="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-bold shadow-lg bg-gradient-to-r"
                :class="getBadgeConfig(agent.rank).gradient"
              >
                #{{ agent.rank }}
              </div>
            </div>

            <!-- Agent Info -->
            <div class="text-center mt-6 mb-4">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {{ agent.name }}
              </h3>
              <div
                class="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full"
              >
                <div
                  class="w-2 h-2 rounded-full bg-gradient-to-r"
                  :class="getBadgeConfig(agent.rank).gradient"
                ></div>
                <span class="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {{ agent.listings }} Active Listings
                </span>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="space-y-3 mb-4">
              <a
                :href="`tel:${agent.phone}`"
                class="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-zinc-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors group"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center"
                  :class="getBadgeConfig(agent.rank).gradient"
                >
                  <Icon name="lucide:phone" class="w-4 h-4 text-white" />
                </div>
                <span
                  class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"
                >
                  {{ agent.phone }}
                </span>
              </a>

              <a
                :href="`mailto:${agent.email}`"
                class="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-zinc-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors group"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center"
                  :class="getBadgeConfig(agent.rank).gradient"
                >
                  <Icon name="lucide:mail" class="w-4 h-4 text-white" />
                </div>
                <span
                  class="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 truncate"
                >
                  {{ agent.email }}
                </span>
              </a>

              <div
                class="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-zinc-800/50 rounded-lg"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center"
                  :class="getBadgeConfig(agent.rank).gradient"
                >
                  <Icon name="lucide:map-pin" class="w-4 h-4 text-white" />
                </div>
                <span class="text-sm text-gray-600 dark:text-gray-400">
                  {{ agent.location }}
                </span>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg bg-gradient-to-r"
              :class="getBadgeConfig(agent.rank).gradient"
            >
              View Listings
            </button>
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
  gradient: string
  icon: string
  border: string
  iconColor: string
} => {
  const defaultConfig = {
    gradient: 'from-orange-600 via-orange-700 to-orange-800',
    icon: 'lucide:trophy',
    border: 'border-orange-200 dark:border-orange-900/30',
    iconColor: 'text-orange-100',
  }

  const configs: Record<number, typeof defaultConfig> = {
    1: {
      gradient: 'from-amber-500 via-yellow-600 to-amber-700',
      icon: 'lucide:crown',
      border: 'border-amber-200 dark:border-amber-900/30',
      iconColor: 'text-amber-100',
    },
    2: {
      gradient: 'from-slate-400 via-slate-500 to-slate-600',
      icon: 'lucide:medal',
      border: 'border-slate-200 dark:border-slate-700',
      iconColor: 'text-slate-100',
    },
    3: defaultConfig,
  }

  return configs[rank] || defaultConfig
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
