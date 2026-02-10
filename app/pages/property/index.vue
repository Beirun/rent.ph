<script setup lang="ts">
import { ref, onMounted } from 'vue'
import navbar from '~/components/navbar.vue'
import propertySearchBar from '~/components/listings/propertySearchBar.vue'
import propertiesAndListings2 from '~/components/listings/propertiesAndListings2.vue'

const propertyStore = usePropertyStore()

// const handlePageChange = (page: number) => {
//   currentPage.value = page
//   console.log('Changed to page:', page)
// }
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
const showMobileFilters = ref(false) // Add this line
onMounted(async () => {
  await propertyStore.getPropertiesbyCategory()
})

</script>

<template>
  <div class="w-screen min-h-screen flex flex-col overflow-x-hidden bg-gray-50 dark:bg-zinc-950 transition-colors duration-300">
    <ClientOnly>
      <navbar />
    </ClientOnly>

    <div class="flex flex-col w-full px-4 md:px-10 pt-24 md:pt-32 max-w-8xl mx-auto">
      <header class="mb-8 flex flex-col justify-center gap-2">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-zinc-100">Property for Rent</h1>
        <p class="text-gray-500 dark:text-zinc-400 mt-2">Find the best properties of your choice.</p>

      </header>

      <button
        @click="showMobileFilters = !showMobileFilters"
        class="lg:hidden mb-6 w-full py-3 px-4 bg-[#fe8e0a] text-white rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform"
      >
        <Icon :name="showMobileFilters ? 'lucide:x' : 'lucide:list-filter'" class="size-5 text-[#fafafa] font-bold " />
        {{ showMobileFilters ? 'Close Filters' : 'Categories & Top Searches' }}
      </button>

      <div class="flex flex-col lg:flex-row gap-4 relative">
        
        <aside 
          :class="[
            'lg:w-1/5 xl:w-[15%]space-y-8 transition-all duration-300 overflow-hidden',
            showMobileFilters ? 'max-h-500 opacity-100 mb-10' : 'max-h-0 opacity-0 lg:max-h-none lg:opacity-100'
          ]"
        >
          <div class="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 class="font-bold text-lg bg-orange-100 dark:bg-orange-900/30 text-orange-400 px-3 py-2 rounded-lg flex items-center gap-2">
              <Icon name="lucide:layout-grid" class="size-4 text-orange-400" />
              Categories
            </h2>
            <div class="mt-4 divide-y divide-gray-50 dark:divide-zinc-800">
              <div v-for="(listings, category) in categories" :key="category" class="group">
                <a href="#" class="flex justify-between py-3 text-sm text-gray-600 dark:text-zinc-400 hover:text-orange-600 transition-colors">
                  <span>{{ category }}</span>
                  <span class="text-xs bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full group-hover:bg-orange-50">
                    {{ listings }}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800">
            <h2 class="font-bold text-lg bg-blue-50 dark:bg-blue-900/30 text-blue-500 px-3 py-2 rounded-lg flex items-center gap-2">
              <Icon name="lucide:trending-up" class="size-4" />
              Top Searches
            </h2>
            <div class="mt-4 space-y-1">
              <div v-for="search in topSearches" :key="search">
                <a href="#" class="block py-2 text-sm text-gray-600 dark:text-zinc-400 hover:text-blue-600 transition-colors">
                  {{ search }}
                </a>
              </div>
            </div>
          </div>
        </aside>

        <main class="w-full lg:w-3/4 flex flex-col">
          <ClientOnly>
            <div class="flex flex-col">
              <propertySearchBar />
              <propertiesAndListings2 :properties="propertyStore.properties" />
            </div>  
          </ClientOnly>
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