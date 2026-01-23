<script setup lang="ts"></script>
<template>
  <div
    class="flex bg-[#fafafa] dark:bg-[#212121] p-6 rounded-lg gap-4 border dark:border-gray-800 border-gray-200 drop-shadow-md w-full max-w-6xl mx-auto"
  >
    <div class="flex flex-col gap-4 flex-1">
      <Label for="location">Keyword</Label>
      <Input
        name="keyword"
        class="w-full py-2 pl-3 border border-dark-100 rounded-md text-sm h-10.5"
        icon="i-lucide-search"
        placeholder="Keyword"
      />
    </div>
    <div class="flex flex-col gap-4 flex-1">
      <Label for="location">Location</Label>
      <Select id="location">
        <SelectTrigger class="w-full py-5">
          <SelectValue>
            <Icon name="lucide:map-pin" />
            <Label>Select/Enter a City</Label>
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
    <div class="flex flex-col gap-4 flex-1">
      <Label for="type">Type</Label>
      <Select id="type">
        <SelectTrigger class="w-full py-5">
          <SelectValue placeholder="Any" />
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
    <div class="flex flex-col gap-4 flex-1">
      <Label for="PriceRange">Price Range</Label>
      <Select id="PriceRange">
        <SelectTrigger class="w-full py-5">
          <SelectValue placeholder="Any" />
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

    <div class="flex items-end">
      <Button class="gap-2 px-8 py-5.25 min-w-[120px]">
        <Icon name="lucide:search" class="bg-[#fafafa] dark:bg-[#121212]" />
        Search
      </Button>
    </div>
  </div>
</template>
