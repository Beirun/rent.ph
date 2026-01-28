<script setup lang="ts"></script>
<template>
  <div
    class="bg-white dark:bg-[#212121] p-4 md:p-6 rounded-lg gap-4 border dark:border-gray-800 border-gray-200 drop-shadow-md w-19/20 max-w-8xl mx-auto"
  >
    <div class="flex flex-col md:flex-row gap-4 items-end">
      <div class="flex flex-col gap-2 flex-1">
        <Label for="location" class="text-sm md:text-base">Keyword</Label>
        <Input
          name="keyword"
          class="w-full py-3 md:py-5 pl-3 border border-dark-100 rounded-md text-sm h-10 md:h-12"
          icon="i-lucide-search"
          placeholder="Keyword"
        />
      </div>
      <div class="flex flex-col gap-2 flex-1">
        <Label for="location" class="text-sm md:text-base">Location</Label>
        <Select id="location">
          <SelectTrigger class="w-full py-3 md:py-5">
            <SelectValue>
              <Icon name="lucide:map-pin" />
              <Label class="text-sm md:text-base">Select/Enter a City</Label>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-2 flex-1">
        <Label for="type" class="text-sm md:text-base">Type</Label>
        <Select id="type">
          <SelectTrigger class="w-full py-3 md:py-5">
            <SelectValue placeholder="Any" class="text-sm md:text-base" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-2 flex-1">
        <Label for="PriceRange" class="text-sm md:text-base">Price Range</Label>
        <Select id="PriceRange">
          <SelectTrigger class="w-full py-3 md:py-5">
            <SelectValue placeholder="Any" class="text-sm md:text-base" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
              <SelectItem value="3">Option 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button class="gap-2 px-4 md:px-6 h-10 md:h-12 whitespace-nowrap">
        <Icon name="lucide:search" />
        <span class="text-sm md:text-base">Search</span>
      </Button>
    </div>
  </div>
</template>
