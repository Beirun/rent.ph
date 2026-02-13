<script setup lang="ts">
import { ref, computed } from 'vue'

const route = useRoute()
const { id } = route.params

const managerStore = useManagerStore()

const showAllReviews = ref(false)

// Logic to limit the display to 4 items unless toggled
const displayedReviews = computed(() => {
  if (showAllReviews.value) return managerStore.reviews
  return managerStore.reviews.slice(0, 4)
})

const goBack = () => {
  navigateTo('/agent')
}

onMounted(async () => {
  const { id } = route.params

  await Promise.all([
    await managerStore.getManager(id as string),
    await managerStore.getReviews(id as string),
  ])

  console.log(managerStore.manager)
})
</script>

<template>
  <ClientOnly>
    <Navbar />
  </ClientOnly>

  <div class="min-h-screen lg:h-screen bg-white dark:bg-[#0f1011] pt-20 lg:overflow-hidden flex flex-col">
    <div class="max-w-8xl mx-auto px-6 lg:px-12 w-full h-full flex flex-col">

      <div class="py-6 shrink-0">
        <button @click="goBack"
          class="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-all group">
          <Icon name="lucide:chevron-left" class="size-5 group-hover:-translate-x-1 transition-transform" />
          <span class="text-sm font-medium cursor-pointer tracking-wide uppercase">Back to Agents</span>
        </button>
      </div>

      <div class="flex-1 flex flex-col lg:flex-row gap-16 overflow-hidden pb-10">
        <aside v-if="managerStore.loading" class="lg:w-1/3 shrink-0 overflow-y-auto no-scrollbar hidden-scroll">
          <div class="space-y-6">
            <div
              class="bg-white dark:bg-[#1a1b1e] rounded-3xl p-8 shadow-lg border-2 border-gray-100 dark:border-gray-800">
              <div class="flex flex-col items-center text-center">
                <!-- Avatar -->
                <div class="relative mb-6">
                  <Skeleton class="size-32 sm:size-40 rounded-full" />
                  <Skeleton class="absolute bottom-2 right-2 w-9 h-9 rounded-full" />
                </div>

                <!-- Name -->
                <Skeleton class="h-8 w-48 mb-2" />

                <!-- Verified -->
                <Skeleton class="h-4 w-40 mb-6" />

                <!-- Stats -->
                <div
                  class="grid grid-cols-3 w-full py-8 border-y border-gray-100 dark:border-gray-800 mb-6 text-center gap-y-8">
                  <div class="flex flex-col items-center gap-2">
                    <Skeleton class="h-6 w-10" />
                    <Skeleton class="h-3 w-16" />
                  </div>

                  <div class="flex flex-col items-center gap-2 border-x border-gray-100 dark:border-gray-800">
                    <Skeleton class="h-6 w-14" />
                    <Skeleton class="h-3 w-16" />
                  </div>

                  <div class="flex flex-col items-center gap-2">
                    <Skeleton class="h-6 w-10" />
                    <Skeleton class="h-3 w-16" />
                  </div>

                  <!-- Badges -->
                  <div
                    class="col-span-3 flex flex-col items-center justify-center gap-4 pt-4 border-t border-gray-50 dark:border-gray-800/50">
                    <Skeleton class="h-3 w-40" />

                    <div class="flex items-center justify-center gap-4 flex-wrap">
                      <Skeleton v-for="n in 5" :key="n" class="w-12 h-12 rounded-xl" />
                    </div>
                  </div>
                </div>

                <!-- Button -->
                <Skeleton class="h-14 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </aside>

        <aside v-else class="lg:w-1/3 shrink-0 overflow-y-auto no-scrollbar hidden-scroll">
          <div class="space-y-6">
            <div
              class="bg-white dark:bg-[#1a1b1e] rounded-3xl p-8 shadow-lg border-2 border-gray-100 dark:border-gray-800">
              <div class="flex flex-col items-center text-center">
                <div class="relative mb-6">
                  <div :style="{ backgroundImage: `url(${managerStore.manager?.avatar})` }"
                    class="size-32 sm:size-40 rounded-full bg-cover bg-center ring-1 ring-gray-100 dark:ring-gray-700 shadow-xl" />
                  <div
                    class="absolute bottom-2 w-9 h-9 text-center right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white dark:border-[#1a1b1e]">
                    <Icon name="lucide:check" class="size-5 text-white text-bold" />
                  </div>
                </div>

                <h1 class="text-3xl font-bold text-gray-900 dark:text-[#fafafa] mb-1">
                  {{ managerStore.manager?.name }}
                </h1>
                <div class="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <Icon name="lucide:award" class="size-4" />
                  <span>Verified Professional</span>
                </div>

                <div
                  class="grid grid-cols-3 w-full py-8 border-y border-gray-100 dark:border-gray-800 mb-6 text-center gap-y-8">
                  <div class="flex flex-col">
                    <span class="text-2xl font-black text-black dark:text-[#fafafa]">{{
                      managerStore.manager?.reviews || '0'
                    }}</span>
                    <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Reviews</span>
                  </div>

                  <div class="flex flex-col border-x border-gray-100 dark:border-gray-800">
                    <span
                      class="text-2xl font-bold text-[#262626] dark:text-[#FAFAFA] flex items-center justify-center gap-1">
                      4.9
                      <Icon name="radix-icons:star-filled" class="size-4 text-[#fe8e0a]" />
                    </span>
                    <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Rating</span>
                  </div>

                  <div class="flex flex-col">
                    <span class="text-2xl font-bold text-[#262626] dark:text-[#FAFAFA]">{{
                      managerStore.manager?.listing_count || '0'
                    }}</span>
                    <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Listings</span>
                  </div>

                  <div
                    class="col-span-3 flex flex-col items-center justify-center gap-4 pt-4 border-t border-gray-50 dark:border-gray-800/50">
                    <span class="text-md tracking-[0.2em] font-black text-black dark:text-white">Professional
                      Badges</span>

                    <div class="flex items-center justify-center gap-4 flex-wrap">
                      <NuxtImg v-for="n in 5" :key="n" src="/trophy.png" class="w-12 h-12 object-contain brightness-110"
                        alt="Award Badge" />
                    </div>
                  </div>
                </div>
                <div class="w-full pt-6 border-t border-gray-100 dark:border-gray-800">
                  <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Agent</p>
                  <div class="flex items-center justify-center gap-4">
                    <a href="#"
                      class="size-10 rounded-full bg-[#25D366]/10 flex items-center justify-center hover:bg-[#25D366] transition-all group">
                      <Icon name="ic:baseline-whatsapp"
                        class="size-5 text-[#25D366] group-hover:text-white transition-colors" />
                    </a>
                    <a href="#"
                      class="size-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center hover:bg-[#1877F2] transition-all group">
                      <Icon name="ic:baseline-facebook"
                        class="size-5 text-[#1877F2] group-hover:text-white transition-colors" />
                    </a>
                    <a href="#"
                      class="size-10 rounded-full bg-[#E4405F]/10 flex items-center justify-center hover:bg-[#E4405F] transition-all group">
                      <Icon name="mdi:instagram"
                        class="size-5 text-[#E4405F] group-hover:text-white transition-colors" />
                    </a>
                    <a href="#"
                      class="size-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center hover:bg-[#0A66C2] transition-all group">
                      <Icon name="mdi:linkedin"
                        class="size-5 text-[#0A66C2] group-hover:text-white transition-colors" />
                    </a>
                    <a href="#"
                      class="size-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center hover:bg-black dark:hover:bg-white transition-all group">
                      <Icon name="ri:twitter-x-fill"
                        class="size-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main class="flex-1 overflow-y-auto pr-4 custom-scrollbar pb-20">
          <section v-if="managerStore.loading" class="mb-16">
            <!-- Title -->
            <Skeleton class="h-10 w-3/4 mb-8" />

            <!-- Description -->
            <div class="flex flex-col gap-4 max-w-2xl">
              <Skeleton class="h-5 w-full" />
              <Skeleton class="h-5 w-11/12" />
              <Skeleton class="h-5 w-4/5" />
            </div>
          </section>
          <section v-else class="mb-16">
            <h2 class="text-4xl font-bold mb-8 tracking-tight">
              Get to know {{ managerStore.manager?.name }}
            </h2>
            <div class="flex flex-col gap-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              <p class="text-justify italic">
                {{ 'Dedicated to providing excellence in the real estate industry.' }}
              </p>
            </div>
          </section>

          <section v-if="managerStore.loading" class="mb-20">
            <!-- Header -->
            <div class="flex items-center justify-between mb-10">
              <Skeleton class="h-6 w-48" />
              <div class="h-px flex-1 mx-8 bg-gray-100 dark:bg-gray-800" />
            </div>

            <!-- Reviews grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div v-for="i in 4" :key="i"
                class="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-transparent">
                <!-- Author -->
                <div class="flex items-center gap-4 mb-4">
                  <Skeleton class="size-10 rounded-full" />
                  <Skeleton class="h-4 w-32" />
                </div>

                <!-- Content -->
                <div class="space-y-2 mb-4">
                  <Skeleton class="h-4 w-full" />
                  <Skeleton class="h-4 w-11/12" />
                  <Skeleton class="h-4 w-4/5" />
                </div>

                <!-- Rating -->
                <div class="flex gap-1">
                  <Skeleton v-for="n in 5" :key="n" class="h-3 w-3 rounded-sm" />
                </div>
              </div>
            </div>

            <!-- Button -->
            <div class="flex justify-center">
              <Skeleton class="h-12 w-64 rounded-full" />
            </div>
          </section>
          <section v-else class="mb-20">
            <div class="flex items-center justify-between mb-10">
              <h2 class="text-2xl font-bold uppercase tracking-widest">Client Reviews</h2>
              <div class="h-px flex-1 mx-8 bg-gray-100 dark:bg-gray-800" />
            </div>

            <div v-if="displayedReviews.length" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div v-for="(rev, index) in displayedReviews" :key="index"
                class="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-transparent">
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="size-10 rounded-full bg-[#fe8e0a] text-white flex items-center justify-center text-xs font-bold uppercase">
                    {{ rev.author.name.charAt(0) }}
                  </div>
                  <p class="font-bold text-sm">{{ rev.author.name }}</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 italic">
                  "{{ rev.content }}"
                </p>
                <div class="flex gap-0.5">
                  <Icon v-for="i in 5" :key="i" name="radix-icons:star-filled" :class="[
                    'size-3',
                    i <= rev.rate_number ? 'text-black dark:text-white' : 'text-gray-200',
                  ]" />
                </div>
              </div>
            </div>

            <div v-if="managerStore.reviews.length > 4" class="flex justify-center">
              <button @click="showAllReviews = !showAllReviews"
                class="px-8 py-3 border border-black dark:border-white rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#fe8e0a] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                {{
                  showAllReviews ? 'Show Less' : `View All ${managerStore.reviews.length} Reviews`
                }}
              </button>
            </div>
          </section>

          <section>
            <div class="flex items-center justify-between mb-8 md:mb-10">
              <h2 class="text-xl md:text-2xl font-bold uppercase tracking-widest">Active Listings</h2>
              <div class="h-px flex-1 mx-4 md:mx-8 bg-gray-100 dark:bg-gray-800" />
            </div>
            <PropertiesAndListings />
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hidden scrollbar but functional on mobile */
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Custom scroll for main content */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #3f3f46;
}
</style>
