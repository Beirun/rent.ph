<script setup lang="ts">
import { ref, onMounted } from 'vue'
import agentscard from '~/components/rentManagers/agentscard.vue'
import agentsCardSkeleton from '~/components/rentManagers/agentsCardSkeleton.vue'
import agentSearchBar from '~/components/rentManagers/agentSearchBar.vue'

const managerStore = useManagerStore()
const showFilters = ref(false) // Toggle state for mobile sidebar

onMounted(async () => {
  await managerStore.getManagers(1, 8)
})

const handlePageChange = (page: number) => {
  // currentPage.value = page
  console.log('Changed to page:', page)
}


const categories: Record<string, string> = {
  'Farm Land': '1',
  Condominium: '1951',
  Studio: '730',
  '1 Bedroom': '489',
  '2 Bedroom': '334',
  '3 Bedroom': '70',
  'House and Lot': '1464',
  Apartment: '327',
  'Lot Only': '153',
  'Bed Space': '37',
  'Town House': '94',
  Dormitory: '7',
  'Commercial Spaces': '653',
  'Office Spaces': '254',
  Warehouse: '227',
  'Beach House': '8',
  'Conference Hall': '1',
  'Function Hall': '1',
  'Parking Space': '9',
  Others: '50',
}

const topSearches: string[] = [
  'Condominium for rent in Cebu City',
  'House and lot for rent in Lapu-Lapu City',
  'House and lot for rent in Mactan',
  'Studio Unit for rent in Makati',
  'Unit for rent in Bonifacio Global City',
  'Commercial Space in Philippines',
  'Commercial Spaces in Mandaue City',
  'Warehouse for rent in Cagayan de Oro',
  'Pet friendly unit in Manila',
  'For rent in Batangas',
  'Warehouse for lease in General Santos',
  'Commercial space for rent in Gensan',
  'Davao house and lot for rent',
  'Davao studio unit for rent',
  '1 bedroom unit for rent in Davao City',
  'Warehouse for rent in Puerto Princesa',
  '2BR condo w/ parking for rent in Cebu City',
  'Parking Space for rent',
  'Rental properties in Pampanga',
  '1 Bedroom in Cebu City',
  'Studio in Metro Manila',
  'Rental Properties in Makati City',
]
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col overflow-x-hidden bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
    <ClientOnly>
      <navbar />
    </ClientOnly>

    <div class="flex flex-col w-full px-4 sm:px-6 md:px-10 pt-20 md:pt-32 pb-10 md:pb-20">
      <header class="mb-6 md:mb-10 text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100">
          Rent Managers
        </h1>
        <p class="text-gray-500 dark:text-zinc-400 mt-2">Find the best agents to manage your properties.</p>
      </header>

      <button
        @click="showFilters = !showFilters"
        class="md:hidden mb-6 w-full py-3 px-4 bg-[#fe8e0a] text-white rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform"
      >
        <Icon :name="showFilters ? 'lucide:x' : 'lucide:list-filter'" class="size-5 text-white font-bold" />
        {{ showFilters ? 'Close Categories' : 'Filter by Category' }}
      </button>

      <div class="flex flex-col md:flex-row gap-8 relative">
        <aside 
          :class="[
            'md:w-1/4 lg:w-1/6 space-y-6 transition-all duration-300 overflow-hidden',
            showFilters ? 'max-h-250 opacity-100 mb-8' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
          ]"
        >
          <div class="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 class="font-bold text-lg bg-orange-100 dark:bg-orange-900/30 text-orange-400 px-3 py-2 rounded-lg flex items-center gap-2">
              <Icon name="lucide:layout-grid" class="size-4 text-orange-400" />
              Categories
            </h2>
            
            <div class="mt-4 divide-y divide-gray-50 dark:divide-zinc-800">
              <div v-for="(listings, category) in categories" :key="category" class="group">
                <a href="#" class="flex justify-between py-3 text-sm text-gray-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                  <span class="font-medium">{{ category }}</span>
                  <span class="text-xs bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20">
                    {{ listings }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        <main class="flex-1">
          <div class="w-full">
            <ClientOnly>
              <agentSearchBar />
            </ClientOnly>

            <div class="mt-8 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              <agentsCardSkeleton
                v-if="managerStore.loading"
                v-for="_ in 8"
                :key="`skeleton-${_}`"
                orientation="vertical"
              />
              <agentscard
                v-else
                v-for="manager in managerStore.managers"
                :key="manager.id"
                v-bind="manager"
                orientation="vertical"
                class="w-full"
              />
            </div>

            <div v-if="!managerStore.loading && managerStore.managers.length === 0" class="text-center py-20">
              <Icon name="lucide:user-search" class="size-16 mx-auto text-gray-300" />
              <p class="mt-4 text-gray-500">No managers found in this category.</p>
            </div>

            <div class="flex justify-center mt-12 mb-10">
              <pagination
                :current-page="managerStore.pagination?.current_page ?? 1"
                :total-pages="managerStore.pagination?.total ?? 1"
                @page-change="handlePageChange"
              />
            </div>
          </div>
        </main>
      </div>
    </div>

    <div class="mt-auto">
      <ClientOnly>
        <Backlinks />
        <Footer />
      </ClientOnly>
    </div>
  </div>
</template>
