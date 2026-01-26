<script setup lang="ts"></script>
<template>
  <div class="w-screen flex justify-center pb-5 md:py-10">
    <div
      class="flex md:flex-row md:h-100 md:max-h-90 flex-col w-9/10 rounded-lg shadow-lg overflow-hidden bg-[#fafafa] dark:bg-[#212121] border border-[#e8e8e8]/50 dark:border-[#2e2e2e]"
    >
      <div class="h-full aspect-square bg-[url('/blog-header.jpg')] bg-cover"></div>
      <div class="w-full justify-between p-6 xl:p-8 flex flex-col gap-2 xl:gap-4">
        <div class="flex gap-6">
          <div class="flex items-center gap-2">
            <Icon name="radix-icons:calendar" class="size-4" />
            <span class="xl:text-sm 2xl:text-base md:text-xs">Jan 23, 2026</span>
          </div>
          <span class="h-full w-0.5 bg-foreground/50"></span>
          <div class="flex items-center gap-2">
            <Icon name="radix-icons:eye-open" class="size-4" />
            <span class="xl:text-base md:text-[10px]">160 views</span>
          </div>
        </div>
        <div class="2xl:text-4xl xl:text-2xl font-bold">
          How Much Rent Can You Really Afford in 2026? A Practical Budgeting Guide for Filipino
          Renters
        </div>
        <div>
          <div class="leading-6 xl:leading-8 2xl:text-base xl:text-xs text-[11px]">
            Renting in 2026 is about more than just a monthly fee—it’s about peace of mind. From
            rising utility costs to the need for a home office, your budget needs to work harder
            than ever. We’ve broken down the ultimate 2026 Rent Affordability Guide to help you find
            a space that fits your wallet AND your lifestyle. Don't sign that lease until you read
            this!
          </div>
          <div class="text-[#205ed7] dark:text-[#0454A1] 2xl:text-base xl:text-xs text-[11px]">
            #RentPH #PhilippineRealEstate #BudgetingTips2026
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Button variant="link" class="p-0">
            <span class="text-[#205ed7] dark:text-[#0454A1]">Read More</span>
            <Icon name="radix-icons:arrow-right" class="bg-[#205ed7] dark:bg-[#0454A1]" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
