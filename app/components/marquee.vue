<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const track = ref(null)

onMounted(() => {
  gsap.to(track.value, {
    xPercent: -50,
    repeat: -1,
    duration: 20,
    ease: 'linear',
  })
})
</script>
<template>
  <div class="relative overflow-hidden w-full bg-background">
    <div ref="track" class="flex w-max gap-6">
      <div
        v-for="(item, i) in items"
        :key="'a' + i"
        class="px-6 py-3 rounded-xl border bg-card text-card-foreground"
      >
        {{ item }}
      </div>

      <div
        v-for="(item, i) in items"
        :key="'b' + i"
        class="px-6 py-3 rounded-xl border bg-card text-card-foreground"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
