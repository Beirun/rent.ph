<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div id="wholePage" class="w-screen overflow-hidden flex flex-col">
    <!-- Navbar placeholder -->
    <div class="h-16 w-full bg-muted animate-pulse" />

    <!-- Background stays as-is -->
    <div
      class="bg-[url(/blogBackGround.png)] bg-no-repeat w-screen h-screen bg-cover fixed -z-10"
    ></div>

    <div id="scrollArea">
      <!-- Head section -->
      <div class="justify-items-center pt-50 flex flex-col items-center gap-4">
        <Skeleton class="h-10 w-1/2" />
        <Skeleton class="h-10 w-1/3" />

        <div class="flex flex-row gap-5 mt-5">
          <div class="flex items-center gap-3">
            <Skeleton class="size-4 rounded-full" />
            <Skeleton class="h-4 w-24" />
          </div>
          <Skeleton class="h-4 w-1" />
          <div class="flex items-center gap-3">
            <Skeleton class="size-4 rounded-full" />
            <Skeleton class="h-4 w-20" />
          </div>
        </div>
      </div>

      <!-- Image + share -->
      <div class="justify-items-center mt-10 flex flex-col items-center">
        <Skeleton class="w-150 h-150 rounded-sm" />

        <div class="flex flex-row gap-3 mt-20 w-215 items-center">
          <Skeleton class="h-4 w-10" />
          <Skeleton class="size-5 rounded-full" />
          <Skeleton class="size-5 rounded-full" />
          <Skeleton class="size-5 rounded-full" />
        </div>
      </div>

      <!-- Content -->
      <div class="max-w-4xl mx-auto px-4 py-8 leading-relaxed">
        <!-- Section title -->
        <Skeleton class="h-8 w-2/3 mb-6" />

        <!-- Paragraphs -->
        <Skeleton class="h-4 w-full mb-3" />
        <Skeleton class="h-4 w-full mb-3" />
        <Skeleton class="h-4 w-5/6 mb-6" />

        <Skeleton class="h-6 w-1/2 mb-6" />

        <Skeleton class="h-4 w-full mb-3" />
        <Skeleton class="h-4 w-full mb-3" />
        <Skeleton class="h-4 w-4/5 mb-8" />

        <Skeleton class="h-px w-full my-8" />

        <!-- Repeating sections -->
        <Skeleton class="h-6 w-1/2 mb-4" />
        <Skeleton class="h-4 w-full mb-3" />
        <Skeleton class="h-4 w-full mb-3" />
        <Skeleton class="h-4 w-5/6 mb-8" />

        <!-- Table placeholder -->
        <div class="space-y-3 mb-10">
          <Skeleton class="h-6 w-full" />
          <Skeleton class="h-6 w-full" />
          <Skeleton class="h-6 w-full" />
          <Skeleton class="h-6 w-full" />
        </div>

        <!-- Footer CTA -->
        <Skeleton class="h-6 w-1/2 mb-4" />
        <Skeleton class="h-4 w-full mb-3" />
        <Skeleton class="h-4 w-4/5 mb-6" />
        <Skeleton class="h-4 w-1/3" />
      </div>
    </div>
  </div>
</template>
