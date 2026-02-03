<script setup lang="ts">
import { ref, onMounted } from 'vue'
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
import pagination from '~/components/pagination.vue'
import PropertiesPage from '~/components/propertiesPage.vue'
import propertiesAndListings2 from '~/components/propertiesAndListings2.vue'

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

onMounted(async () => {
  await propertyStore.getProperties()
})
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    <div class="flex flex-col w-full mx-5 px-10 pt-30 pb-20 justify-self-center">
      <h1 class="text-4xl font-semibold mb-8">Property for Rent</h1>

      <div class="flex flex-row gap-6">
        <!------------------------------------------------------------------------------------------------------>
        <div id="categoriesSection" class="w-1/6 h-fit mb-20">
          <h1 class="font-bold text-lg dark:text-black dark:bg-orange-300 bg-orange-300 px-3 rounded-sm py-1">Categories</h1>
            <div class="mt-5 mb-10">
              <template v-for="(listings, category, index) in categories" :key="category">
                <div class="flex justify-between mt-4 px-3">
                  <a href="#" class="text-sm text-gray-600 dark:text-white hover:text-blue-600 transition-colors">
                    {{ category }} 
                  </a>
                  <a href="#" class="text-sm text-gray-600 dark:text-white hover:text-blue-600 transition-colors">
                    {{ listings }} Properties
                  </a>
                </div>
              </template>
            </div>
          <h1 class="font-bold text-lg dark:text-black dark:bg-orange-300 bg-orange-300 px-3 rounded-sm py-1">Top Rental Searches</h1>
            <div class="mt-5">
              <template v-for="(searches in topSearches" :key="searches">
                <div class="flex justify-between mt-4 px-3">
                  <a href="#" class="text-sm text-gray-600 dark:text-white hover:text-blue-600 transition-colors ">
                    {{ searches }} 
                  </a>
                </div>
              </template>
            </div>
        </div>
        <!-------------------------------------------------------------------------------------------------------->
        <div id="propertiesSection" class="w-4/5 flex flex-col overflow-y-auto pr-2 custom-scrollbar" style="max-height: calc(175vh);">
          <ClientOnly>
            <propertySearchBar />
            <propertiesAndListings2 :properties="propertyStore.properties" />
          </ClientOnly>
        </div>
      </div>
    </div>
    <div class="pt-15">
      <ClientOnly>
        <Backlinks />
      </ClientOnly>
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>