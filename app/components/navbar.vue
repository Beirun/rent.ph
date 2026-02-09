<script setup lang="ts">
const isCurrentRoute = (path: string) => {
  const route = useRoute()

  return route.path.toLowerCase() === path.toLowerCase()
}
const scrollPosY = ref(0)
const navbarClass = computed(() => {
  if (scrollPosY.value >= 30)
    return 'w-11/12 h-4/5 rounded-[2rem] bg-white/30 dark:bg-[#2e2e2e]/30 px-4 md:px-8 backdrop-blur-xs'
  else return 'w-full h-full px-2 md:px-6 lg:px-10 xl:px-12'
})

interface NewsProps {
  id?: number
  slug?: string
  title?: string
  content?: string
  image?: string
  category?: any
  author?: any
  url?: string
}

const props = defineProps<NewsProps>()

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
    link: '/property',
    label: 'Properties',
  },
  {
    link: '/agent',
    label: 'Rent Managers',
  },
  {
    link: '/blogs',
    label: 'Blog',
  },
  {
    link: '/contact',
    label: 'Contact Us',
  },
  {
    link: '/aboutus',
    label: 'About Us',
  },
    {
    link: '/newsfromhomes',
    label: 'News',
  },
]
</script>
<template>
  <div class="fixed top-0 z-50 flex items-center justify-center h-22 w-full">
    <div
      :class="[
        'transition-all duration-400 flex justify-between items-center py-4 border-[#e8e8e8]/50 dark:border-[#4d4d4d]/50',
        navbarClass,
      ]"
    >
      <NuxtImg @click="$router.push('/')" src="/rentlogo-official.png" class="h-12" />
      <div class="h-full gap-12 items-center hidden xl:flex">
        <NuxtLink
          v-for="anchor in anchors"
          :to="anchor.link"
          :class="[
            'relative group pb-1 text-base dark:hover:text-[#2b68df] hover:text-[#1b4fb5] drop-shadow-md dark:drop-shadow-black/40',
            isCurrentRoute(anchor.link) ? 'dark:text-[#2b68df] text-[#1b4fb5]' : '',
          ]"
        >
          {{ anchor.label }}
          <span
            :class="[
              'absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-[#205ed7] origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100',
              isCurrentRoute(anchor.link) ? 'scale-x-100' : '',
            ]"
          ></span>
        </NuxtLink>
      </div>
      <div class="hidden xl:flex h-full gap-4 items-center">
        <DarkModeSwitch></DarkModeSwitch>
        <AccountForm>
          <Button @click="ypos" variant="ghost">Login</Button>
        </AccountForm>
        <RegisterForm>
          <Button variant="default" class="text-[#121212] dark:text-[#fafafa]">Register</Button>
        </RegisterForm>
      </div>
      <AppSidebar :anchors="anchors" />
    </div>
  </div>
</template>
