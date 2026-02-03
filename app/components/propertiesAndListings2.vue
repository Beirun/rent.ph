<script setup lang="ts">
import { Skeleton } from './ui/skeleton'

const props = defineProps<{
  properties: any[]
}>()
</script>

<template>
  <div class="px-12 flex flex-col mt-1 max-w-full mx-auto">
    <div v-if="properties.length === 0" class="space-y-8">
      <div v-for="i in 5" :key="i" class="space-y-4">
        <div class="flex flex-col w-full mt-15">
          <h1 class="text-2xl font-bold">Popular Listings</h1>
          <p class="uppercase text-sm text-gray-400 dark:text-gray-500">
            Top picks from our community
          </p>
        </div>
        <div class="relative group">
          <div
            class="flex gap-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-4 px-2"
          >
            <div v-for="j in 8" :key="j" class="w-64 flex flex-col gap-4 snap-start shrink-0">
              <Skeleton class="h-32 w-full rounded-t-lg" />
              <div class="p-2.5 flex flex-col gap-1">
                <Skeleton class="h-4 w-3/4" />
                <Skeleton class="h-4 w-1/2" />
                <div class="flex gap-2">
                  <Skeleton class="h-3 w-8" />
                  <Skeleton class="h-3 w-8" />
                  <Skeleton class="h-3 w-12" />
                </div>
                <div class="flex gap-1">
                  <Skeleton class="h-3.5 w-3.5" v-for="k in 5" :key="k" />
                </div>
                <div class="flex justify-between items-center mt-2 pt-2">
                  <div class="flex gap-1.5 items-center">
                    <Skeleton class="h-5 w-5 rounded-full" />
                    <Skeleton class="h-3 w-16" />
                  </div>
                  <div class="flex gap-1">
                    <Skeleton class="h-6 w-6 rounded-full" />
                    <Skeleton class="h-6 w-6 rounded-full" />
                    <Skeleton class="h-6 w-6 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="space-y-8">
      <PropertyCarousel
        title="Popular Listings"
        subtitle="Top picks from our community"
        :items="properties"
      />
      <PropertyCarousel
        title="Recently Visited"
        subtitle="Pick up where you left off"
        :items="properties"
      />
      <PropertyCarousel
        title="Listings Near You"
        subtitle="Properties right around the corner"
        :items="properties"
      />
      <PropertyCarousel
        title="New Listings"
        subtitle="freshest properties added to our platform"
        :items="properties"
      />
      <PropertyCarousel
        title="Budget Friendly"
        subtitle="high-quality homes that fit your wallet perfectly"
        :items="properties"
      />
    </div>
  </div>
</template>
