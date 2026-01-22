<script setup lang="ts">
interface Props {
  heartActive: boolean
  orientation: string
}
const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
  orientation: 'vertical',
})
const heartActive = ref(props.heartActive)
</script>
<template>
  <div
    v-if="orientation === 'vertical'"
    class="rounded-xl w-100 h-110 flex flex-col shadow-lg relative bg-[#fafafa] dark:bg-[#1e1e1e]"
  >
    <div class="h-full w-full rounded-t-lg bg-[url('/img.png')] bg-cover bg-bottom">
      <button
        @click="heartActive = !heartActive"
        class="absolute top-4 right-4 size-10 bg-[#fafafa] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200"
      >
        <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 dark:bg-black/50" />
        <Icon v-else name="radix-icons:heart-filled" class="size-6 bg-red-500" />
      </button>
      <span
        class="abosulute top-0 left-0 py-2 pl-6 pr-8 -translate-y-1 text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-xl rounded-br-[100px] shadow-md"
      >
        House And Lot
      </span>
    </div>
    <div class="h-full w-full flex p-4 flex-col gap-2">
      <div class="text-2xl font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        Modern Family Home
      </div>

      <div class="text-xl font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        $850,000<span class="text-sm font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">/month</span>
      </div>

      <div class="text-base font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">
        123 Oak Street, Downtown
      </div>

      <div class="flex text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60 gap-4">
        <div class="flex items-center gap-2">
          <Icon name="lucide:bed" class="text-base" /> 4 beds
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:bath" class="text-base" /> 3 baths
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:ruler-dimension-line" class="text-base" /> 2,400 sq ft
        </div>
      </div>
      <div class="flex gap-2">
        <div class="flex">
          <Icon v-for="_ in new Array(5)" name="radix-icons:star-filled" class="bg-yellow-500" />
        </div>
        <span class="text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-3 items-center">
          <Avatar class="size-8">
            <AvatarImage
              src="https://fastly.picsum.photos/id/479/100/100.jpg?hmac=2bYIJatdhVz-KV7QeLE6e4uFuTocBVeVuMAH1wklub8">
            </AvatarImage>
            <AvatarFallback>RN</AvatarFallback>
          </Avatar>
          <span class="text-sm text-[#262626]/90 dark:text-[#e8e8e8]/70">Bryl Darel Gorgonio</span>
        </div>
        <div>
          <Button variant="link">View Details</Button>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="h-75 col-span-4 flex shadow-lg relative bg-[#fafafa] dark:bg-[#1e1e1e] rounded-xl"
  >
    <div class="h-full aspect-square rounded-lg bg-[url('/img.png')] bg-cover bg-bottom">
      <button
        @click="heartActive = !heartActive"
        class="absolute top-4 right-4 size-10 bg-[#fafafa] shadow-md dark:bg-[#3e3e3e] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200"
      >
        <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 dark:bg-white/30" />
        <Icon v-else name="radix-icons:heart-filled" class="size-6 bg-red-500" />
      </button>
      <span
        class="abosulute top-0 left-0 py-2 pl-6 pr-8 -translate-y-1 text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-xl rounded-br-[100px] shadow-md"
      >
        House And Lot
      </span>
    </div>
    <div class="h-full w-full flex p-4 flex-col gap-2 justify-between">
      <div class="text-2xl font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        Modern Family Home
      </div>

      <div class="text-xl font-medium text-[#262626] dark:text-[#e8e8e8]/80">
        $850,000<span class="text-sm font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60"
          >/month</span
        >
      </div>

      <div class="text-base font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">
        123 Oak Street, Downtown
      </div>

      <div class="flex text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60 gap-4">
        <div class="flex items-center gap-2">
          <Icon name="lucide:bed" class="text-base" /> 4 beds
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:bath" class="text-base" /> 3 baths
        </div>
        <div class="flex items-center gap-2">
          <Icon name="lucide:ruler-dimension-line" class="text-base" /> 2,400 sq ft
        </div>
      </div>
      <div class="flex gap-2">
        <div class="flex">
          <Icon v-for="_ in new Array(5)" name="radix-icons:star-filled" class="bg-yellow-500" />
        </div>
        <span class="text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-3 items-center">
          <Avatar class="size-8">
            <AvatarImage
              src="https://fastly.picsum.photos/id/479/100/100.jpg?hmac=2bYIJatdhVz-KV7QeLE6e4uFuTocBVeVuMAH1wklub8"
            ></AvatarImage>
            <AvatarFallback>RN</AvatarFallback>
          </Avatar>
          <span class="text-sm text-[#262626]/90 dark:text-[#e8e8e8]/70">Bryl Darel Gorgonio</span>
        </div>
        <div>
          <Button variant="link">View Details</Button>
        </div>
      </div>
    </div>
  </div>
</template>
