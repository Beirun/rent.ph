<script setup lang="ts">
import type { Property } from '~/models/agentBasedProperty.ts'

const props = defineProps<{
  property: Property
}>()

// Format price with PHP currency
const formattedPrice = computed(() => {
  const val = parseFloat(props.property.price)
  if (isNaN(val) || val === 0) return 'Not Listed'
  return `₱${val.toLocaleString()}`
})

// Format counts (Bed, Bath, Area)
const formatCount = (val: number | string | null) => {
  const num = Number(val)
  return num > 0 ? num : 'Not Listed'
}

// Determine display name from owner fields or title
const ownerName = computed(() => {
  if (props.property.owner_first_name) {
    return `${props.property.owner_first_name} ${props.property.owner_last_name || ''}`
  }
  return 'Agent'
})

// Handle image
const displayImage = computed(() => {
  if (props.property.image) {
    return props.property.image // Use full URL from API if available
  }
  if (props.property.image) {
    // Fallback if image URL is missing but ID exists (though API likely provides URL)
    // Since https://rent.ph/api/images/:id failed, we rely on property.image which is likely present.
    // If not, we might need another way, but for now, rely on property.image.
    return `https://rent.ph/api/images/${props.property.image}` // Keep as backup but doubtful
  }
  return '/img.png'
})

const goToProperty = () => {
  navigateTo(`/property/${props.property.slug}`)
}

const editProperty = () => {
  navigateTo(`/agent/editListing?id=${props.property.id}`)
}

// Static data for stats (you can replace with real data later)
const isRented = ref(false)
const stats = ref({
  clients: 0,
  inquiries: 1,
  views: 1195
})
</script>

<template>
  <div
    class="group rounded-xl w-full flex flex-col border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-lg transition-all">
    <div class="h-48 w-full bg-gray-200 dark:bg-zinc-800 relative overflow-hidden cursor-pointer" @click="goToProperty">
      <img :src="displayImage"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        alt="Property Image" />

      <div class="absolute top-2 left-2 flex gap-2">
        <span class="py-1 px-3 text-[10px] font-bold uppercase text-white bg-green-500 rounded-lg shadow-sm">
          {{ property.status }}
        </span>
      </div>
    </div>

    <div class="p-4 flex flex-col gap-3">
      <div
        class="text-lg font-bold text-blue-600 dark:text-blue-400 truncate cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        @click="goToProperty">
        {{ property.title }}
      </div>

      <div class="text-xl font-bold text-rose-600 dark:text-rose-400">
        {{ formattedPrice }}
        <span v-if="formattedPrice !== 'Not Listed'"
          class="text-xs font-normal text-gray-500 dark:text-gray-400 ml-1">{{ property.price_type || 'Monthly'
          }}</span>
      </div>

      <!-- Stats Badges -->
      <div class="flex items-center gap-2 flex-wrap">
        <div
          class="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/10 rounded-md border border-emerald-100 dark:border-emerald-900/20">
          <Icon name="lucide:users" class="size-3.5 text-emerald-600 dark:text-emerald-400" />
          <span class="text-xs font-medium text-emerald-700 dark:text-emerald-300">{{ stats.clients }} Clients</span>
        </div>
        <div
          class="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-900/10 rounded-md border border-amber-100 dark:border-amber-900/20">
          <Icon name="lucide:mail" class="size-3.5 text-amber-600 dark:text-amber-400" />
          <span class="text-xs font-medium text-amber-700 dark:text-amber-300">{{ stats.inquiries }} Inquiries</span>
        </div>
        <div
          class="flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 dark:bg-sky-900/10 rounded-md border border-sky-100 dark:border-sky-900/20">
          <Icon name="lucide:eye" class="size-3.5 text-sky-600 dark:text-sky-400" />
          <span class="text-xs font-medium text-sky-700 dark:text-sky-300">{{ stats.views }} Views</span>
        </div>
      </div>

      <!-- Property Details -->
      <div class="flex items-center justify-around py-3 border-y border-gray-100 dark:border-zinc-800">
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-1 text-gray-900 dark:text-white font-bold"
            :class="formatCount(property.bed) === 'Not Listed' ? 'text-xs' : 'text-lg'">
            {{ formatCount(property.bed) }}
          </div>
          <span class="text-[10px] text-gray-500 dark:text-gray-400 uppercase">Beds</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-1 text-gray-900 dark:text-white font-bold"
            :class="formatCount(property.bathroom) === 'Not Listed' ? 'text-xs' : 'text-lg'">
            {{ formatCount(property.bathroom) }}
          </div>
          <span class="text-[10px] text-gray-500 dark:text-gray-400 uppercase">Baths</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-1 text-gray-900 dark:text-white font-bold"
            :class="formatCount(property.area) === 'Not Listed' ? 'text-xs' : 'text-lg'">
            {{ formatCount(property.area) }}
          </div>
          <span class="text-[10px] text-gray-500 dark:text-gray-400 uppercase">{{ property.area_unit }}SQFT</span>
        </div>
      </div>

      <!-- Rented Toggle -->
      <div class="flex items-center justify-between py-2">
        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Rented:</span>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isRented" class="sr-only peer">
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-200 dark:peer-focus:ring-blue-900/50 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-blue-500 dark:peer-checked:bg-blue-600">
          </div>
        </label>
      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-2 gap-2">
        <button
          class="flex items-center justify-center gap-1.5 py-2 px-3 cursor-pointer bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md font-medium text-xs transition-colors shadow-sm"
          @click="editProperty">
          <Icon name="lucide:pencil" class="size-3.5 text-[#fafafa]" />
          Edit
        </button>
        <button
          class="flex items-center justify-center gap-1.5 py-2 px-3 cursor-pointer bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-md font-medium text-xs transition-colors shadow-sm">
          <Icon name="lucide:link" class="size-3.5 text-[#fafafa]" />
          Copy Link
        </button>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <button
          class="flex items-center justify-center gap-1.5 py-2 px-3 cursor-pointer bg-rose-500 hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700 text-white rounded-md font-medium text-xs transition-colors shadow-sm">
          <Icon name="lucide:trash-2" class="size-3.5 text-[#fafafa]" />
          Delete
        </button>
        <button
          class="flex items-center justify-center gap-1.5 py-2 px-3 cursor-pointer bg-slate-600 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800 text-white rounded-md font-medium text-xs transition-colors shadow-sm">
          <Icon name="lucide:eye-off" class="size-3.5 text-[#fafafa]" />
          Hide
        </button>
      </div>

      <!-- RAPA Upload Button -->
      <button
        class="flex items-center justify-center gap-2 py-2 px-3 cursor-pointer bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-xs transition-colors">
        <span class="text-gray-600 dark:text-gray-400">RAPA Upload:</span>
        <span class="text-blue-600 dark:text-blue-400 font-semibold">Click Here</span>
      </button>
    </div>
  </div>
</template>