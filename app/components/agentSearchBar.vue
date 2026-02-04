<script setup lang="ts"></script>
<template>
  <div
    class="dark:bg-[#212121] p-4 md:p-6 rounded-lg border border-gray-300 dark:border-gray-800 border-gray-200git git  w-full max-w-8xl mx-auto"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4 items-end">
      
      <div class="flex flex-col gap-2 flex-1 w-full">
        <Label for="name" class="text-sm md:text-base font-medium">Enter Name</Label>
        <Input
          id="name"
          name="keyword"
          class="w-full dark:border-gray-700 rounded-md h-10 md:h-12 focus-visible:ring-[#fe8e0a]"
          placeholder="Agent or Manager Name"
        />
      </div>

      <div class="flex flex-col gap-2 flex-1 w-full">
        <Label for="province" class="text-sm md:text-base font-medium">Province</Label>
        <Select id="province">
          <SelectTrigger class="w-full h-10 md:h-12 dark:border-gray-700">
            <SelectValue placeholder="Select Province" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="cebu">Cebu</SelectItem>
              <SelectItem value="manila">Metro Manila</SelectItem>
              <SelectItem value="davao">Davao</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="flex flex-col gap-2 flex-1 w-full">
        <Label for="city" class="text-sm md:text-base font-medium">City</Label>
        <Select id="city">
          <SelectTrigger class="w-full h-10 md:h-12 dark:border-gray-700">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Cebu City</SelectItem>
              <SelectItem value="2">Mandaue City</SelectItem>
              <SelectItem value="3">Lapu-Lapu City</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button 
        class="bg-[#fe8e0a] hover:bg-[#e07d09] text-white gap-2 w-full lg:w-auto px-8 h-10 md:h-12 whitespace-nowrap transition-colors mt-2 lg:mt-0"
      >
        <Icon name="lucide:search" class="size-4" />
        <span class="text-sm md:text-base font-semibold">Search</span>
      </Button>
    </div>
  </div>
</template>
