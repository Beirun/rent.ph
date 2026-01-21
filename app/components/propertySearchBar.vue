<script setup lang="ts"></script>
<template>
    <div
      class="flex bg-[#fafafa] dark:bg-[#212121] p-8 rounded-lg gap-4 border dark:border-gray-800 border-gray-200 drop-shadow-md w-400"
    >
    <div class="flex flex-col gap-4">
        <Label for="location">Keyword</Label>
        <Input name="keyword" class="w-100 py-2 pl-3 border border-dark-100 rounded-md text-sm h-10.5" icon="i-lucide-search" placeholder="Keyword" />
      </div>
      <div class="flex flex-col gap-4">
        <Label for="location">Location</Label>
        <Select id="location">
          <SelectTrigger class="w-110 py-5">
            <SelectValue>
              <Icon name="lucide:map-pin" />
              <Label>Select/Enter a City</Label>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem>1</SelectItem>
              <SelectItem>1</SelectItem>
              <SelectItem>1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-4">
        <Label for="type">Type</Label>
        <Select id="type">
          <SelectTrigger class="w-60 py-5">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem>1</SelectItem>
              <SelectItem>1</SelectItem>
              <SelectItem>1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-4">
        <Label for="PriceRange">Price Range</Label>
        <Select id="PriceRange">
          <SelectTrigger class="w-60 py-5">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem>1</SelectItem>
              <SelectItem>1</SelectItem>
              <SelectItem>1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <div class="flex items-end">
        <Button class="gap-2 px-6 py-5.25">
          <Icon name="lucide:search" />
          Search
        </Button>
      </div>
    </div>
</template>