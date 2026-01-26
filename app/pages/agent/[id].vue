<script setup lang="ts">
const route = useRoute()
const { id } = route.params
// Get the passed data from query params
const { name, phone, email, photo, location, status, reviews } = route.query

const goBack = () => {
  navigateTo('/agent')

}
</script>

<template>
  <ClientOnly>
    <Navbar />
  </ClientOnly>
  <div class="container mx-auto px-10 pt-10 pb-20">
    <div class="flex w-full justify-end">
      <button @click="goBack"
        class="group flex mt-10 items-center rounded-full gap-2 cursor-pointer mb-8 text-gray-500 hover:text-[#205ed7] transition-colors duration-200">
        <div
          class="p-2 rounded-full bg-gray-100 w-10 flex items-center justify-center dark:bg-zinc-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30">
          <Icon name="lucide:arrow-left" class="size-5 transition-transform group-hover:-translate-x-1" />
        </div>
        <span class="font-medium">Back to Managers</span>
      </button>
    </div>
    <section
      class="flex flex-col md:flex-row gap-10 bg-[#fafafa] dark:bg-[#1a1a1a] p-10 rounded-3xl border border-gray-200 dark:border-zinc-800">

      <div :style="{ backgroundImage: `url(${photo})` }"
        class="size-52 bg-cover bg-center rounded-2xl border-4 border-white dark:border-zinc-700 shadow-md shrink-0">
      </div>

      <div class="flex-1 space-y-6">
        <div>
          <h1 class="text-4xl font-bold text-black dark:text-white">{{ name }}</h1>
          <p class="text-[#205ed7] font-semibold mt-1 uppercase tracking-widest text-sm">{{ status }}</p>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-y border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-300">
          <div class="flex items-center gap-3">
            <Icon name="lucide:phone" class="text-[#205ed7]" />
            <span>{{ phone }}</span>
          </div>
          <div class="flex items-center gap-3">
            <Icon name="lucide:mail" class="text-[#205ed7]" />
            <span>{{ email }}</span>
          </div>
          <div class="flex items-center gap-3">
            <Icon name="lucide:map-pin" class="text-[#205ed7]" />
            <span>{{ location }}</span>
          </div>
          <div class="flex items-center gap-3">
            <Icon name="lucide:fingerprint" class="text-[#205ed7]" />
            <span>Agent ID: {{ id }}</span>
          </div>
          <div class="flex items-center gap-3">
            <Icon v-for="_ in 5" name="radix-icons:star-filled" class="size-3.5 text-yellow-500" />
            <span>{{ reviews }}</span>
          </div>
        </div>

        <button class="bg-[#205ed7] text-white px-10 py-3 rounded-xl font-bold shadow-lg shadow-blue-500/30">
          Message {{ name?.toString().split(' ')[0] }}
        </button>
      </div>
    </section>

  </div>
</template>