<script setup lang="ts"></script>

<template>
  <div
    class="grow flex flex-row xl:flex-col w-full xl:w-100 h-25 md:h-55 xl:h-auto rounded-lg shadow-lg overflow-hidden bg-white dark:bg-[#212121] border border-[#e8e8e8]/50 dark:border-[#2e2e2e]"
  >
    <!-- Image -->
    <Skeleton class="xl:w-full aspect-square w-full" />

    <!-- Content -->
    <div class="h-full w-full p-2 md:p-8 flex flex-col gap-1 md:gap-4">
      <!-- Meta -->
      <div class="flex gap-2 2xl:gap-4 text-sm w-full">
        <div class="flex items-center gap-2">
          <Skeleton class="size-2 md:size-4 rounded-full" />
          <Skeleton class="h-2 md:h-3 w-14" />
        </div>
        <Skeleton class="h-2 md:h-3 w-1" />
        <div class="flex items-center gap-2">
          <Skeleton class="size-2 md:size-4 rounded-full" />
          <Skeleton class="h-2 md:h-3 w-12" />
        </div>
      </div>

      <!-- Title -->
      <Skeleton class="h-4 md:h-6 w-4/5" />

      <!-- Description -->
      <Skeleton class="hidden md:block h-3 w-full" />
      <Skeleton class="hidden md:block h-3 w-11/12" />
      <Skeleton class="hidden md:block h-3 w-4/5" />

      <!-- Social icons -->
      <div class="flex flex-row items-center gap-2 w-1/2 mt-2">
        <Skeleton class="h-5 w-5 rounded-sm" />
        <Skeleton class="h-5 w-5 rounded-sm" />
        <Skeleton class="h-5 w-5 rounded-sm" />
        <Skeleton class="h-5 w-5 rounded-sm" />
        <Skeleton class="h-5 w-5 rounded-sm" />
      </div>
    </div>
  </div>
</template>
