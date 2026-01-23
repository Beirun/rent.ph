<script setup lang="ts">
interface Props {
    heartActive: boolean
    orientation: string
}
const props = withDefaults(defineProps<Props>(), {
    heartActive: false,
    orientation: 'vertical',
})
// Linked to prop for initial state
const heartActive = ref(props.heartActive)
</script>

<template>
    <div v-if="orientation === 'vertical'"
        class="rounded-xl cursor-pointer w-100 h-130 flex flex-col shadow-lg relative bg-[url('/rebecca.png')] bg-cover bg-bottom">
        <div class="h-full w-full rounded-t-lg">
            <button @click="heartActive = !heartActive"
                class="absolute top-4 right-4 size-10 bg-[#fafafa] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 z-10">
                <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 dark:bg-black/50" />
                <Icon v-else name="radix-icons:heart-filled" class="size-6 bg-red-500" />
            </button>
            <span
                class="absolute top-0 left-0 py-2 pl-6 pr-8 -translate-y-1 text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-xl rounded-br-[100px] shadow-md">
                613 Listings
            </span>
        </div>
        <div class="h-full w-full bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent flex p-4 flex-col justify-center gap-2">
            <div class="text-2xl font-medium text-black dark:text-[#e8e8e8]/80">
                Rebecca Ferguson
            </div>
            <div class="text-base font-normal text-[#262626]/80 dark:text-[#e8e8e8]/60">
                123 Oak Street, Downtown
            </div>
            <div class="flex gap-2">
                <div class="flex">
                    <Icon v-for="_ in new Array(5)" :key="_" name="radix-icons:star-filled" class="bg-yellow-500" />
                </div>
                <span class="text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
            </div>
            <div class="flex justify-end">
                <Button variant="link" class="cursor-pointer">View Details</Button>
            </div>
        </div>
    </div>

    <div v-else
        class="h-75 col-span-4 flex shadow-lg relative bg-[#fafafa] dark:bg-[#1e1e1e] rounded-xl overflow-hidden">
        <div class="h-full aspect-square bg-[url('/rebecca.png')] bg-cover bg-bottom relative">
            <span
                class="absolute top-0 left-0 py-2 pl-6 pr-8 -translate-y-1 text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-xl rounded-br-[100px] shadow-md">
                House And Lot
            </span>
        </div>

        <button @click="heartActive = !heartActive"
            class="absolute top-4 right-4 size-10 bg-[#fafafa] shadow-md dark:bg-[#3e3e3e] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 z-10">
            <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 dark:bg-white/30" />
            <Icon v-else name="radix-icons:heart-filled" class="size-6 bg-red-500" />
        </button>

        <div class="h-full w-full flex p-4 flex-col gap-2 justify-between">
            <div class="flex gap-2 items-center">
                <div class="flex">
                    <Icon v-for="_ in new Array(5)" :key="_" name="radix-icons:star-filled" class="bg-yellow-500" />
                </div>
                <span class="text-xs text-[#262626]/80 dark:text-[#e8e8e8]/60">(5 • 12 Reviews)</span>
            </div>

            <div class="flex justify-between items-center">
                <div>
                    <Button variant="link">View Details</Button>
                </div>
            </div>
        </div>
    </div>
</template>