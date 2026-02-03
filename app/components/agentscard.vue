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
    class="rounded-xl cursor-pointer w-100 h-110 flex flex-col relative bg-white dark:bg-[#1a1a1a] shadow-md hover:shadow-lg transition-all duration-100 dark:border-zinc-800">
    <div class="h-[60%] w-full relative overflow-hidden">
      <div :style="{ backgroundImage: `url(${avatar})` }"
        class="absolute inset-0 rounded-t-lg bg-cover bg-no-repeat bg-top"></div>

      <button @click.stop="heartActive = !heartActive"
        class="absolute top-4 right-4 size-10 bg-white/90 dark:bg-[#2e2e2e]/90 backdrop-blur-md rounded-full flex justify-center items-center z-10">
        <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 text-black dark:text-white" />
        <Icon v-else name="radix-icons:heart-filled" class="size-6 text-red-500" />
      </button>

      <span class="absolute top-0 left-0 py-1.5 px-4 text-sm text-white bg-[#205ed7] rounded-tl-lg rounded-br-2xl z-10">
        {{ listing_count + ' Listings' }}
      </span>
    </div>

    <div class="h-[40%] w-full flex p-4 flex-nowrap flex-col justify-between rounded-b-lg bg-white dark:bg-[#1e1e1e]">
      <div class="flex flex-col gap-1 min-h-0">

        <div class="text-xl font-bold text-black dark:text-gray-200 truncate" :title="name">
          {{ name }}
        </div>

        <div class="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 overflow-hidden">

          <div class="flex items-center gap-2 min-w-0">
            <Icon name="lucide:mail" class="size-4 shrink-0" />
            <span class="truncate">{{ email }}</span>
          </div>

          <div class="flex items-center gap-2 min-w-0">
            <Icon name="lucide:phone" class="size-4 shrink-0" />
            <span class="truncate">{{ phone }}</span>
          </div>

          <div class="flex items-center gap-2 min-w-0">
            <Icon name="lucide:map-pin" class="size-4 shrink-0" />
            <span class="truncate">{{ state || city || 'Philippines' }}</span>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <div class="flex items-center gap-0.5 shrink-0">
              <Icon v-for="_ in 5" :key="_" name="radix-icons:star-filled" class="size-3 text-yellow-500" />
            </div>
            <span class="text-[10px] text-[#262626]/80 dark:text-[#e8e8e8]/60 truncate">
              {{ reviews }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex justify-end w-full pt-1 shrink-0 border-t border-gray-100 dark:border-gray-800/50 mt-1">
        <span class="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
          View My Listing
        </span>
      </div>
    </div>
  </div>

  <div v-else @click="goToProfile"
    class="h-75 col-span-4 flex cursor-pointer shadow-lg relative bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden">
    <div class="h-[60%] w-full relative bg-zinc-900 overflow-hidden">
      <div :style="{ backgroundImage: `url(${avatar})` }"
        class="absolute inset-0 rounded-lg bg-cover bg-no-repeat bg-top"></div>

      <button @click.stop="heartActive = !heartActive"
        class="absolute top-4 right-4 size-10 bg-white/90 dark:bg-[#2e2e2e]/90 backdrop-blur-md rounded-full flex justify-center items-center z-10">
        <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 text-black dark:text-white" />
        <Icon v-else name="radix-icons:heart-filled" class="size-6 text-red-500" />
      </button>

      <span class="absolute top-0 left-0 py-1.5 px-4 text-sm text-white bg-[#205ed7] rounded-tl-lg rounded-br-2xl z-10">
        {{ listing_count + ' Listings' }}
      </span>
    </div>

    <div class="h-[40%] w-full flex p-4 flex-col justify-between bg-white dark:bg-[#1e1e1e]">
      <div class="flex flex-col gap-2">
        <div class="text-xl font-bold text-black dark:text-gray-200">{{ name }}</div>
        <div class="flex flex-col gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <div class="flex items-center gap-2">
            <Icon name="lucide:mail" class="size-4" /><span>{{ email }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:map-pin" class="size-4" /><span>{{
              state || city || 'Philippines'
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
