<script setup lang="ts">
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
</script>
<template>
  <NuxtPage />
</template>
