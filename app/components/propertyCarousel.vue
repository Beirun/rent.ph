<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface Props {
    title: string
    subtitle: string
    // Changed from itemsCount: number to items: any[]
    items: any[]
}

const props = defineProps<Props>()

const scrollContainer = ref<HTMLElement | null>(null)
const showLeftArrow = ref(false)
const showRightArrow = ref(true)

const updateArrows = () => {
    if (scrollContainer.value) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
        const canScroll = scrollWidth > clientWidth 
        
        showLeftArrow.value = canScroll && scrollLeft > 10
        showRightArrow.value = canScroll && (scrollLeft + clientWidth < scrollWidth - 10)
    }
}

const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.value) {
        const scrollAmount = 350
        scrollContainer.value.scrollBy({
            left: direction === 'right' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        })
    }
}

onMounted(() => {
    const el = scrollContainer.value
    if (el) {
        el.addEventListener('scroll', updateArrows)
        // Initial check after content renders
        setTimeout(updateArrows, 100)
    }
})

onUnmounted(() => {
    scrollContainer.value?.removeEventListener('scroll', updateArrows)
})
</script>

<template>
    <div class="flex flex-col w-full mt-15">
        <h1 class="text-2xl font-bold">{{ title }}</h1>
        <p class="uppercase text-sm text-gray-400 dark:text-gray-500">{{ subtitle }}</p>
    </div>

    <div class="relative group">
        <button v-if="showLeftArrow" @click="scroll('left')"
            class="absolute -left-12 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all active:scale-95">
            <Icon name="radix-icons:arrow-left" class="size-6 text-gray-700 dark:text-gray-200" />
        </button>

        <div ref="scrollContainer"
            class="flex gap-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-4 px-2">
            <cardListingPropertiesPage v-for="property in items" :key="property.id" v-bind="property"
                orientation="vertical" class="snap-start shrink-0" />
        </div>

        <button v-if="showRightArrow" @click="scroll('right')"
            class="absolute -right-12 top-1/2 -translate-y-1/2 z-10 size-12 rounded-full bg-white dark:bg-[#2e2e2e] shadow-xl border border-gray-200 dark:border-zinc-700 flex items-center justify-center hover:scale-110 transition-all active:scale-95">
            <Icon name="radix-icons:arrow-right" class="size-6 text-gray-700 dark:text-gray-200" />
        </button>
    </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>