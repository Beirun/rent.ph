<script setup lang="ts">
interface Props {
    heartActive?: boolean
    orientation?: string
}
const props = withDefaults(defineProps<Props>(), {
    heartActive: false,
    orientation: 'vertical',
})
// Linked to prop for initial state
const heartActive = ref(props.heartActive)
</script>

<template>
    <div v-if="orientation === 'vertical'" class="rounded-xl cursor-pointer w-100 h-130 flex flex-col relative
            bg-[#fafafa] dark:bg-[#1a1a1a]
            shadow-lg shadow-black/15
            hover:shadow-2xl hover:-translate-y-1
            transition-all duration-300 overflow-hidden border border-gray-200 dark:border-zinc-800">

        <div class="h-[70%] w-full relative bg-[#fafafa] dark:bg-zinc-900 overflow-hidden">
            <div class="absolute inset-0 bg-[url('/rebecca.png')] bg-cover bg-no-repeat bg-center z-0"></div>

            <button @click.stop="heartActive = !heartActive"
                class="absolute top-4 right-4 size-10 bg-white/90 dark:bg-[#2e2e2e]/90 backdrop-blur-md rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 z-10 shadow-sm">
                <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 text-black dark:text-white" />
                <Icon v-else name="radix-icons:heart-filled" class="size-6 text-red-500" />
            </button>

            <span
                class="absolute top-0 left-0 py-1.5 px-4 text-sm text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-lg rounded-br-2xl shadow-sm z-10">
                613 Listings
            </span>
        </div>

        <div class="h-[30%] w-full flex p-4 flex-col justify-between bg-white dark:bg-[#1e1e1e]">
            <div class="flex flex-col gap-1">
                <div class="text-xl font-bold text-black dark:text-white">
                    Rebecca Ferguson
                </div>
                <div class="text-sm w-full gap-2 font-normal text-gray-500 dark:text-gray-400">
                    <div class="flex items-center gap-2">
                        <Icon name="radix-icons:mobile" />
                        +63 123 2345 678
                    </div>
                    <div class="flex items-center gap-2">
                        <Icon name="radix-icons:envelope-closed" />
                        rentsample@gmail.com
                    </div>
                </div>
                <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    <Icon name="radix-icons:map-pin" />
                    123 Oak Street, Downtown
                </div>
                <div class="flex gap-2 items-center mt-1">
                    <div class="flex gap-0.5">
                        <Icon v-for="(_, index) in 5" :key="index" name="radix-icons:star-filled"
                            class="text-yellow-500 size-3.5" />
                    </div>
                    <span class="text-[10px] text-gray-400 font-medium">(5 • 12 Reviews)</span>
                </div>
            </div>

            <div class="flex justify-end border-t border-gray-100 dark:border-zinc-800 pt-2">
                <Button variant="link" class="p-0 h-auto text-[#205ed7] dark:text-[#3b82f6] font-bold text-sm">View
                    Listings</Button>
            </div>
        </div>
    </div>
    <div v-else
        class="h-75 col-span-4 flex shadow-lg relative bg-[#fafafa] dark:bg-[#1e1e1e] rounded-xl overflow-hidden">
        <div class="h-full w-full rounded-t-lg">
            <button @click="heartActive = !heartActive"
                class="absolute top-4 right-4 size-10 bg-[#fafafa] rounded-full flex justify-center items-center active:scale-95 hover:scale-105 transition-transform duration-200 z-10">
                <Icon v-if="!heartActive" name="radix-icons:heart" class="size-6 dark:bg-black/50" />
                <Icon v-else name="radix-icons:heart-filled" class="size-6 bg-red-500" />
            </button>
            <span
                class="absolute top-0 left-0 py-1.5 px-4 text-sm text-[#fafafa] bg-[#205ed7] dark:bg-[#1948a7] rounded-tl-lg rounded-br-2xl shadow-sm">
                613 Listings
            </span>
        </div>
        <div
            class="h-full w-full bg-gradient-to-t from-[#fafafa] to-transparent dark:from-black dark:to-transparent flex p-4 lg:pt-20 flex-col justify-center gap-2">
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
</template>