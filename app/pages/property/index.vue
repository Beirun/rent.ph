<script setup lang="ts">
import { ref, onMounted } from 'vue'
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
import pagination from '~/components/pagination.vue'
import PropertiesPage from '~/components/propertiesPage.vue'
import propertiesAndListings2 from '~/components/propertiesAndListings2.vue'

interface Property {
  id: number
  title: string
  image: string
  price: string
  bed: number
  bathroom: number
  square: number
  address: string
  user_name: string
  user_avatar?: string
  agent_title: string
  agent_phone: string
  agent_email: string
}

const currentPage = ref(1)
const totalPages = ref(10)
const properties = ref<Property[]>([])
const loading = ref(true)

const categories = [
  'Farm Land',
  'Condominium',
  'Studio',
  '1 Bedroom',
  '2 Bedroom',
  '3 Bedroom',
  'House and Lot',
  'Apartment',
  'Lot Only',
  'Bed Space',
  'Town House',
  'Dormitory',
  'Commercial Spaces',
  'Office Spaces',
  'Warehouse',
  'Beach House',
  'Conference Hall',
  'Function Hall',
  'Parking Space',
  'Others'
]

const listings = [
  '1',
  '1951',
  '730',
  '489',
  '334',
  '70',
  '1464',
  '327',
  '153',
  '37',
  '94',
  '7',
  '653',
  '254',
  '227',
  '8',
  '1',
  '1',
  '9',
  '50'
]

const fetchProperties = async () => {
  try {
    const response = await fetch('https://rent.ph/api/properties')
    const data = await response.json()
    if (data.status === 'success') {
      properties.value = data.data
    }
  } catch (error) {
    console.error('Error fetching properties:', error)
  } finally {
    loading.value = false
  }
}

const handlePageChange = (page: number) => {
  currentPage.value = page
  console.log('Changed to page:', page)
}

onMounted(() => {
  fetchProperties()
})
</script>

<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    <div class=" w-full mx-5 px-10 pt-30 pb-20 justify-self-center">
      <h1 class="text-4xl font-semibold mb-8">Property for Rent</h1>
      <div class="flex flex-row">
        <div id="categoriesSection" class="w-1/6 border-1 border-gray-200 rounded-lg bg-white shadow-lg p-5">
          <h1 class="font-bold text-xl">Categories</h1>
          <div>
            <div>
              <template v-for="(link, index) in categories" :key="index">
                  <a
                    href="#" 
                    class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {{ link }}
                  </a>
              </template>
            </div>
          </div>
        </div>
        <div id="propertiesSection" class="w-5/6">
          <ClientOnly>
            <propertySearchBar />
            <propertiesAndListings2 :properties="properties" />
          </ClientOnly>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
