<script setup lang="ts">
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
import horizontalPropertyCard from '~/components/horizontalPropertyCard.vue'
import pagination from '~/components/pagination.vue'

const currentPage = ref(1)
const totalPages = ref(10)

const handlePageChange = (page: number) => {
  currentPage.value = page
  // Here you would typically fetch new data for the selected page
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
      </ClientOnly>
      
      <!-- Property Cards Section -->
      <div class="mt-12 space-y-6">
        <h2 class="text-2xl font-semibold mb-6 text-center">Available Properties</h2>
        <div class="flex flex-col gap-6 items-center justify-center">
          <horizontalPropertyCard v-for="_ in new Array(6)" :key="_" :heart-active="false" />
        </div>
        
        <!-- Pagination -->
        <div class="flex justify-center">
          <pagination 
            :current-page="currentPage" 
            :total-pages="totalPages" 
            @page-change="handlePageChange"
          />
        </div>
      </div>
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
