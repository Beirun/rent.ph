<script setup lang="ts">
interface Props {
  heartActive?: boolean
  orientation?: string
}
const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
  orientation: 'vertical',
})
const heartActive = ref(props.heartActive)

const shareProperty = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Modern Family Home',
      text: 'Check out this beautiful property!',
      url: window.location.href,
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(window.location.href)
  }
}
</script>

<template>
  <div
    v-if="orientation === 'vertical'"
    class="rounded-xl justify-between w-80 h-90 flex flex-col shadow-lg relative bg-whtie dark:bg-[#1e1e1e]"
  >
    <div class="h-1/2 w-full rounded-t-lg bg-[url('/img.png')] bg-cover bg-bottom relative">
      <button
        @click="heartActive = !heartActive"
        class="absolute top-3 right-3 size-8 bg-white dark:bg-[#3e3e3e] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 shadow-sm"
      >
        <Icon
          v-if="!heartActive"
          name="radix-icons:heart"
          class="size-5 text-gray-700 dark:text-gray-300"
        />
        <Icon v-else name="radix-icons:heart-filled" class="size-5 text-red-500" />
      </button>
      <span
        class="absolute top-0 left-0 py-1.5 px-4 text-sm text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-lg rounded-br-2xl shadow-sm"
      >
        House And Lot
      </span>
    </div>
    <div class="flex-1 h-55 flex p-3 flex-col gap-1.5">
      <div class="text-lg font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        Modern Family Home
      </div>

      <div class="text-base font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        $850,000<span class="text-xs font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60"
          >/month</span
        >
      </div>

      <div class="text-sm font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">
        123 Oak Street, Downtown
      </div>

      <div class="flex text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60 gap-3 mt-1">
        <div class="flex items-center gap-1">
          <Icon name="lucide:bed" class="size-3.5" /> 4 beds
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:bath" class="size-3.5" /> 3 baths
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:ruler-dimension-line" class="size-3.5" /> 2,400 sq ft
        </div>
      </div>
      <div class="flex gap-2 items-center mt-1">
        <div class="flex">
          <Icon v-for="_ in 5" name="radix-icons:star-filled" class="size-3.5 text-yellow-500" />
        </div>
        <span class="text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
      </div>
      <div class="flex justify-between items-center mt-2">
        <div class="flex gap-2 items-center">
          <Avatar class="size-7">
            <AvatarImage
              src="https://fastly.picsum.photos/id/479/100/100.jpg?hmac=2bYIJatdhVz-KV7QeLE6e4uFuTocBVeVuMAH1wklub8"
            />
            <AvatarFallback>BD</AvatarFallback>
          </Avatar>
          <span class="text-xs text-[#262626]/90 dark:text-[#e8e8e8]/70">Bryl Darel G.</span>
        </div>
        <div class="flex gap-2">
          <button
            class="size-8 rounded-full bg-gray-100 dark:bg-[#2e2e2e] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3e3e3e] transition-colors"
            title="Share"
          >
            <Icon
              name="radix-icons:envelope-closed"
              class="size-4 text-gray-700 dark:text-gray-300"
            />
          </button>
          <button
            @click="shareProperty"
            class="size-8 rounded-full bg-gray-100 dark:bg-[#2e2e2e] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3e3e3e] transition-colors"
            title="Share"
          >
            <Icon name="radix-icons:share-2" class="size-4 text-gray-700 dark:text-gray-300" />
          </button>
          <a
            href="https://wa.me/?text=Check%20out%20this%20property%3A%20Modern%20Family%20Home%20-%20%24850%2C000%2Fmonth"
            target="_blank"
            class="size-8 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
            title="Contact on WhatsApp"
          >
            <Icon name="radix-icons:chat-bubble" class="size-4 text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="h-56 w-full flex shadow-lg relative bg-white dark:bg-[#1e1e1e] rounded-xl">
    <div class="h-full w-48 rounded-l-lg bg-[url('/img.png')] bg-cover bg-center relative">
      <button
        @click="heartActive = !heartActive"
        class="absolute top-3 right-3 size-8 bg-white dark:bg-[#3e3e3e] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 shadow-sm"
      >
        <Icon
          v-if="!heartActive"
          name="radix-icons:heart"
          class="size-5 text-gray-700 dark:text-gray-300"
        />
        <Icon v-else name="radix-icons:heart-filled" class="size-5 text-red-500" />
      </button>
      <span
        class="absolute top-0 left-0 py-1.5 px-4 text-sm text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-xl rounded-br-2xl shadow-sm"
      >
        House And Lot
      </span>
    </div>
    <div class="flex-1 flex p-3 flex-col gap-1.5">
      <div class="text-lg font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        Modern Family Home
      </div>

      <div class="text-base font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        $850,000<span class="text-xs font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60"
          >/month</span
        >
      </div>

      <div class="text-sm font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">
        123 Oak Street, Downtown
      </div>

      <div class="flex text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60 gap-3 mt-1">
        <div class="flex items-center gap-1">
          <Icon name="lucide:bed" class="size-3.5" /> 4 beds
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:bath" class="size-3.5" /> 3 baths
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:ruler-dimension-line" class="size-3.5" /> 2,400 sq ft
        </div>
      </div>
      <div class="flex gap-2 items-center mt-1">
        <div class="flex">
          <Icon v-for="_ in 5" name="radix-icons:star-filled" class="size-3.5 text-yellow-500" />
        </div>
        <span class="text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
      </div>
      <div class="flex justify-between items-center mt-auto">
        <div class="flex gap-2 items-center">
          <Avatar class="size-7">
            <AvatarImage
              src="https://fastly.picsum.photos/id/479/100/100.jpg?hmac=2bYIJatdhVz-KV7QeLE6e4uFuTocBVeVuMAH1wklub8"
            />
            <AvatarFallback>BD</AvatarFallback>
          </Avatar>
          <span class="text-xs text-[#262626]/90 dark:text-[#e8e8e8]/70">Bryl Darel G.</span>
        </div>
        <div class="flex gap-2">
          <button
            @click="shareProperty"
            class="size-8 rounded-full bg-gray-100 dark:bg-[#2e2e2e] flex items-center justify-center hover:bg-gray-200 dark:hover:bg-[#3e3e3e] transition-colors"
            title="Share"
          >
            <Icon name="radix-icons:share-2" class="size-4 text-gray-700 dark:text-gray-300" />
          </button>
          <a
            href="https://wa.me/?text=Check%20out%20this%20property%3A%20Modern%20Family%20Home%20-%20%24850%2C000%2Fmonth"
            target="_blank"
            class="size-8 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
            title="Contact on WhatsApp"
          >
            <Icon name="radix-icons:chat-bubble" class="size-4 text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
