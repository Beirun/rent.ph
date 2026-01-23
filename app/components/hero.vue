<script setup lang="ts">
import { LiquidGlassCard } from '@/components/ui/liquid-glass'
import { FancyButton } from './ui/fancy-button'

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
    <!-- <div class="flex bg-[#fafafa] dark:bg-[#212121] p-8 rounded-lg gap-4 border dark:border-gray-800 border-gray-200"> -->
    <LiquidGlassCard class="p-12 mt-12 border-0 bg-white/20 dark:bg-[#212121]/80" borderRadius="5rem"
      glowIntensity="none" blurIntensity="sm" shadowIntensity="xs">
      <div class="flex gap-4 items-center">
        <div class="flex">
          <div class="flex flex-col gap-4">
            <!-- <Label for="location">Location</Label> -->
            <Select id="location">
              <SelectTrigger
                class="w-100 py-5 color-base rounded-full rounded-tr-none rounded-br-none bg-neutral-100/70 dark:bg-neutral-900/70 dark:border-0">
                <SelectValue>
                  <Icon name="lucide:map-pin" />
                  <Label>Select a City</Label>
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
            <!-- <Label for="type">Type</Label> -->
            <Select id="type">
              <SelectTrigger
                class="w-75 py-5 color-base rounded-full ml-1 rounded-tl-none bg-neutral-100/70 dark:bg-neutral-900/70 rounded-bl-none dark:border-gray-800/70 dark:border-0">
                <SelectValue>
                  <Icon name="lucide:home" />
                  <Label>Select a property type</Label>
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
          <FancyButton
            class="gap-2 px-6 h-12 rounded-full border-0 from-[var(--primary-orange)] to-[var(--color-orange-700)] dark:from-[var(--primary-orange)] dark:to-[var(--color-orange-700)]"
            glowColor="var(--color-orange-400)">
            <div class="flex items-center">
              <Icon name="lucide:search" class="bg-[#fafafa] dark:bg-[#121212]" />
              <span class="pl-1 text-[#fafafa] dark:text-[#121212]">Search</span>
            </div>
          </FancyButton>
        </div>
      </div>
      <!-- </div> -->
    </LiquidGlassCard>
  </div>
</template>
