<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    default: 10,
  },
  radiantWidth: {
    type: Number,
    default: 100,
  },
  class: String,
  radiantColor: {
    type: String,
    default: 'orange',
  },
  textColor: {
    type: String,
    default: 'orange',
  },
})

const styleVar = computed(() => {
  return {
    '--radiant-anim-duration': `${props.duration}s`,
    '--radiant-width': `${props.radiantWidth}px`,
  }
})
</script>

<template>
  <span
    :style="styleVar"
    :class="[
      'radiant-animation bg-gradient-to-r from-transparent via-' + props.radiantColor + '-500 via-50% to-transparent [background-size:var(--radiant-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat text-' + props.textColor + '-500/70 [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] dark:via-' + props.radiantColor + '-400 dark:text-' + props.textColor + '-400/70',
      $props.class
    ]"
  >
    <slot />
  </span>
</template>

<style scoped>
@keyframes radiant {
  0%,
  10%,
  100% {
    background-position: calc(-100% - var(--radiant-width)) 0;
  }
  45%,
  55% {
    background-position: calc(100% + var(--radiant-width)) 0;
  }
}

.radiant-animation {
  animation: radiant var(--radiant-anim-duration) infinite;
  display: inline !important;
  white-space: nowrap !important;
}
</style>
