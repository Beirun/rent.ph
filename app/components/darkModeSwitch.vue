<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const colorMode = useColorMode()

const changeMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <Button variant="ghost" @click="changeMode">
    <Icon
      v-if="colorMode.preference === 'light'"
      name="radix-icons:moon"
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Icon
      v-else
      name="radix-icons:sun"
      class="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span v-if="colorMode.preference === 'light'" class="block lg:hidden">Switch To Dark Mode</span>
    <span v-else class="block lg:hidden">Switch To Light Mode</span>
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
