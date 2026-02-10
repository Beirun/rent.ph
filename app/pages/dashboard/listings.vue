<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePropertyStore } from '@/stores/propertyStore';
import cardListingPropertiesPage from '~/components/listings/cardListingPropertiesPage.vue';

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
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-8 min-h-screen bg-white dark:bg-[#0a0a0a]">
      <h1 class="text-3xl font-bold text-[#FE8E0A] uppercase tracking-tight">My Listings</h1>
      <p class="mt-4 text-gray-500 dark:text-gray-400 font-medium italic">Property listings management coming soon...</p>
    <div class="px-4 lg:px-12 py-10 min-h-screen">
    
    <div class="flex justify-between items-center mb-8">
      <NuxtLink to="/create-listing" 
        class="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full font-medium text-sm hover:opacity-80 transition-opacity">
        + Add New Property
      </NuxtLink>
    </div>

    <div v-if="propertyStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="n in 4" :key="n" class="h-[350px] bg-gray-100 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
    </div>

    <div v-else-if="propertyStore.myListings.length === 0" class="flex flex-col items-center justify-center py-20 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-dashed border-gray-300 dark:border-zinc-700">
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

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      <cardListingPropertiesPage 
        v-for="property in propertyStore.myListings" 
        :key="property.id" 
        v-bind="property" 
        orientation="vertical"
      />
    </div>

  </div>
    </div>
  </NuxtLayout>
</template>
