<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePropertyStore } from '@/stores/propertyStore';
import AgentPropertyCard from '~/components/listings/AgentPropertyCard.vue';
const propertyStore = usePropertyStore()
const router = useRouter()
const token = useCookie('access_token')

if (!token.value) {
  router.push('/dashboard/listings')
}

onMounted(async () => {
  // Only fetch if we actually have a token
  if (token.value) {
    await propertyStore.getMyListings()
  }
})
const filterStatus = ref('all') // 'all', 'active', 'inactive'
const isDropdownOpen = ref(false)

const filterOptions = [
  { value: 'all', label: 'All Properties', icon: 'lucide:list' },
  { value: 'active', label: 'Active Only', icon: 'lucide:check-circle' },
  { value: 'inactive', label: 'Inactive Only', icon: 'lucide:x-circle' }
]

const selectedOption = computed(() =>
  filterOptions.find(opt => opt.value === filterStatus.value)
)

const selectFilter = (value: string) => {
  filterStatus.value = value
  isDropdownOpen.value = false
  // You can emit this value or use it to filter your properties
}

// Close dropdown when clicking outside
const dropdownRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Filtered listings based on selected filter
const filteredListings = computed(() => {
  if (filterStatus.value === 'all') {
    return propertyStore.myListings
  }
  if (filterStatus.value === 'active') {
    return propertyStore.myListings.filter(property => property.status === 'active')
  }
  if (filterStatus.value === 'inactive') {
    return propertyStore.myListings.filter(property => property.status === 'inactive')
  }
  return propertyStore.myListings
})
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-8 min-h-screen bg-white dark:bg-[#0a0a0a]">
      <h1 class="text-3xl font-bold text-[#FE8E0A] uppercase tracking-tight">My Listings</h1>
      <p class="mt-4 text-gray-500 dark:text-gray-400 font-medium italic">Property listings management coming soon...
      </p>
      <div class="px-4 lg:px-12 py-10 min-h-screen">

        <div class="flex justify-between items-center mb-8">
          <div class="flex items-center gap-3">
            <NuxtLink to="/create-listing"
              class="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full font-medium text-sm hover:opacity-80 transition-opacity">
              + Add New Property
            </NuxtLink>

            <div class="relative" ref="dropdownRef">
              <button @click="isDropdownOpen = !isDropdownOpen" :class="[
                'flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all',
                filterStatus !== 'all'
                  ? 'bg-blue-500 dark:bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700'
              ]">
                <Icon :name="selectedOption?.icon || 'lucide:list'" class="size-4" />
                {{ selectedOption?.label || 'Filter' }}
                <Icon name="lucide:chevron-down"
                  :class="['size-4 transition-transform', isDropdownOpen ? 'rotate-180' : '']" />
              </button>

              <!-- Dropdown Menu -->
              <Transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <div v-if="isDropdownOpen"
                  class="absolute top-full mt-2 left-0 w-48 bg-white dark:bg-zinc-800 rounded-xl shadow-lg border border-gray-200 dark:border-zinc-700 py-1 z-50">
                  <button v-for="option in filterOptions" :key="option.value" @click="selectFilter(option.value)" :class="[
                    'w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors',
                    filterStatus === option.value
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700/50'
                  ]">
                    <Icon :name="option.icon" class="size-4" />
                    {{ option.label }}
                    <Icon v-if="filterStatus === option.value" name="lucide:check" class="size-4 ml-auto" />
                  </button>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <div v-if="propertyStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="n in 4" :key="n" class="h-87.5 bg-gray-100 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
        </div>

        <div v-else-if="propertyStore.myListings.length === 0"
          class="flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-dashed border-gray-300 dark:border-zinc-700">
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-full mb-4 shadow-sm">
            <Icon name="heroicons:home-modern" class="size-8 text-gray-400" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">No properties yet</h3>
          <p class="text-gray-500 text-sm mb-6 max-w-xs text-center">
            You haven't uploaded any properties. Start by creating your first listing.
          </p>
          <NuxtLink to="/create-listing" class="text-blue-600 hover:underline font-medium text-sm">
            Create a listing &rarr;
          </NuxtLink>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AgentPropertyCard v-for="property in filteredListings" :key="property.id" :property="property" />
        </div>

      </div>
    </div>
  </NuxtLayout>
</template>