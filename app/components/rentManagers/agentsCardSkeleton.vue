<script setup lang="ts">
interface Props {
  heartActive?: boolean
  orientation?: string
}

const props = withDefaults(defineProps<Props>(), {
  heartActive: false,
  orientation: 'vertical',
})
</script>
<template>
  <!-- Vertical skeleton -->
  <div
    v-if="orientation === 'vertical'"
    class="rounded-xl w-85 h-110 flex flex-col relative bg-white dark:bg-[#1a1a1a] shadow-md dark:border-zinc-800"
  >
    <!-- Image -->
    <div class="h-[60%] w-full relative overflow-hidden">
      <Skeleton class="absolute inset-0 rounded-t-lg" />
      <Skeleton class="absolute top-4 right-4 size-10 rounded-full" />
      <Skeleton class="absolute top-0 left-0 h-7 w-28 rounded-tl-lg rounded-br-2xl" />
    </div>

    <!-- Content -->
    <div
      class="h-[40%] w-full flex p-4 flex-col justify-between rounded-b-lg bg-white dark:bg-[#1e1e1e]"
    >
      <div class="flex flex-col gap-3">
        <Skeleton class="h-6 w-3/4" />

        <div class="flex flex-col gap-2">
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-5/6" />
          <Skeleton class="h-4 w-2/3" />

          <div class="flex items-center gap-1">
            <Skeleton v-for="n in 5" :key="n" class="h-3.5 w-3.5 rounded-sm" />
            <Skeleton class="h-3 w-10 ml-2" />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <Skeleton class="h-3 w-24" />
      </div>
    </div>
  </div>

  <!-- Horizontal skeleton -->
  <div
    v-else
    class="h-75 col-span-4 flex shadow-lg relative bg-white dark:bg-[#1e1e1e] rounded-xl overflow-hidden"
  >
    <!-- Image -->
    <div class="h-[60%] w-full relative overflow-hidden">
      <Skeleton class="absolute inset-0 rounded-lg" />
      <Skeleton class="absolute top-4 right-4 size-10 rounded-full" />
      <Skeleton class="absolute top-0 left-0 h-7 w-28 rounded-tl-lg rounded-br-2xl" />
    </div>

    <!-- Content -->
    <div class="h-[40%] w-full flex p-4 flex-col justify-between bg-white dark:bg-[#1e1e1e]">
      <div class="flex flex-col gap-3">
        <Skeleton class="h-6 w-1/2" />
        <Skeleton class="h-4 w-5/6" />
        <Skeleton class="h-4 w-2/3" />
      </div>
    </div>
  </div>
</template>
