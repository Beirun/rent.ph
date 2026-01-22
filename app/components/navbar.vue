<script setup lang="ts">
const scrollPosY = ref(0)
const navbarClass = computed(() => {
  if (scrollPosY.value >= 30)
    return 'w-11/12 h-4/5 rounded-[2rem] bg-[#fafafa]/30 dark:bg-[#2e2e2e]/30 px-8 backdrop-blur-xs'
  else return 'w-full h-full px-12'
})
const ypos = () => {
  console.log(scrollPosY.value)
}
window.addEventListener('scroll', function () {
  scrollPosY.value = window.scrollY
})
const anchors = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/aboutus',
    label: 'About Us',
  },
  {
    link: '/property',
    label: 'Properties',
  },
  {
    link: '/agent',
    label: 'Rent Managers',
  },
  {
    link: '/news',
    label: 'Blog',
  },
  {
    link: '/contact',
    label: 'Contact Us',
  },
]
</script>
<template>
  <div class="fixed top-0 z-50 flex items-center justify-center h-22  w-full">
    <div
      :class="[
        'transition-all duration-400  flex justify-between items-center py-4 border-[#e8e8e8]/50 dark:border-[#4d4d4d]/50',
        navbarClass,
      ]"
    >
      <NuxtImg
        src="/rentph-logo.png"
        class="h-8"
      />
      <div class="h-full gap-12 items-center hidden xl:flex">
        <NuxtLink
          v-for="anchor in anchors"
          :to="anchor.link"
          class="relative group pb-1 text-sm dark:hover:text-[#2b68df] hover:text-[#1b4fb5] drop-shadow-md dark:drop-shadow-black/40"
        >
          {{ anchor.label }}
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-[#205ed7] origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
          ></span>
        </NuxtLink>
      </div>
      <div class="hidden xl:flex h-full gap-4 items-center">
        <DarkModeSwitch></DarkModeSwitch>
        <Button @click="ypos" variant="ghost">Login</Button>
        <Button variant="default">Register</Button>
      </div>
      <AppSidebar :anchors="anchors" />
    </div>
  </div>
</template>
