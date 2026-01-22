<script setup lang="ts">
interface Props {
  heartActive: boolean
}
const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
})
const heartActive = ref(props.heartActive)
</script>
<template>
  <div
    class="rounded-xl w-full max-w-6xl h-52 flex shadow-lg relative bg-[#fafafa] dark:bg-[#1e1e1e] overflow-hidden mx-auto"
  >
    <div class="w-1/3 h-full bg-[url('/img.png')] bg-cover bg-center relative">
      <button
        @click="heartActive = !heartActive"
        class="absolute top-4 right-4 size-10 bg-[#fafafa] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200"
      >
        <Icon v-if="!heartActive" name="radix-icons:heart" class="size-7" />
        <Icon v-else name="radix-icons:heart-filled" class="size-7 bg-red-500" />
      </button>
      <span
        class="absolute top-0 left-0 py-2 px-4 -translate-y-1 bg-green-300 dark:bg-green-700 rounded-tl-lg rounded-br-[50px] shadow-md text-sm font-medium"
      >
        House And Lot
      </span>
    </div>

    <div class="flex-1 h-full flex flex-col justify-between p-5">
      <div class="flex justify-between items-start">
        <div class="flex-1">
          <div class="text-2xl font-semibold text-[#262626] dark:text-[#e8e8e8]/80 mb-2">
            Modern Family Home
          </div>
          <div class="text-xl font-medium text-[#262626] dark:text-[#e8e8e8]/80">
            $850,000<span class="text-base font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60"
              >/month</span
            >
          </div>
          <div class="text-base font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">
            123 Oak Street, Downtown
          </div>
        </div>
      </div>

      <div class="flex text-sm text-[#262626]/80 dark:text-[#e8e8e8]/60 gap-6 mt-2">
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

      <div class="flex justify-between items-end">
        <div class="flex gap-2 items-center">
          <Avatar class="size-8">
            <AvatarImage
              src="https://fastly.picsum.photos/id/479/100/100.jpg?hmac=2bYIJatdhVz-KV7QeLE6e4uFuTocBVeVuMAH1wklub8"
            ></AvatarImage>
            <AvatarFallback>RN</AvatarFallback>
          </Avatar>
          <span class="text-sm text-[#262626]/90 dark:text-[#e8e8e8]/70">Bryl Darel Gorgonio</span>
        </div>

        <div class="text-right">
          <div class="flex items-center gap-2">
            <div class="flex">
              <Icon
                v-for="_ in new Array(5)"
                name="radix-icons:star-filled"
                class="text-yellow-500 text-base"
              />
            </div>
            <span class="text-sm text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
          </div>
          <Button variant="link" class="text-base px-0">View Details</Button>
        </div>
      </div>
    </div>
  </div>
</template>
