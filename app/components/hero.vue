<script setup lang="ts">
import { gsap } from 'gsap'

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

  // Entrance animation for "Rent Your Space"
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
  // Entrance animation for subtitle
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
  <!-- Adjust padding bottom or top to move hero center elements -->
  <div
    :class="[
      'h-[75vh] bg-position-[100%_25%] bg-cover w-screen flex flex-col items-center justify-center gap-5',
      heroBg,
    ]"
  >
    <div ref="titleRef" class="text-[#FE8E0A] text-8xl font-extrabold">Rent Your Space</div>
    <div ref="subtitleRef" class="text-black/60 dark:text-white/60 text-xl font-medium">
      Discover the perfect property in your ideal location
    </div>
    <div
      ref="searchRef"
      class="flex bg-[#fafafa] dark:bg-[#212121] mt-12 p-8 rounded-lg gap-4 border dark:border-gray-800 border-gray-200"
    >
      <div class="flex flex-col gap-4">
        <Label for="location">Location</Label>
        <Select id="location">
          <SelectTrigger class="w-100 py-5">
            <SelectValue>
              <Icon name="lucide:map-pin" />
              <Label>Select/Enter a City</Label>
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
      <div class="flex flex-col gap-4">
        <Label for="type">Type</Label>
        <Select id="type">
          <SelectTrigger class="w-75 py-5">
            <SelectValue placeholder="Any" />
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
        <Button class="gap-2 px-6 h-12">
          <Icon name="lucide:search" class="bg-[#fafafa] dark:bg-[#121212]" />
          Search
        </Button>
      </div>
    </div>
  </div>
</template>
