<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  id: string | number
  slug?: string
  title?: string
  type?: string
  image?: string
  name?: string
  price: number | string
  address?: string
  agent?: string
  user_name?: string
  reviews?: string
  agentphoto?: string
  user_avatar?: string
  bed?: number
  bathroom?: number
  square?: number
  heartActive?: boolean
  orientation?: string
}

const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
  orientation: 'vertical',
})

const heartActive = ref(props.heartActive)

const propertyTitle = computed(() => props.title || 'Property')
const propertyImage = computed(() => props.image || '/img.png')
// const propertyLocation = computed(() => props.address || 'Location not available')
const propertyAgent = computed(() => props.user_name || props.agent || 'Agent')
const propertyAgentPhoto = computed(() => props.user_avatar || props.agentphoto || '/img.png')
// const propertyBedroom = computed(() => props.bed || 0 )
// const propertyBathroom = computed(() => props.bathroom || 0 )
// const propertySize = computed(() => props.square || 0 )

const propertyType = computed(() => {
  if (props.type) return props.type
  if (props.bed && props.bed > 0) return 'House And Lot'
  return 'Commercial Space'
})

const formatPrice = (price: string | number) => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numPrice)
}

const shareProperty = () => {
  const title = props.title || 'Property'
  const price = formatPrice(props.price)

  if (navigator.share) {
    navigator.share({
      title: title,
      text: `Check out this beautiful property: ${title} - ${price}/month`,
      url: window.location.href,
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href)
  }
}

const goToProperty = () => {
  const routeSlug = props.slug || props.id.toString()
  navigateTo(`/property/${routeSlug}`)
}

const callAgent = () => {
  // Assuming agent phone is available or added later
  // if (props.agent_phone) {
  //   window.location.href = `tel:${props.agent_phone}`
  // }
}
</script>

<template>
  <div v-if="orientation === 'vertical'" @click="goToProperty"
    class="rounded-md w-85 flex flex-col border border-gray-200 dark:border-gray-700 relative bg-white dark:bg-[#1e1e1e] cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <!-- Image Section -->
    <div class="h-56 w-full bg-cover bg-center relative overflow-hidden"
      :style="`background-image: url('${propertyImage}')`">
      <!-- Property Type Badge -->
      <div class="absolute top-4 left-4">
        <span
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#205ed7] dark:bg-[#1948a7] rounded-md shadow-sm">
          {{ propertyType }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="absolute top-4 right-4 flex gap-2">
        <button @click.stop="heartActive = !heartActive"
          class="size-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 shadow-sm">
          <Icon v-if="!heartActive" name="radix-icons:heart" class="size-5 text-gray-700 dark:text-gray-300" />
          <Icon v-else name="radix-icons:heart-filled" class="size-5 text-red-500" />
        </button>
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex-1 flex p-5 flex-col gap-2">
      <!-- Price and Rating -->
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold text-[#262626] dark:text-[#e8e8e8]">
          {{ formatPrice(price) }}<span
            class="text-sm font-normal text-[#262626]/60 dark:text-[#e8e8e8]/50">/month</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:star" class="size-4 text-amber-400 fill-amber-400" />
          <span class="text-sm font-medium text-[#262626] dark:text-[#e8e8e8]">4.9</span>
          <span class="text-sm text-[#262626]/60 dark:text-[#e8e8e8]/50">/5.0</span>
        </div>
      </div>

      <!-- Property Title -->
      <div class="text-lg font-semibold text-[#262626] dark:text-[#e8e8e8] truncate">
        {{ propertyTitle }}
      </div>

      <!-- Address -->
      <div class="text-sm text-[#262626]/70 dark:text-[#e8e8e8]/60 truncate">
        {{ address || 'No Address Added' }}
      </div>

      <!-- Amenities -->
      <div class="flex text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60 gap-3 mt-1">
        <div v-if="bed && bed > 0" class="flex items-center gap-1">
          <Icon name="lucide:bed" class="size-3.5" /> {{ bed }} beds
        </div>
        <div v-if="bathroom && bathroom > 0" class="flex items-center gap-1">
          <Icon name="lucide:bath" class="size-3.5" /> {{ bathroom }} baths
        </div>
        <div v-if="square && square > 0" class="flex items-center gap-1">
          <Icon name="lucide:ruler-dimension-line" class="size-3.5" />
          {{ square.toLocaleString() }} sq ft
        </div>
      </div>

      <!-- Agent Section -->
      <div class="flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div class="flex gap-2 items-center">
          <Avatar class="size-8">
            <AvatarImage :src="propertyAgentPhoto" />
            <AvatarFallback>{{
              propertyAgent?.substring(0, 2).toUpperCase() || 'AG'
            }}</AvatarFallback>
          </Avatar>
          <div class="flex flex-col">
            <div class="flex items-center gap-1">
              <span class="text-xs font-medium text-[#262626] dark:text-[#e8e8e8]">{{
                propertyAgent
              }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="size-9 rounded-full cursor-pointer bg-gray-100 dark:bg-zinc-800 flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-90"
            title="Email">
            <Icon name="ph:envelope-simple-fill"
              class="size-4.5 text-gray-700 dark:text-zinc-300 transition-colors duration-300 hover:text-white" />
          </button>

          <button @click.stop="shareProperty"
            class="size-9 rounded-full cursor-pointer bg-gray-100 dark:bg-zinc-800 flex items-center justify-center transition-all duration-300 hover:bg-zinc-900 dark:hover:bg-white hover:shadow-lg active:scale-90"
            title="Share">
            <Icon name="ph:share-network-fill"
              class="size-4.5 text-gray-700 dark:text-zinc-300 transition-colors duration-300 hover:text-white dark:hover:text-black" />
          </button>

          <a :href="`https://wa.me/?text=Check%20out%20this%20property%3A%20${encodeURIComponent(propertyTitle)}%20-%20${encodeURIComponent(formatPrice(price))}%2Fmonth`"
            target="_blank"
            class="size-9 rounded-full bg-[#25D366] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 hover:rotate-6 shadow-md hover:shadow-green-500/40 active:scale-95"
            title="Contact on WhatsApp">
            <Icon name="ph:chat-circle-dots-fill" class="size-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div v-else
    class="h-36 w-full max-w-md flex shadow-md relative bg-[#fafafa] dark:bg-[#1e1e1e] rounded-xl overflow-hidden">
    <div class="h-full w-32 bg-cover bg-center relative shrink-0"
      :style="{ backgroundImage: `url('${propertyImage}')` }">
      <span class="absolute top-0 left-0 py-0.5 px-2 text-[9px] font-bold text-[#fafafa] bg-[#205ed7] rounded-br-lg">
        {{ propertyType }}
      </span>
    </div>
    <div class="flex-1 p-2.5 flex flex-col justify-between min-w-0">
      <div>
        <div class="flex justify-between items-start">
          <div class="text-sm font-regular text-[#262626] dark:text-[#e8e8e8]/80 pr-4">
            {{ propertyTitle }}
          </div>
          <button @click="heartActive = !heartActive" class="shrink-0">
            <Icon :name="!heartActive ? 'radix-icons:heart' : 'radix-icons:heart-filled'"
              :class="['size-4', heartActive ? 'text-red-500' : 'text-gray-400']" />
          </button>
        </div>
        <div class="text-xs text-gray-500 truncate">{{ address || '123 Oak Street, Downtown' }}</div>
        <div class="text-sm font-semibold text-[#205ed7] mt-1">{{ formatPrice(price) }}</div>
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2 text-[10px] text-gray-500">
            <span>{{ bed || 0 }} Bed</span><span>•</span><span>{{ bathroom || 0 }} Bath</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="flex">
              <Icon v-for="n in 5" :key="n" name="radix-icons:star-filled" class="size-2.5 text-yellow-500" />
            </div>
            <span class="text-[9px] opacity-60">(12)</span>
          </div>
        </div>
        <div class="flex gap-1">
          <button class="size-7 rounded-full bg-gray-100 dark:bg-[#2e2e2e] flex items-center justify-center">
            <Icon name="radix-icons:share-2" class="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
