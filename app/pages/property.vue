<script setup lang="ts">
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
import pagination from '~/components/pagination.vue'
import PropertiesPage from '~/components/propertiesPage.vue'

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

      <div class="mt-12 space-y-6">
        <PropertiesPage />

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
