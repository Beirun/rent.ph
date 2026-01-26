<script setup lang="ts">
import gsap from 'gsap'
const colorMode = useColorMode()
onMounted(() => {
  const nightValue = 1000 * 60 * 60 * 18
  const now = new Date()
  const currentHours = now.getHours()
  const currentMinutes = now.getMinutes()
  const currentSeconds = now.getSeconds()
  const currentMillis = now.getMilliseconds()
  const currentValue =
    currentMillis +
    1000 * currentSeconds +
    1000 * 60 * currentMinutes +
    1000 * 60 * 60 * currentHours
  setTimeout(
    () => {
      colorMode.preference = 'dark'
    },
    nightValue - currentValue > 0 ? nightValue - currentValue : 0,
  )
})
const overlay = ref()
const logo = ref()

onMounted(() => {
  const el = overlay.value
  const logoEl = logo.value
  const maxR = Math.max(window.innerWidth, window.innerHeight)

  gsap.set(el, {
    maskImage: 'radial-gradient(circle 0px at center, transparent 0px, black 1px)',
    WebkitMaskImage: 'radial-gradient(circle 0px at center, transparent 0px, black 1px)',
  })

  gsap.set(logoEl, { opacity: 0 })

  gsap.fromTo(
    logoEl,
    {
      opacity: 0,
      y: 25,
    },
    {
      delay: 0.25,
      opacity: 2,
      y: 0,
      duration: 2.25,
      ease: 'power3.out',
    },
  )
  gsap.to(
    { r: 0 },
    {
      r: maxR,
      delay: 1.75,
      duration: 2.5,
      ease: 'power3.out',
      onUpdate() {
        const r = this.targets()[0].r
        const edge = r * 0.92

        const mask = `radial-gradient(circle ${r}px at center, transparent 0px, transparent ${edge}px, ${colorMode.preference === 'light' ? 'black' : 'white'} ${r}px)`

        el.style.maskImage = mask
        el.style.WebkitMaskImage = mask
      },
      onComplete() {
        el.style.display = 'none'
      },
    },
  )
})
</script>
<template>
  <div
    ref="overlay"
    class="flex items-center justify-center fixed inset-0 z-100 bg-white dark:bg-[#121212] pointer-events-none"
  >
    <img ref="logo" src="/rentph-logo.png" alt="" class="opacity-0 h-15" />
  </div>
  <NuxtPage />
</template>
