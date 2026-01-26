<script setup lang="ts">
import { gsap } from 'gsap'
import RadiantText from '~/components/ui/radiant-text/RadiantText.vue'

const colorMode = useColorMode()
const heroBg = computed(() => {
  if (colorMode.preference === 'light') {
    return ` bg-[linear-gradient(to_top,rgba(255,255,255,1),transparent_15%),url('/hero.jpg')]`
  } else {
    return `bg-[linear-gradient(to_top,rgba(18,18,18,1)_0%,transparent_15%),url('/hero-dark.jpg')]`
  }
})

const titleRef = ref<HTMLElement>()
const subtitleRef = ref<HTMLElement>()
const searchRef = ref<HTMLElement>()

onMounted(() => {
  const titleElement = titleRef.value
  const subtitleElement = subtitleRef.value
  const searchElement = searchRef.value
  if (!titleElement || !subtitleElement || !searchElement) return

  gsap.fromTo(
    titleElement,
    {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.25,
    },
  )
  gsap.fromTo(
    subtitleElement,
    {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'power2.out',
      delay: 0.5,
    },
  )
  gsap.fromTo(
    searchElement,
    {
      opacity: 0,
      y: 15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.75,
    },
  )
})
</script>
<template>
  <div
    :class="[
      'h-[75vh] md:h-[80vh] bg-position-[100%_25%] bg-cover w-screen flex flex-col items-center justify-center gap-4 md:gap-5 px-4 md:px-0',
      heroBg,
    ]"
  >
    <div ref="titleRef" class="flex justify-center text-center px-4">
      <RadiantText
        class="text-[#FE8E0A] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold"
        :duration="15"
        :radiant-width="120"
      >
        Rent Your Space
      </RadiantText>
    </div>

    <div
      ref="subtitleRef"
      class="text-black/60 dark:text-white/60 text-base md:text-xl font-medium text-center px-4 max-w-2xl"
    >
      Discover the perfect property in your ideal location
    </div>
    <div
      ref="searchRef"
      class="flex flex-col md:flex-row bg-[#fafafa] dark:bg-[#212121] mt-8 md:mt-12 p-4 md:p-8 rounded-lg gap-4 border dark:border-gray-800 border-gray-200 w-full max-w-4xl mx-auto"
    >
      <div class="flex flex-col gap-2 md:gap-4 flex-1">
        <Label for="location" class="text-sm md:text-base">Location</Label>
        <Select id="location">
          <SelectTrigger class="w-full py-3 md:py-5">
            <SelectValue>
              <Icon name="lucide:map-pin" />
              <Label class="text-sm md:text-base">Select/Enter a City</Label>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-2 md:gap-4 flex-1">
        <Label for="type" class="text-sm md:text-base">Type</Label>
        <Select id="type">
          <SelectTrigger class="w-full py-3 md:py-5">
            <SelectValue placeholder="Any" class="text-sm md:text-base" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex h-full items-end">
        <Button class="gap-2 px-4 md:px-6 h-10 md:h-12 w-full md:w-auto">
          <Icon name="lucide:search" class="bg-[#121212] dark:bg-[#fafafa]" />
          <span class="text-sm md:text-base text-[#121212] dark:text-[#fafafa]">Search</span>
        </Button>
      </div>
    </div>
  </div>
</template>
