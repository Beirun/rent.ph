<script setup lang="ts">
import { Skeleton } from '../ui/skeleton'
import { ref, onMounted, computed } from 'vue'
import { usePropertyStore } from '@/stores/propertyStore'
import PropertyCarousel from './propertyCarousel.vue';

const props = defineProps<{
  properties: any[]
}>()

const propertyStore = usePropertyStore()

const popularListings = ref<any[]>([])
const recentListings = ref<any[]>([])
const nearbyListings = ref<any[]>([])
const newListings = ref<any[]>([])
const budgetListings = ref<any[]>([])

const isLoading = ref(true)
const activeTab = ref('Popular')

const tabs = [
  { name: 'Popular', label: 'Popular Listings', subtitle: 'Top picks from our community' },
  { name: 'Recent', label: 'Recently Visited', subtitle: 'Pick up where you left off' },
  { name: 'Nearby', label: 'Listings Near You', subtitle: 'Properties right around the corner' },
  { name: 'New', label: 'New Listings', subtitle: 'Freshest properties added to our platform' },
  { name: 'Budget', label: 'Budget Friendly', subtitle: 'High-quality homes that fit your wallet perfectly' },
]

const currentListings = computed(() => {
  switch (activeTab.value) {
    case 'Popular': return popularListings.value
    case 'Recent': return recentListings.value
    case 'Nearby': return nearbyListings.value
    case 'New': return newListings.value
    case 'Budget': return budgetListings.value
    default: return []
  }
})

const currentSubtitle = computed(() => {
  const tab = tabs.find(t => t.name === activeTab.value)
  return tab ? tab.subtitle : ''
})

onMounted(async () => {
  isLoading.value = true

  const results = await Promise.all([
    propertyStore.getPropertiesbyCategory(1, 8, 'order_by=views'),
    propertyStore.getPropertiesbyCategory(1, 8, 'order_by=last_viewed'), //no Cache Yet
    propertyStore.getPropertiesbyCategory(1, 8, 'location=cebu'), //no API yet
    propertyStore.getPropertiesbyCategory(1, 8, 'order_by=newest'),
    propertyStore.getPropertiesbyCategory(1, 8, 'order_by=price_asc')
  ])
  popularListings.value = results[0] || []
  recentListings.value = results[1] || []
  nearbyListings.value = results[2] || []
  newListings.value = results[3] || []
  budgetListings.value = results[4] || []

  isLoading.value = false
})
</script>

<template>
  <div class="lg:px-12 flex flex-col mt-1 max-w-full mx-auto">
    <div class="flex flex-col gap-6">
      <!-- Tabs Header -->
      <div class="flex items-start gap-2 overflow-x-auto scrollbar-hide md:justify-start">
        <button v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.name" :class="[
          'relative group tet-start px-4 py-2 cursor-pointer text-sm font-medium transition-all duration-300 whitespace-nowrap',
          activeTab === tab.name
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        ]">
          {{ tab.label }}

          <span :class="[
            'absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-full bg-blue-600 origin-center transition-transform duration-300 group-hover:scale-x-100',
            activeTab === tab.name ? 'scale-x-100' : 'scale-x-0',
          ]"></span>
        </button>
      </div>

      <!-- Content Area -->
      <div v-if="isLoading">
        <div class="space-y-4">
          <div class="flex flex-col w-full mt-4">
            <Skeleton class="h-8 w-48 mb-2" />
            <Skeleton class="h-4 w-64" />
          </div>
          <div class="relative group">
            <div class="flex gap-x-6 overflow-x-auto scrollbar-hide py-4 px-2">
              <div v-for="j in 4" :key="j" class="w-85 flex flex-col gap-4 shrink-0">
                <Skeleton class="h-56 w-full rounded-md" />
                <div class="p-2 flex flex-col gap-2">
                  <div class="flex justify-between">
                    <Skeleton class="h-6 w-24" />
                    <Skeleton class="h-6 w-16" />
                  </div>
                  <Skeleton class="h-5 w-3/4" />
                  <Skeleton class="h-4 w-1/2" />
                  <div class="flex gap-2">
                    <Skeleton class="h-4 w-12" />
                    <Skeleton class="h-4 w-12" />
                    <Skeleton class="h-4 w-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <PropertyCarousel
          :title="activeTab === 'Popular' ? 'Popular Listings' : tabs.find(t => t.name === activeTab)?.label || ''"
          :subtitle="currentSubtitle" :items="currentListings" :key="activeTab" />
      </div>
    </div>
  </div>
</template>
