<script setup lang="ts">
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
import pagination from '~/components/pagination.vue'
import PropertiesPage from '~/components/propertiesPage.vue'
import propertiesAndListings2 from '~/components/propertiesAndListings2.vue'

const currentPage = ref(1)
const totalPages = ref(10)

const properties = [
  {
    id: 1,
    type: 'Apartment',
    name: 'Modern Family Home',
    photo: '/hero.jpg',
    price: 850000,
    reviews: '5 • 12 Reviews',
    agent: 'Rebecca Ferguson',
    agentphoto: '/img.png',
    location: '123 Oak Street, Cebu City',
    specifications: [
      { bedrooms: 4, bathroom: 3, size: 2.4 }
    ]
  },
  {
    id: 2,
    type: 'House',
    name: 'Luxury Condo Unit',
    photo: '/aboutimg.png',
    price: 1200000,
    reviews: '4.8 • 20 Reviews',
    agent: 'Kobe Amaro',
    agentphoto: '/rebecca.png',
    location: 'IT Park, Cebu City',
    specifications: [
      { bedrooms: 2, bathroom: 2, size: 1.2 }
    ]
  },
  {
    id: 3,
    type: 'Motel',
    name: ' Condo Unit',
    photo: '/aboutimg2.png',
    price: 1200000,
    reviews: '4.8 • 20 Reviews',
    agent: 'Btryl Daren',
    agentphoto: '/rebecca.png',
    location: 'IT Park, Cebu City',
    specifications: [
      { bedrooms: 2, bathroom: 2, size: 1.2 }
    ]
  },
  {
    id: 4,
    type: 'Penthouse',
    name: 'Luxury Unit',
    photo: '/hero.jpg',
    price: 1200000,
    reviews: '4.8 • 20 Reviews',
    agent: 'Bernerd Orion',
    agentphoto: '/rebecca.png',
    location: 'IT Park, Cebu City',
    specifications: [
      { bedrooms: 2, bathroom: 2, size: 1.2 }
    ]
  },
  {
    id: 5,
    name: 'Sogo Unit',
    type: 'Hotel',
    photo: '/hero-dark.jpg',
    price: 1200000,
    reviews: '4.8 • 20 Reviews',
    agent: 'Kobe Amaro',
    agentphoto: '/rebecca.png',
    location: 'IT Park, Cebu City',
    specifications: [
      { bedrooms: 2, bathroom: 2, size: 1.2 }
    ]
  }, {
    id: 6,
    type: 'Condo',
    name: 'Luxury Condo Unit',
    photo: '/img.png',
    price: 1200000,
    reviews: '4.8 • 20 Reviews',
    agent: 'Kobe Amaro',
    agentphoto: '/rebecca.png',
    location: 'IT Park, Cebu City',
    specifications: [
      { bedrooms: 2, bathroom: 2, size: 1.2 }
    ]
  },
]

const handlePageChange = (page: number) => {
  currentPage.value = page
  console.log('Changed to page:', page)
}
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
        <PropertiesAndListings2 :properties="properties" />
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
