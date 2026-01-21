<script lang="ts" setup>
withDefaults(
  defineProps<{
    class?: string
    reverse?: boolean
    pauseOnHover?: boolean
    vertical?: boolean
    repeat?: number
  }>(),
  {
    pauseOnHover: false,
    vertical: false,
    repeat: 4,
  },
)
</script>

<template>
  <div
    class="group flex w-full gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:2rem]"
    :class="[vertical ? 'flex-col' : 'flex-row', $props.class]"
  >
    <div
      v-for="index in repeat"
      :key="index"
      class="flex shrink-0 items-center gap-(--gap)"
      :class="[
        vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
        pauseOnHover ? 'group-hover:paused' : '',
      ]"
      :style="{
        animationDirection: reverse ? 'reverse' : 'normal',
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  animation: marquee var(--duration) linear infinite;
  animation-direction: reverse;
}

.animate-marquee-vertical {
  animation: marquee-vertical var(--duration) linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}

@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - var(--gap)));
  }
}
</style>
