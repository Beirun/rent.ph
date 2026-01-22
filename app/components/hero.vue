<script setup lang="ts">
const colorMode = useColorMode()
const heroBg = computed(() => {
  if (colorMode.preference === 'light') {
    return ` bg-[linear-gradient(to_top,rgba(255,255,255),transparent_40%),url('/hero.jpg')]`
  } else {
    return `bg-[linear-gradient(to_top,rgba(8,8,8)_0%,transparent_40%),url('/hero-dark.jpg')]`
  }
})
</script>
<template>
  <div :class="[
    'h-[110vh] bg-top bg-cover w-screen flex flex-col items-center justify-center gap-5',
    heroBg,
  ]">
    <div class="text-[#FE8E0A] text-8xl font-black">Rent Your Space</div>
    <div class="text-xl font-medium">
      Discover the perfect property in your ideal location
    </div>
    <div class="mt-16 w-auto h-auto px-6 py-8 rounded-lg flex gap-4 items-end">
      <div class="flex gap-1">
        <div class="flex flex-col gap-4">
          <Select id="location">
            <SelectTrigger
              class="w-100 rounded-tr-none rounded-br-none border-[#e8e8e8]/20 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
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
          <Select id="type">
            <SelectTrigger
              class="w-75 rounded-tl-none rounded-bl-none border-[#e8e8e8]/20 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
              <SelectValue>
                <Icon name="lucide:home" />
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
      </div>
      <div class="flex h-full items-end">
        <Button class="gap-2 px-6 py-5">
          <Icon name="lucide:search" class="bg-[#fafafa] dark:bg-[#121212]" />
          Search
        </Button>
      </div>
    </div>
  </div>
</template>
