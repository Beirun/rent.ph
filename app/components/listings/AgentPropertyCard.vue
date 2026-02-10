<script setup lang="ts">
import type { Property } from '~/models/agentBasedProperty.ts'

const props = defineProps<{
  property: Property
}>()

// Format price with PHP currency
const formattedPrice = computed(() => {
  const val = parseFloat(props.property.price)
  return isNaN(val) ? '0.00' : val.toLocaleString()
})

// Determine display name from owner fields or title
const ownerName = computed(() => {
  if (props.property.owner_first_name) {  
    return `${props.property.owner_first_name} ${props.property.owner_last_name || ''}`
  }
  return 'Agent'
})

// Handle image - API gives image_id, you might need a full URL builder
// Replacing with a placeholder if the API doesn't provide a direct URL string
const displayImage = computed(() => {
  // If your API provides a way to get the URL via image_id, use it here
  return '/img.png' 
})

const goToProperty = () => {
  navigateTo(`/property/${props.property.slug}`)
}
</script>

<template>
  <div 
    @click="goToProperty"
    class="group rounded-xl w-full flex flex-col border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden cursor-pointer hover:shadow-lg transition-all"
  >
    <div class="h-48 w-full bg-gray-200 dark:bg-zinc-800 relative overflow-hidden">
      <img 
        :src="displayImage" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        alt="Property Image"
      />
      
      <div class="absolute top-2 left-2 flex gap-2">
        <span class="py-1 px-3 text-[10px] font-bold uppercase text-white bg-blue-600 rounded-lg shadow-sm">
          {{ property.status }}
        </span>
        <span v-if="property.rapa_verified" class="py-1 px-3 text-[10px] font-bold uppercase text-white bg-green-500 rounded-lg shadow-sm">
          Verified
        </span>
      </div>
    </div>

    <div class="p-4 flex flex-col gap-2">
      <div class="text-base font-bold text-gray-900 dark:text-white truncate">
        {{ property.title }}
      </div>
      
      <div class="flex items-center text-gray-500 dark:text-gray-400 text-xs">
        <Icon name="lucide:map-pin" class="mr-1 size-3" />
        <span class="truncate">{{ property.address }}, {{ property.city }}</span>
      </div>

      <div class="text-lg font-bold text-blue-600 mt-1">
        ₱{{ formattedPrice }}
        <span class="text-[10px] font-normal text-gray-400">/{{ property.price_type || 'month' }}</span>
      </div>

      <div class="flex items-center justify-between py-3 border-y border-gray-50 dark:border-zinc-800 my-1">
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-1 text-gray-900 dark:text-white font-semibold text-sm">
            <Icon name="lucide:bed" class="size-3.5 text-blue-500" /> {{ property.bed }}
          </div>
          <span class="text-[9px] text-gray-400 uppercase">Beds</span>
        </div>
        <div class="flex flex-col items-center border-x border-gray-100 dark:border-zinc-800 px-4">
          <div class="flex items-center gap-1 text-gray-900 dark:text-white font-semibold text-sm">
            <Icon name="lucide:bath" class="size-3.5 text-blue-500" /> {{ property.bathroom }}
          </div>
          <span class="text-[9px] text-gray-400 uppercase">Baths</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-1 text-gray-900 dark:text-white font-semibold text-sm">
            <Icon name="lucide:maximize" class="size-3.5 text-blue-500" /> {{ property.area }}
          </div>
          <span class="text-[9px] text-gray-400 uppercase">{{ property.area_unit }}</span>
        </div>
      </div>

      <div class="flex justify-between items-center mt-1">
        <div class="flex items-center gap-2">
          <div class="size-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[10px] font-bold text-blue-600">
            {{ ownerName.substring(0, 2).toUpperCase() }}
          </div>
          <div class="flex flex-col">
            <span class="text-[10px] font-bold text-gray-700 dark:text-zinc-300">{{ ownerName }}</span>
            <span class="text-[8px] text-gray-400">Owner/Agent</span>
          </div>
        </div>
        
        <div class="flex gap-2">
           <button class="p-1.5 rounded-lg bg-gray-50 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            <Icon name="lucide:edit-3" class="size-3.5 text-gray-600 dark:text-zinc-400" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>