<script setup lang="ts">
defineProps<{
  anchors: Array<{ label: string; link: string }>
}>()
</script>

<template>
  <Sheet class="block xl:hidden">
    <SheetTrigger as-child>
      <Button class="block xl:hidden"> <Icon name="radix-icons:hamburger-menu" /> </Button>
    </SheetTrigger>

    <SheetContent class="xl:hidden w-70 flex">
      <SheetHeader>
        <div class="flex justify-center">
          <NuxtImg
            src="/rentph-logo.png"
            class="h-12 drop-shadow-lg drop-shadow-[#eecfa6]/80 dark:drop-shadow-[#e0af6e]/40"
          />
        </div>
      </SheetHeader>
      <div class="flex h-full flex-col p-4 gap-8">
        <NuxtLink
          v-for="anchor in anchors"
          :to="anchor.link"
          class="relative group pb-1 font-medium dark:hover:text-[#2b68df] hover:text-[#1b4fb5] drop-shadow-md dark:drop-shadow-black/40"
        >
          <span class="ml-2 text-xl font-medium">{{ anchor.label }}</span>
          <span
            class="absolute top-1/2 -translate-y-1/2 -left-1 h-full w-0.5 bg-[#205ed7] origin-center scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
          ></span>
        </NuxtLink>
      </div>
      <SheetFooter class="">
        <DarkModeSwitch></DarkModeSwitch>
        <Button variant="ghost">Login</Button>
        <Button variant="default">Register</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
