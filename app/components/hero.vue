<script setup lang="ts">
const colorMode = useColorMode()
const heroBg = computed(() => {
  if (colorMode.preference === 'light') {
    return ` bg-[linear-gradient(to_top,rgba(255,255,255,1),transparent_25%),url('/hero.jpg')]`
  } else {
    return `bg-[linear-gradient(to_top,rgba(10,10,10,1)_0%,transparent_25%),url('/hero-dark.jpg')]`
  }
})
</script>
<template>
  <!-- Adjust padding bottom or top to move hero center elements -->
  <div :class="[
    'h-[115vh] bg-top bg-cover w-screen flex flex-col items-center justify-center gap-5 pb-52',
    heroBg,
  ]">
    <div class="text-[#FE8E0A] text-8xl font-black">Rent Your Space</div>
    <div class="text-black/60 dark:text-white/60 text-xl font-medium">
      Discover the perfect property in your ideal location
    </div>
    <div class="flex bg-[#fafafa] dark:bg-[#212121] p-8 rounded-lg gap-4 border dark:border-gray-800 border-gray-200">
      <div class="flex flex-col gap-4">
        <Label for="location">Location</Label>
        <Select id="location">
          <SelectTrigger class="w-100 py-5">
            <SelectValue>
              <Icon name="lucide:map-pin" />
              <Label>Select/Enter a City</Label>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-4">
        <Label for="type">Type</Label>
        <Select id="type">
          <SelectTrigger class="w-75 py-5">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="1">1</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex h-full items-end">
        <Button class="gap-2 px-6 h-12">
          <Icon name="lucide:search" class="bg-[#fafafa] dark:bg-[#121212]" />
          Search
        </Button>
      </div>
    </div>
  </div>
</template>
