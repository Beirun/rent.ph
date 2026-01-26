<script setup lang="ts">
interface Props {
  id: string | number
  type: string
  photo: string
  name: string
  price: number | string
  location: string
  agent: string
  reviews: string
  agentphoto: string
  specifications: any[]
  heartActive?: boolean
  orientation?: string
}

const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
  orientation: 'vertical',
})

const heartActive = ref(props.heartActive)

// The function that "carries" the data to [id].vue
const goToProperty = () => {
  navigateTo({
    path: `/property/${props.id}`,
    query: {
      name: props.name,
      type: props.type,
      photo: props.photo,
      price: props.price,
      agent: props.agent,
      agentphoto: props.agentphoto,
      location: props.location,
      reviews: props.reviews,
      specs: JSON.stringify(props.specifications)
    }
  })
}



</script>

<template>

  <div v-if="orientation === 'vertical'" @click="goToProperty"
    class="rounded-xl w-64 flex flex-col shadow-md relative bg-[#fafafa] dark:bg-[#1e1e1e] overflow-hidden">
    <div class="h-32 w-full bg-cover bg-center relative" :style="{ backgroundImage: `url(${photo})` }">
      <button @click.stop="heartActive = !heartActive"
        class="absolute top-2 right-2 size-7 bg-[#fafafa]/90 dark:bg-[#3e3e3e]/90 rounded-full flex justify-center items-center active:scale-95 transition-transform shadow-sm">
        <Icon :name="!heartActive ? 'radix-icons:heart' : 'radix-icons:heart-filled'"
          :class="['size-4', heartActive ? 'text-red-500' : 'text-gray-700 dark:text-gray-300']" />
      </button>

      <span class="absolute top-0 left-0 py-1 px-3 text-[10px] uppercase text-[#fafafa] bg-[#205ed7] rounded-br-xl">
        {{ type }}
      </span>
    </div>

    <div class="p-2.5 flex flex-col gap-1">
      <div class="text-sm font-meduim text-[#262626] dark:text-[#e8e8e8]/80 truncate">{{ name }}</div>
      <div class="text-sm font-medium text-[#205ed7]">₱{{ price.toLocaleString() }}<span
          class="text-[10px] font-normal opacity-70">/month</span></div>

      <div class="flex items-center gap-2 text-[10px] text-gray-500 dark:text-gray-400 mt-1">
        <div class="flex items-center gap-0.5">
          <Icon name="radix-icons:dashboard" class="size-3" /> {{ specifications[0]?.bedrooms }}
        </div>
        <div class="flex items-center gap-0.5">
          <Icon name="lucide:bath" class="size-3" /> {{ specifications[0]?.bathroom }}
        </div>
        <div class="flex items-center gap-0.5">
          <Icon name="lucide:ruler-dimension-line" class="size-3" /> {{ specifications[0]?.size }} sqft
        </div>
      </div>

      <div class="flex gap-2 items-center mt-1">
        <div class="flex">
          <Icon v-for="_ in 5" name="radix-icons:star-filled" class="size-3.5 text-yellow-500" />
        </div>
        <span class="text-[10px] text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
      </div>

      <div
        class="flex justify-between items-center mt-2 pt-2 border-t border-gray-100 dark:border-gray-800"
      >
        <div class="flex gap-1.5 items-center">
          <Avatar class="size-5">
            <NuxtImg :src="agentphoto" />
            <AvatarFallback class="text-[8px]">BD</AvatarFallback>
          </Avatar>
          <span class="text-[10px] font-medium opacity-80">{{ agent }}</span>
        </div>
        <div class="flex gap-1">
          <button
            class="size-6 rounded-full bg-gray-100 dark:bg-[#2e2e2e] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3e3e3e] transition-colors"
            title="Share"
          >
            <Icon
              name="radix-icons:envelope-closed"
              class="size-3 text-gray-700 dark:text-gray-300"
            />
          </button>
          <button class="size-6 rounded-full bg-gray-100 dark:bg-[#2e2e2e] flex items-center justify-center">
            <Icon name="radix-icons:share-2" class="size-3" />
          </button>
          <a href="https://wa.me/?text=Check%20out%20this%20property%3A%20Modern%20Family%20Home%20-%20%24850%2C000%2Fmonth"
            target="_blank"
            class="size-6 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
            title="Contact on WhatsApp">
            <Icon name="radix-icons:chat-bubble" class="size-3 text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div v-else
    class="h-36 w-full max-w-md flex shadow-md relative bg-[#fafafa] dark:bg-[#1e1e1e] rounded-xl overflow-hidden">
    <div class="h-full w-32 bg-[url('/img.png')] bg-cover bg-center relative flex-shrink-0">
      <span
        class="absolute top-0 left-0 py-0.5 px-2 text-[9px] font-bold text-[#fafafa] bg-[#205ed7] rounded-br-lg"
      >
        House
      </span>
    </div>
    <div class="flex-1 p-2.5 flex flex-col justify-between min-w-0">
      <div>
        <div class="flex justify-between items-start">
          <div class="text-sm font-regular text-[#262626] dark:text-[#e8e8e8]/80 pr-4">
            Modern Family Home
          </div>
          <button @click="heartActive = !heartActive" class="flex-shrink-0">
            <Icon :name="!heartActive ? 'radix-icons:heart' : 'radix-icons:heart-filled'"
              :class="['size-4', heartActive ? 'text-red-500' : 'text-gray-400']" />
          </button>
        </div>
        <div class="text-xs text-gray-500 truncate">123 Oak Street, Downtown</div>
        <div class="text-sm font-semibold text-[#205ed7] mt-1">$850,000</div>
      </div>

      <div class="flex justify-between items-end">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-2 text-[10px] text-gray-500">
            <span>4 Bed</span><span>•</span><span>3 Bath</span>
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
