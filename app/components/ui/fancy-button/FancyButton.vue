<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '@/lib/utils'

interface FancyButtonProps {
    class?: string
    glowColor?: string
}

const props = withDefaults(defineProps<FancyButtonProps>(), {
    glowColor: '#656fe288'
})

const divRef = ref<HTMLButtonElement | null>(null)
const isFocused = ref(false)
const position = ref({ x: 0, y: 0 })
const opacity = ref(0)

const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.value || isFocused.value) return

    const div = divRef.value
    const rect = div.getBoundingClientRect()

    position.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
}

const handleFocus = () => {
    isFocused.value = true
    opacity.value = 1
}

const handleBlur = () => {
    isFocused.value = false
    opacity.value = 0
}

const handleMouseEnter = () => {
    opacity.value = 1
}

const handleMouseLeave = () => {
    opacity.value = 0
}
</script>

<template>
    <button ref="divRef" @mousemove="handleMouseMove" @focus="handleFocus" @blur="handleBlur"
        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" :class="cn(
            'relative inline-flex w-fit mx-auto h-12 items-center justify-center overflow-hidden rounded-md border-2 px-6 font-medium text-white shadow-2xl transition-colors focus:outline-hidden focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50',
            // Default colors (apply only if not overridden)
            'dark:border-[#656fe2] border-[#c0c6fc] bg-linear-to-r dark:from-[#070e41] dark:to-[#141d57] from-[#9ba3fdfd] to-[#3d5af1]',
            props.class
        )">
        <div class="pointer-events-none absolute -inset-px opacity-0 transition duration-300" :style="{
            opacity,
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, ${glowColor}, #00000026)`,
        }" />
        <span class="relative z-20">
            <slot>Click Me</slot>
        </span>
    </button>
</template>
