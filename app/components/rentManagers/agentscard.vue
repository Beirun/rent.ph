<script setup lang="ts">
interface ReviewItem {
  user: string
  comment: string
  rating: number
}

interface Props {
  id: number
  name: string
  first_name: string
  last_name: string
  email: string
  phone: string
  avatar: string
  reviews: string | null
  city: string | null
  state: string | null
  rmpro: string | null
  agent_title: string
  listing_count: number
  heartActive?: boolean
  orientation?: string
}

const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
  orientation: 'vertical',
})

const heartActive = ref(props.heartActive)

const goToProfile = () => {
  navigateTo({
    path: `/agent/${props.id}`,
  })
}
</script>

<template>
  <div v-if="orientation === 'vertical'" @click="goToProfile"
    class="rounded-xl cursor-pointer w-full h-112 md:h-128 flex flex-col relative bg-white dark:bg-[#1e1e1e] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-zinc-800 overflow-hidden group">

    <!-- Image Section with Overlay -->
    <div class="h-3/5 w-full relative overflow-hidden">
      <div :style="{ backgroundImage: `url(${avatar})` }"
        class="absolute inset-0 bg-cover bg-top transform group-hover:scale-110 transition-transform duration-500">
      </div>
      <div class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>

      <!-- Listings Count Badge -->
      <div class="absolute top-4 left-4">
        <div class="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm">
          <span class="text-xs font-bold text-gray-800 dark:text-gray-900">{{ listing_count + ' Listings' }}</span>
        </div>
      </div>

      <!-- Heart Button -->
      <button @click.stop="heartActive = !heartActive"
        class="absolute top-4 right-4 size-10 bg-white/90 dark:bg-[#2e2e2e]/90 backdrop-blur-md rounded-full flex justify-center items-center z-10 transition-transform active:scale-95 hover:scale-110 shadow-sm">
        <Icon v-if="!heartActive" name="radix-icons:heart" class="size-5 text-gray-700 dark:text-gray-300" />
        <Icon v-else name="radix-icons:heart-filled" class="size-5 text-red-500" />
      </button>

      <!-- Rating Badge -->
      <div class="absolute bottom-4 right-4">
        <div
          class="flex gap-1 items-center bg-white/95 dark:bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
          <Icon name="ph:star-fill" class="size-3.5 text-amber-400" />
          <span class="text-xs font-semibold text-gray-800 dark:text-gray-200">{{ reviews || '5.0' }}</span>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="h-2/5 w-full flex p-5 flex-col justify-between bg-white dark:bg-[#1e1e1e]">

      <!-- Agent Name and Contact Button -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="flex-1 min-w-0">
          <div class="text-lg font-bold text-[#262626] dark:text-[#e8e8e8] truncate mb-1" :title="name">
            {{ name }}
          </div>
          <div class="flex items-center gap-1.5">
            <div class="px-2 py-0.5 bg-blue-50 dark:bg-blue-950/30 rounded-md">
              <span class="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-tight">
                {{ agent_title || 'Real Estate Agent' }}
              </span>
            </div>
          </div>
        </div>
        <button
          class="shrink-0 size-9 rounded-full bg-linear-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          title="Contact Agent">
          <Icon name="ph:chat-circle-dots-fill" class="size-4 text-white" />
        </button>
      </div>

      <!-- Contact Information -->
      <div class="flex flex-col gap-2 text-xs text-gray-600 dark:text-gray-400">

        <!-- Phone -->
        <a :href="`tel:${phone}`" @click.stop
          class="flex items-center gap-2.5 min-w-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/item">
          <div
            class="shrink-0 size-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-950/30 transition-colors">
            <Icon name="ph:phone-fill"
              class="size-3.5 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400" />
          </div>
          <span class="truncate font-medium">{{ phone }}</span>
        </a>

        <!-- Email -->
        <a :href="`mailto:${email}`" @click.stop
          class="flex items-center gap-2.5 min-w-0 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/item">
          <div
            class="shrink-0 size-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center group-hover/item:bg-blue-50 dark:group-hover/item:bg-blue-950/30 transition-colors">
            <Icon name="ph:envelope-simple-fill"
              class="size-3.5 text-gray-600 dark:text-gray-400 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400" />
          </div>
          <span class="truncate font-medium">{{ email }}</span>
        </a>

        <!-- Location -->
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="shrink-0 size-7 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
            <Icon name="ph:map-pin-fill" class="size-3.5 text-gray-600 dark:text-gray-400" />
          </div>
          <span class="truncate font-medium">{{ state || city || 'Philippines' }}</span>
        </div>

      </div>
    </div>
  </div>

  <div v-else @click="goToProfile"
    class="h-40 sm:h-48 md:h-56 w-full flex cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 relative bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 group">

    <!-- Image Section -->
    <div class="w-1/3 sm:w-1/4 h-full relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
      <div :style="{ backgroundImage: `url(${avatar})` }"
        class="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500">
      </div>
      <div class="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/10 dark:to-black/40"></div>

      <span
        class="absolute top-3 left-3 px-2 py-1 text-[10px] sm:text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-sm rounded-md shadow-sm z-10">
        {{ listing_count + ' Listings' }}
      </span>
    </div>

    <!-- Content Section -->
    <div class="flex-1 p-4 sm:p-5 flex flex-col justify-between">

      <div>
        <div class="flex justify-between items-start mb-1">
          <div class="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 truncate pr-2">{{ name
          }}</div>
          <button @click.stop="heartActive = !heartActive"
            class="shrink-0 size-8 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center justify-center transition-colors">
            <Icon v-if="!heartActive" name="radix-icons:heart"
              class="size-5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
            <Icon v-else name="radix-icons:heart-filled" class="size-5 text-red-500" />
          </button>
        </div>
        <div class="mb-3">
          <span
            class="px-2 py-0.5 bg-gray-100 dark:bg-zinc-800 text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-400 rounded uppercase tracking-wide">
            {{ agent_title || 'Agent' }}
          </span>
        </div>

        <div class="flex flex-col gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2 truncate">
            <Icon name="ph:envelope-simple-fill" class="size-3.5 sm:size-4 shrink-0" />
            <span class="truncate">{{ email }}</span>
          </div>
          <div class="flex items-center gap-2 truncate">
            <Icon name="ph:map-pin-fill" class="size-3.5 sm:size-4 shrink-0" />
            <span class="truncate">{{ state || city || 'Philippines' }}</span>
          </div>
        </div>
      </div>

      <div class="flex items-end justify-between mt-2 pt-3 border-t border-gray-100 dark:border-zinc-800/50 gap-4">
        <div class="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/10 px-2 py-1 rounded-md shrink-0">
          <Icon name="ph:star-fill" class="size-3 text-amber-400" />
          <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">{{ reviews || '5.0' }}</span>
        </div>
        <button
          class="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm">
          View My Listing
        </button>
      </div>

    </div>
  </div>
</template>
