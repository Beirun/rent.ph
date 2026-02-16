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
    class="group rounded-xl w-full flex flex-col border border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <!-- Image Section -->
    <div class="h-52 w-full bg-gray-100 dark:bg-zinc-800 relative overflow-hidden cursor-pointer" @click="goToProperty">
      <img :src="displayImage"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        alt="Property Image" />

      <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div class="absolute top-3 left-3 flex gap-2">
        <span class="py-1 px-3 text-[10px] font-bold uppercase text-white bg-emerald-500/90 backdrop-blur-sm rounded-md shadow-sm">
          {{ property.status }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5 flex flex-col gap-4">
      
      <!-- Header -->
      <div class="flex flex-col gap-1">
        <div class="text-xl font-bold text-blue-600 dark:text-blue-400">
          {{ formattedPrice }}
          <span v-if="formattedPrice !== 'Not Listed'"
            class="text-xs font-normal text-gray-400 dark:text-gray-500 ml-1 uppercase tracking-wide">{{ property.price_type || 'Monthly' }}</span>
        </div>
        <div
          class="text-base font-bold text-slate-800 dark:text-gray-200 truncate cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-tight"
          @click="goToProperty" :title="property.title">
          {{ property.title }}
        </div>
      </div>

      <!-- Stats Badges -->
      <div class="flex items-center gap-2 flex-wrap">
        <div
          class="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 rounded-full border border-emerald-100 dark:border-emerald-500/20">
          <Icon name="lucide:users" class="size-3 text-emerald-600 dark:text-emerald-400" />
          <span class="text-[10px] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-300">{{ stats.clients }} Clients</span>
        </div>
        <div
          class="flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-500/10 rounded-full border border-amber-100 dark:border-amber-500/20">
          <Icon name="lucide:mail" class="size-3 text-amber-600 dark:text-amber-400" />
          <span class="text-[10px] sm:text-xs font-semibold text-amber-700 dark:text-amber-300">{{ stats.inquiries }} Inquiries</span>
        </div>
        <div
          class="flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 dark:bg-sky-500/10 rounded-full border border-sky-100 dark:border-sky-500/20">
          <Icon name="lucide:eye" class="size-3 text-sky-600 dark:text-sky-400" />
          <span class="text-[10px] sm:text-xs font-semibold text-sky-700 dark:text-sky-300">{{ stats.views }} Views</span>
        </div>
      </div>

      <!-- Property Details -->
      <div class="flex items-center justify-around py-3 border-y border-slate-50 dark:border-zinc-800/50">
        <div class="flex flex-col items-center gap-0.5">
          <div class="flex items-center gap-1 text-slate-700 dark:text-zinc-300 font-bold"
            :class="formatCount(property.bed) === 'Not Listed' ? 'text-xs' : 'text-lg'">
            {{ formatCount(property.bed) }}
          </div>
          <span class="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Beds</span>
        </div>
        <div class="h-8 w-px bg-slate-100 dark:bg-zinc-800"></div>
        <div class="flex flex-col items-center gap-0.5">
          <div class="flex items-center gap-1 text-slate-700 dark:text-zinc-300 font-bold"
            :class="formatCount(property.bathroom) === 'Not Listed' ? 'text-xs' : 'text-lg'">
            {{ formatCount(property.bathroom) }}
          </div>
          <span class="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Baths</span>
        </div>
        <div class="h-8 w-px bg-slate-100 dark:bg-zinc-800"></div>
        <div class="flex flex-col items-center gap-0.5">
          <div class="flex items-center gap-1 text-slate-700 dark:text-zinc-300 font-bold"
            :class="formatCount(property.area) === 'Not Listed' ? 'text-xs' : 'text-lg'">
            {{ formatCount(property.area) }}
          </div>
          <span class="text-[10px] text-gray-400 uppercase tracking-wider font-medium">{{ property.area_unit }}SQFT</span>
        </div>
      </div>

      <!-- Rented Toggle -->
      <div class="flex items-center justify-between py-1 px-1">
        <span class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Mark as Rented</span>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isRented" class="sr-only peer">
          <div
            class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-100 dark:peer-focus:ring-blue-900/30 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-zinc-600 peer-checked:bg-blue-500">
          </div>
        </label>
      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-2 gap-3 pt-2">
        <button
          class="flex items-center justify-center gap-2 py-2.5 px-3 cursor-pointer bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-lg font-semibold text-xs transition-colors"
          @click="editProperty">
          <Icon name="lucide:pencil" class="size-3.5" />
          Edit
        </button>
        <button
          class="flex items-center justify-center gap-2 py-2.5 px-3 cursor-pointer bg-slate-50 hover:bg-slate-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-600 dark:text-slate-300 rounded-lg font-semibold text-xs transition-colors"
          title="Copy Link">
          <Icon name="lucide:link" class="size-3.5" />
          Copy Link
        </button>
        
        <button
          class="flex items-center justify-center gap-2 py-2.5 px-3 cursor-pointer bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 rounded-lg font-semibold text-xs transition-colors">
          <Icon name="lucide:trash-2" class="size-3.5" />
          Delete
        </button>
        <button
          class="flex items-center justify-center gap-2 py-2.5 px-3 cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-500 dark:text-gray-400 rounded-lg font-semibold text-xs transition-colors">
          <Icon name="lucide:eye-off" class="size-3.5" />
          Hide
        </button>
      </div>

      <!-- RAPA Upload Button -->
      <button
        class="w-full mt-1 flex items-center justify-between py-2.5 px-4 cursor-pointer bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-700 rounded-lg transition-all group shadow-sm hover:shadow-md">
        <span class="text-xs font-semibold text-slate-600 dark:text-gray-400 group-hover:text-slate-800 dark:group-hover:text-gray-200">RAPA Upload</span>
        <div class="flex items-center gap-1 text-blue-600 dark:text-blue-400">
          <span class="text-[10px] font-bold uppercase tracking-wider">Start</span>
          <Icon name="lucide:arrow-right" class="size-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </button>

    </div>
  </div>
</template>