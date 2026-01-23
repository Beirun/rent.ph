<script setup lang="ts">
import { ref, computed } from 'vue'
import { Motion } from 'motion-v'
import { cn } from '@/lib/utils'

interface LiquidGlassCardProps {
    class?: string
    draggable?: boolean
    expandable?: boolean
    width?: string
    height?: string
    expandedWidth?: string
    expandedHeight?: string
    blurIntensity?: 'sm' | 'md' | 'lg' | 'xl'
    shadowIntensity?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    borderRadius?: string
    glowIntensity?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const props = withDefaults(defineProps<LiquidGlassCardProps>(), {
    draggable: true,
    expandable: false,
    blurIntensity: 'xl',
    borderRadius: '32px',
    glowIntensity: 'sm',
    shadowIntensity: 'md',
})

const isExpanded = ref(false)

const handleToggleExpansion = (e: MouseEvent) => {
    if (!props.expandable) return
    // Don't toggle if clicking on interactive elements
    const target = e.target as HTMLElement
    if (target.closest('a, button, input, select, textarea')) return
    isExpanded.value = !isExpanded.value
}

const blurClasses = {
    sm: 'backdrop-blur-xs',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
}

const shadowStyles = {
    none: 'inset 0 0 0 0 rgba(255, 255, 255, 0)',
    xs: 'inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)',
    sm: 'inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)',
    md: 'inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)',
    lg: 'inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)',
    xl: 'inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)',
    '2xl': 'inset 8px 8px 8px 0 rgba(255, 255, 255, 0.6), inset -8px -8px 8px 0 rgba(255, 255, 255, 0.6)',
}

const glowStyles = {
    none: '0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)',
    xs: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)',
    sm: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)',
    md: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)',
    lg: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)',
    xl: '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)',
    '2xl': '0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 60px rgba(255, 255, 255, 0.3)',
}

const containerVariants = computed(() => {
    if (!props.expandable) return {}
    return {
        collapsed: {
            width: props.width || 'auto',
            height: props.height || 'auto',
            transition: {
                duration: 0.4,
                ease: [0.5, 1.5, 0.5, 1],
            },
        },
        expanded: {
            width: props.expandedWidth || 'auto',
            height: props.expandedHeight || 'auto',
            transition: {
                duration: 0.4,
                ease: [0.5, 1.5, 0.5, 1],
            },
        },
    }
})

const motionProps = computed(() => {
    const isMotion = props.draggable || props.expandable
    if (!isMotion) return {}

    return {
        variants: props.expandable ? containerVariants.value : undefined,
        animate: props.expandable ? (isExpanded.value ? 'expanded' : 'collapsed') : undefined,
        drag: props.draggable,
        dragConstraints: props.draggable ? { left: 0, right: 0, top: 0, bottom: 0 } : undefined,
        dragElastic: props.draggable ? 0.3 : undefined,
        dragTransition: props.draggable
            ? {
                bounceStiffness: 300,
                bounceDamping: 10,
                power: 0.3,
            }
            : undefined,
        whileDrag: props.draggable ? { scale: 1.02 } : undefined,
        whileHover: { scale: 1.01 },
        whileTap: { scale: 0.98 },
    }
})

const componentStyle = computed(() => ({
    borderRadius: props.borderRadius,
    ...(props.width && !props.expandable && { width: props.width }),
    ...(props.height && !props.expandable && { height: props.height }),
}))
</script>

<template>
    <!-- Hidden SVG Filter -->
    <svg class="hidden">
        <defs>
            <filter id="glass-blur" x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
                <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="1" result="turbulence" />
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="200" xChannelSelector="R"
                    yChannelSelector="G" />
            </filter>
        </defs>
    </svg>

    <Motion :as="draggable || expandable ? 'div' : 'div'" :class="cn(
        'relative',
        draggable ? 'cursor-grab active:cursor-grabbing' : '',
        expandable ? 'cursor-pointer' : '',
        props.class
    )" :style="componentStyle" v-bind="{ ...motionProps }" @click="handleToggleExpansion">
        <!-- Bend Layer (Backdrop blur with distortion) -->
        <div class="absolute inset-0 z-0" :class="blurClasses[blurIntensity]" :style="{
            borderRadius,
            filter: 'url(#glass-blur)',
        }" />

        <!-- Face Layer (Main shadow and glow) -->
        <div class="absolute inset-0 z-10" :style="{
            borderRadius,
            boxShadow: glowStyles[glowIntensity],
        }" />

        <!-- Edge Layer (Inner highlights) -->
        <div class="absolute inset-0 z-20" :style="{
            borderRadius,
            boxShadow: shadowStyles[shadowIntensity],
        }" />

        <!-- Content -->
        <div class="relative z-30">
            <slot />
        </div>
    </Motion>
</template>
