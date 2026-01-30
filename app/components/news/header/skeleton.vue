<template>
  <div class="w-screen flex justify-center pb-5 md:py-10">
    <div
      class="flex md:flex-row md:h-100 md:max-h-90 flex-col w-9/10 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-[#212121] border border-[#e8e8e8]/50 dark:border-[#2e2e2e]"
    >
      <!-- Image -->
      <Skeleton class="h-full aspect-square w-full" />

      <!-- Content -->
      <div class="w-full justify-between p-6 xl:p-8 flex flex-col gap-2 xl:gap-4">
        <!-- Meta -->
        <div class="flex gap-6">
          <div class="flex items-center gap-2">
            <Skeleton class="size-4 rounded-full" />
            <Skeleton class="h-3 w-20" />
          </div>
          <span class="h-full w-0.5 bg-foreground/20"></span>
          <div class="flex items-center gap-2">
            <Skeleton class="size-4 rounded-full" />
            <Skeleton class="h-3 w-16" />
          </div>
        </div>

        <!-- Title -->
        <Skeleton class="h-8 xl:h-10 w-3/4" />

        <!-- Description -->
        <div class="flex flex-col gap-2">
          <Skeleton class="h-3 w-full" />
          <Skeleton class="h-3 w-full" />
          <Skeleton class="h-3 w-5/6" />
          <Skeleton class="h-3 w-2/3" />
        </div>

        <!-- Tags -->
        <Skeleton class="h-3 w-1/2" />

        <!-- Footer -->
        <div class="flex flex-row items-center">
          <div class="flex flex-row items-center gap-2 justify-start w-1/2">
            <Skeleton class="h-6 w-6 rounded-sm" />
            <Skeleton class="h-6 w-6 rounded-sm" />
            <Skeleton class="h-6 w-6 rounded-sm" />
            <Skeleton class="h-6 w-6 rounded-sm" />
            <Skeleton class="h-6 w-6 rounded-sm" />
          </div>
          <div class="flex items-center gap-2 justify-end w-1/2">
            <Skeleton class="h-4 w-20" />
            <Skeleton class="h-4 w-4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
