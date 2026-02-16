<script setup lang="ts"></script>

<template>
  <div
    class="dark:bg-[#212121] p-4 md:p-6 rounded-lg gap-4 border border-gray-300 w-19/20 max-w-8xl mx-auto dark:border-gray-800"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row gap-4 items-end">
      
      <div class="flex flex-col gap-2 flex-1 w-full">
        <Label for="keyword" class="text-sm font-medium">Keyword</Label>
        <Input
          id="keyword"
          name="keyword"
          class="w-full py-3 pl-3 border border-dark-100 rounded-md text-sm h-10"
          icon="i-lucide-search"
          placeholder="Keyword"
        />
      </div>

      <div class="flex flex-col gap-2 flex-1 w-full">
        <Label for="location" class="text-sm font-medium">Location</Label>
        <Select id="location">
          <SelectTrigger class="w-full py-3 md:py-5">
            <template #default>
              <div class="flex items-center gap-2">
                <Icon name="lucide:map-pin" />
                <SelectValue placeholder="Select/Enter a City" />
              </div>
            </template>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="cebu">Cebu City</SelectItem>
              <SelectItem value="manila">Metro Manila</SelectItem>
              <SelectItem value="davao">Davao City</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div class="flex flex-col gap-2 flex-1 w-full">
        <Label for="type" class="text-sm font-medium">Type</Label>
        <Select id="type">
          <SelectTrigger class="w-full py-3 md:py-5">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="lot">Lot</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div class="flex flex-col gap-2 flex-1 w-full">
        <Label for="PriceRange" class="text-sm font-medium">Price Range</Label>
        <Select id="PriceRange">
          <SelectTrigger class="w-full py-3 md:py-5">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">₱0 - ₱1M</SelectItem>
            <SelectItem value="2">₱1M - ₱5M</SelectItem>
            <SelectItem value="3">₱5M+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button 
        class="bg-[#fe8e0a] hover:bg-[#e07d09] text-white gap-2 w-full lg:w-auto px-8 h-10 md:h-12 transition-colors"
      >
        <Icon name="lucide:search" class="size-4 text-[#fafafa]" />
        <span class="font-semibold text-[#fafafa]">Search</span>
      </Button>
    </div>
  </div>
</template>