<script setup lang="ts">
const showMore = ref({
  realEstate: false,
  popularSearches: false,
  propertyForSale: false,
  propertyForRent: false,
})

const realEstateLinks = [
  'Metro Manila Real Estate',
  'Cebu Real Estate',
  'Davao Real Estate',
  'Quezon City Real Estate',
  'Makati Real Estate',
  'Taguig Real Estate',
  'Pasig Real Estate',
  'Caloocan Real Estate',
  'Antipolo Real Estate',
  'Mandaluyong Real Estate',
  'Parañaque Real Estate',
  'Las Piñas Real Estate',
  'Valenzuela Real Estate',
  'Marikina Real Estate',
  'San Juan Real Estate',
  'Navotas Real Estate',
  'Malabon Real Estate',
  'Muntinlupa Real Estate',
  'Pasay Real Estate',
]

const popularSearchesLinks = [
  'Metro Manila Property for Sale',
  'Cebu Property for Sale',
  'Davao Property for Sale',
  'Quezon City Property for Sale',
  'Makati Property for Sale',
  'Taguig Property for Sale',
  'Pasig Property for Sale',
  'Caloocan Property for Sale',
  'Antipolo Property for Sale',
  'Mandaluyong Property for Sale',
  'Parañaque Property for Sale',
  'Las Piñas Property for Sale',
  'Valenzuela Property for Sale',
  'Marikina Property for Sale',
  'San Juan Property for Sale',
  'Navotas Property for Sale',
  'Malabon Property for Sale',
  'Muntinlupa Property for Sale',
  'Pasay Property for Sale',
]

const propertyForSaleLinks = [
  'Condos for Sale in Metro Manila',
  'Condos for Sale in Cebu',
  'Condos for Sale in Davao',
  'Houses for Sale in Quezon City',
  'Condos for Sale in Makati',
  'Condos for Sale in Taguig',
  'Condos for Sale in Pasig',
  'Townhouses for Sale in Cebu',
  'Lots for Sale in Davao',
  'Condos for Sale in Mandaluyong',
  'Houses for Sale in Parañaque',
  'Condos for Sale in Las Piñas',
  'Lots for Sale in Antipolo',
  'Condos for Sale in Muntinlupa',
  'Houses for Sale in Caloocan',
  'Condos for Sale in Pasay',
  'Townhouses for Sale in Taguig',
  'Lots for Sale in Makati',
]

const propertyForRentLinks = [
  'Property for Rent in Metro Manila',
  'Property for Rent in Cebu',
  'Property for Rent in Davao',
  'Property for Rent in Quezon City',
  'Property for Rent in Makati',
  'Property for Rent in Taguig',
  'Property for Rent in Pasig',
  'Property for Rent in Caloocan',
  'Property for Rent in Antipolo',
  'Property for Rent in Mandaluyong',
  'Property for Rent in Parañaque',
  'Property for Rent in Las Piñas',
  'Property for Rent in Valenzuela',
  'Property for Rent in Marikina',
  'Property for Rent in San Juan',
  'Property for Rent in Navotas',
  'Property for Rent in Malabon',
  'Property for Rent in Muntinlupa',
  'Property for Rent in Pasay',
]

const toggleMore = (
  section: 'realEstate' | 'popularSearches' | 'propertyForSale' | 'propertyForRent',
) => {
  showMore.value[section] = !showMore.value[section]
}
</script>
<template>
  <div class="px-12 mt-15 mb-28 w-[98%]">
    <div class="flex flex-col w-full mb-12">
      <h1 class="text-4xl font-bold">Find your preferred place with one click</h1>
      <p class="uppercase pt-4 text-gray-400 dark:text-gray-500">BACKLINKS</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Real Estate Market</h3>
        <div class="flex flex-col gap-2">
          <template v-for="(link, index) in realEstateLinks" :key="index">
            <a
              v-if="index < 7 || showMore.realEstate"
              href="#"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {{ link }}
            </a>
          </template>
          <button
            @click="toggleMore('realEstate')"
            class="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline text-left"
          >
            {{ showMore.realEstate ? 'Less' : 'More' }}
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Popular Searches</h3>
        <div class="flex flex-col gap-2">
          <template v-for="(link, index) in popularSearchesLinks" :key="index">
            <a
              v-if="index < 7 || showMore.popularSearches"
              href="#"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {{ link }}
            </a>
          </template>
          <button
            @click="toggleMore('popularSearches')"
            class="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline text-left"
          >
            {{ showMore.popularSearches ? 'Less' : 'More' }}
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Property for Sale</h3>
        <div class="flex flex-col gap-2">
          <template v-for="(link, index) in propertyForSaleLinks" :key="index">
            <a
              v-if="index < 7 || showMore.propertyForSale"
              href="#"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {{ link }}
            </a>
          </template>
          <button
            @click="toggleMore('propertyForSale')"
            class="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline text-left"
          >
            {{ showMore.propertyForSale ? 'Less' : 'More' }}
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Property for Rent</h3>
        <div class="flex flex-col gap-2">
          <template v-for="(link, index) in propertyForRentLinks" :key="index">
            <a
              v-if="index < 7 || showMore.propertyForRent"
              href="#"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {{ link }}
            </a>
          </template>
          <button
            @click="toggleMore('propertyForRent')"
            class="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline text-left"
          >
            {{ showMore.propertyForRent ? 'Less' : 'More' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
