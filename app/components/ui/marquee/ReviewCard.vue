<script lang="ts" setup>
interface Props {
  img: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex shrink-0 items-center justify-center">
    <img :src="img" class="h-32 w-32 object-contain" alt="" />
  </div>
</template>
