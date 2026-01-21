<script lang="ts" setup>
interface Props {
  img: string;
  name?: string;
  username?: string;
  body?: string;
  class?: string;
  imgClass?: string;
}

defineProps<Props>();
</script>

<template>
  <figure
    v-if="name || username || body"
    class="relative w-64 shrink-0 flex-none cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    :class="$props.class"
  >
    <div class="flex flex-row items-center gap-2">
      <img :src="img" class="h-10 w-10 rounded-full object-cover" alt="" />
      <div class="flex flex-col">
        <span v-if="name" class="text-sm font-medium dark:text-white">
          {{ name }}
        </span>
        <p v-if="username" class="text-xs font-medium dark:text-white/40">{{ username }}</p>
      </div>
    </div>
    <blockquote v-if="body" class="mt-2 text-sm">{{ body }}</blockquote>
  </figure>

  <img
    v-else
    :src="img"
    class="block shrink-0 flex-none h-24 w-auto object-contain"
    :class="[$props.class, $props.imgClass]"
    alt=""
  />
</template>
