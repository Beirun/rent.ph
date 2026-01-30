<script setup lang="ts"></script>

<template>
  <div class="w-screen py-5 md:py-10 flex flex-col items-center">
    <!-- Title -->
    <div class="w-9/10 py-8 md:py-10">
      <div class="h-8 w-40 bg-muted rounded-md animate-pulse"></div>
    </div>

    <!-- Cards -->
    <div class="flex xl:flex-row flex-col w-9/10 gap-6 md:gap-10">
      <NewsCardSkeleton v-for="i in 4" :key="i" />
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-6 gap-2">
      <div v-for="i in 5" :key="i" class="h-8 w-8 bg-muted rounded-md animate-pulse"></div>
    </div>
  </div>
</template>
