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
    <div class="container mx-auto px-10 pt-30 pb-20">
      <h1 class="text-4xl font-semibold mb-8">Property for Rent</h1>
      <ClientOnly>
        <propertySearchBar />
        <propertiesAndListings2 :properties="properties" />
      </ClientOnly>

      <!-- <div class="mt-12 space-y-6">
        <PropertiesPage />

        <div class="flex justify-center">
          <pagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-change="handlePageChange"
          />
        </div>
      </div> -->
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
