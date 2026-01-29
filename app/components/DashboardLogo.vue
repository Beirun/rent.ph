<script setup lang="ts">
import { useSidebar } from '@/components/ui/sidebar'

const { state } = useSidebar()
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <NuxtImg
      @click="$router.push('/')"
      :src="state === 'collapsed' ? '/house.png' : '/rentlogo-official.png'"
      class="h-12 w-auto object-contain cursor-pointer"
    />
  </div>
</template>
