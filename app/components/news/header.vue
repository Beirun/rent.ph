<script setup lang="ts"></script>
<template>
  <div class="w-screen flex justify-center py-10">
    <div class="h-100 flex w-9/10 rounded-lg shadow-lg overflow-hidden">
      <div class="h-full aspect-square bg-[url('/blog-header.jpg')] bg-cover"></div>
      <div class="h-full w-full p-8 flex flex-col gap-4">
        <div class="flex gap-6">
          <div class="flex items-start gap-2">
            <Icon name="radix-icons:calendar" class="size-5" /> <span>Jan 23, 2026</span>
          </div>
          <span>|</span>
          <div class="flex items-start gap-2">
            <Icon name="radix-icons:eye-open" class="size-5" /> <span>160 views</span>
          </div>
        </div>
        <div class="text-4xl font-bold">
          How Much Rent Can You Really Afford in 2026? A Practical Budgeting Guide for Filipino
          Renters
        </div>
        <div class="flex flex-col">
          <div class="leading-8">
            Renting in 2026 is about more than just a monthly fee—it’s about peace of mind. From
            rising utility costs to the need for a home office, your budget needs to work harder
            than ever. We’ve broken down the ultimate 2026 Rent Affordability Guide to help you find
            a space that fits your wallet AND your lifestyle. Don't sign that lease until you read
            this!
          </div>
          <div class="text-[#205ed7] dark:text-[#0454A1]">
            #RentPH #PhilippineRealEstate #BudgetingTips2026
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Button variant="link" class="p-0">
            <span class="text-[#205ed7] dark:text-[#0454A1]">Read More</span>
            <Icon name="radix-icons:arrow-right bg-[#205ed7] dark:bg-[#0454A1]" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
