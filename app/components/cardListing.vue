<script setup lang="ts">
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
  amenities?: string[]
}

interface Props {
  heartActive?: boolean
  orientation?: string
  property?: Property
}
const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
  orientation: 'vertical',
})
const heartActive = ref(props.heartActive)

const formatPrice = (price: string) => {
  const numPrice = parseFloat(price)
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numPrice)
}

const shareProperty = () => {
  const propertyTitle = props.property?.title || 'Property'
  const propertyPrice = props.property ? formatPrice(props.property.price) : 'Price'

  if (navigator.share) {
    navigator.share({
      title: propertyTitle,
      text: `Check out this beautiful property: ${propertyTitle} - ${propertyPrice}/month`,
      url: window.location.href,
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href)
  }
}
const goToProperty = () => {
  if (!props.property) return
  navigateTo(`/property/${props.property.id}`)
}

const callAgent = () => {
  if (props.property?.agent_phone) {
    window.location.href = `tel:${props.property.agent_phone}`
  }
}
</script>

<template>
  <div v-if="orientation === 'vertical'" @click="goToProperty"
    class="rounded-lg w-85 flex flex-col border border-gray-200 dark:border-gray-700 relative bg-white dark:bg-[#1e1e1e] cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <!-- Image Section -->
    <div class="h-56 w-full bg-cover bg-center relative overflow-hidden"
      :style="`background-image: url('${property?.image || '/img.png'}')`">
      <!-- Property Type Badge -->
      <div class="absolute top-4 left-4">
        <span
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#205ed7] dark:bg-[#1948a7] rounded-lg shadow-sm">
          {{ property?.bed && property?.bed > 0 ? 'House And Lot' : 'Commercial Space' }}
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="absolute top-4 right-4 flex gap-2">
        <!-- <button @click.stop="shareProperty"
          class="size-9 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 shadow-sm">
          <Icon name="lucide:map-pin" class="size-4 text-gray-700 dark:text-gray-300" />
        </button> -->
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
          {{ property ? formatPrice(property.price) : '₱2,500'
          }}<span class="text-sm font-normal text-[#262626]/60 dark:text-[#e8e8e8]/50">/month</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:star" class="size-4 text-amber-400 fill-amber-400" />
          <span class="text-sm font-medium text-[#262626] dark:text-[#e8e8e8]">4.9</span>
          <span class="text-sm text-[#262626]/60 dark:text-[#e8e8e8]/50">/5.0</span>
        </div>
      </div>

      <!-- Property Title -->
      <div class="text-lg font-semibold text-[#262626] dark:text-[#e8e8e8] truncate">
        {{ property?.title || 'Premium Family House' }}
      </div>

      <!-- Address -->
      <div class="text-sm text-[#262626]/70 dark:text-[#e8e8e8]/60 truncate">
        {{ property?.address || 'No Address Added' }}
      </div>

      <!-- Amenities -->
      <div class="flex text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60 gap-3 mt-1">
        <div v-if="property?.bed && property.bed > 0" class="flex items-center gap-1">
          <Icon name="lucide:bed" class="size-3.5" /> {{ property.bed }} beds
        </div>
        <div v-if="property?.bathroom && property.bathroom > 0" class="flex items-center gap-1">
          <Icon name="lucide:bath" class="size-3.5" /> {{ property.bathroom }} baths
        </div>
        <div v-if="property?.square && property.square > 0" class="flex items-center gap-1">
          <Icon name="lucide:ruler-dimension-line" class="size-3.5" />
          {{ property.square.toLocaleString() }} sq ft
        </div>
      </div>

      <!-- Agent Section -->
      <div class="flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
        <div class="flex gap-2 items-center">
          <Avatar class="size-8">
            <AvatarImage :src="property?.user_avatar ||
              'https://fastly.picsum.photos/id/479/100/100.jpg?hmac=2bYIJatdhVz-KV7QeLE6e4uFuTocBVeVuMAH1wklub8'
              " />
            <AvatarFallback>{{
              property?.user_name?.substring(0, 2).toUpperCase() || 'TJ'
            }}</AvatarFallback>
          </Avatar>
          <div class="flex flex-col">
            <div class="flex items-center gap-1">
              <span class="text-xs font-medium text-[#262626] dark:text-[#e8e8e8]">{{
                property?.user_name || 'Thom Jason'
              }}</span>
            </div>
            <!-- <span class="text-[10px] text-[#262626]/60 dark:text-[#e8e8e8]/50">{{
              property?.agent_phone || '(205) 009-0108'
            }}</span> -->
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

          <a :href="`https://wa.me/?text=Check%20out%20this%20property%3A%20${encodeURIComponent(property?.title || 'Property')}%20-%20${encodeURIComponent(property ? formatPrice(property.price) : '₱2,500')}%2Fmonth`"
            target="_blank"
            class="size-9 rounded-full bg-[#25D366] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 hover:rotate-6 shadow-md hover:shadow-green-500/40 active:scale-95"
            title="Contact on WhatsApp">
            <Icon name="ph:chat-circle-dots-fill" class="size-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>

</template>