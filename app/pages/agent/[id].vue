<script setup lang="ts">
import { ref, computed } from 'vue'

const route = useRoute()
const { name, phone, email, photo, location, status, reviews, about, reviewList } = route.query

// State to track if the user wants to see all reviews
const showAllReviews = ref(false)

const parsedReviews = computed(() => {
  if (!reviewList) return []
  return typeof reviewList === 'string' ? JSON.parse(reviewList) : reviewList
})

// Logic to limit the display to 4 items unless toggled
const displayedReviews = computed(() => {
  if (showAllReviews.value) return parsedReviews.value
  return parsedReviews.value.slice(0, 4)
})

const goBack = () => {
  navigateTo('/agent')
}
</script>

<template>
  <ClientOnly>
    <Navbar />
  </ClientOnly>

  <div class="h-screen bg-white dark:bg-[#0f1011] pt-20 overflow-hidden">
    <div class="max-w-8xl mx-auto px-6 lg:px-12 h-full flex flex-col">
      
      <div class="py-6 shrink-0">
        <button @click="goBack" class="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-all group">
          <Icon name="lucide:chevron-left" class="size-5 group-hover:-translate-x-1 transition-transform" />
          <span class="text-sm font-medium cursor-pointer tracking-wide uppercase">Back to Agents</span>
        </button>
      </div>

      <div class="flex-1 flex flex-col lg:flex-row gap-16 overflow-hidden pb-10">
        
        <aside class="lg:w-1/3 shrink-0 overflow-y-auto no-scrollbar hidden-scroll">
          <div class="space-y-6">
            <div class="bg-white dark:bg-[#1a1b1e] rounded-3xl p-8 shadow-lg border-2 border-gray-100 dark:border-gray-800">
              <div class="flex flex-col items-center text-center">
                <div class="relative mb-6">
                  <div 
                    :style="{ backgroundImage: `url(${photo})` }"
                    class="size-32 sm:size-40 rounded-full bg-cover bg-center ring-1 ring-gray-100 dark:ring-gray-700 shadow-xl"
                  />
                  <div class="absolute bottom-2 text-center right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white dark:border-[#1a1b1e]">
                    <Icon name="lucide:check" class="size-5 text-white text-bold" />
                  </div>
                </div>

                <h1 class="text-3xl font-bold text-gray-900 dark:text-[#fafafa] mb-1">{{ name }}</h1>
                <div class="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <Icon name="lucide:award" class="size-4" />
                  <span>Verified Professional</span>
                </div>

            <div class="grid grid-cols-3 w-full py-8 border-y border-gray-100 dark:border-gray-800 mb-6 text-center gap-y-8">
                
                <div class="flex flex-col">
                  <span class="text-2xl font-black text-black dark:text-[#fafafa]">{{ reviews || '0' }}</span>
                  <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Reviews</span>
                </div>

                <div class="flex flex-col border-x border-gray-100 dark:border-gray-800">
                  <span class="text-2xl font-bold text-[#262626] dark:text-[#FAFAFA] flex items-center justify-center gap-1">
                    4.9 <Icon name="radix-icons:star-filled" class="size-4 text-[#fe8e0a]" />
                  </span>
                  <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Rating</span>
                </div>

                <div class="flex flex-col">
                  <span class="text-2xl font-bold text-[#262626] dark:text-[#FAFAFA]">{{ status || '0' }}</span>
                  <span class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Listings</span>
                </div>

                <div class="col-span-3 flex flex-col items-center justify-center gap-4 pt-4 border-t border-gray-50 dark:border-gray-800/50">
                  <span class="text-xs uppercase tracking-[0.2em] font-black text-black dark:text-white">Professional Badges</span>
                  
                  <div class="flex items-center justify-center gap-4 flex-wrap">
                    <NuxtImg 
                      v-for="n in 5" 
                      :key="n" 
                      src="/trophy.png" 
                      class="w-12 h-12 object-contain brightness-110" 
                      alt="Award Badge"
                    />
                  </div>
                </div>

              </div>
                <button class="w-full bg-blue-600  text-[#fafafa] py-4 rounded-xl font-semibold hover:opacity-80 transition-opacity">
                  Contact Agent
                </button>
 
              </div>
            </div>
          </div>
        </aside>

        <main class="flex-1 overflow-y-auto pr-4 custom-scrollbar pb-20">
          
          <section class="mb-16">
            <h2 class="text-4xl font-bold mb-8 tracking-tight">About {{ name }}</h2>
            <div class="flex flex-col gap-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
               <p class="text-justify italic">{{ about || 'Dedicated to providing excellence in the real estate industry.'}}</p>
            </div>
          </section>

          <section class="mb-20">
            <div class="flex items-center justify-between mb-10">
              <h2 class="text-2xl font-bold uppercase tracking-widest">Client Reviews</h2>
              <div class="h-px flex-1 mx-8 bg-gray-100 dark:bg-gray-800" />
            </div>
            
            <div v-if="displayedReviews.length" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div v-for="(rev, index) in displayedReviews" :key="index" class="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-transparent">
                <div class="flex items-center gap-4 mb-4">
                   <div class="size-10 rounded-full bg-[#fe8e0a] text-white flex items-center justify-center text-xs font-bold uppercase">
                      {{ rev.user.charAt(0) }}
                   </div>
                   <p class="font-bold text-sm">{{ rev.user }}</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 italic">"{{ rev.comment }}"</p>
                <div class="flex gap-0.5">
                  <Icon v-for="i in 5" :key="i" name="radix-icons:star-filled" :class="['size-3', i <= rev.rating ? 'text-black dark:text-white' : 'text-gray-200']" />
                </div>
              </div>
            </div>

            <div v-if="parsedReviews.length > 4" class="flex justify-center">
              <button 
                @click="showAllReviews = !showAllReviews"
                class="px-8 py-3 border border-black dark:border-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#fe8e0a] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                {{ showAllReviews ? 'Show Less' : `View All ${parsedReviews.length} Reviews` }}
              </button>
            </div>
          </section>

          <section>
            <div class="flex items-center justify-between mb-10">
              <h2 class="text-2xl font-bold uppercase tracking-widest">Active Listings</h2>
              <div class="h-px flex-1 mx-8 bg-gray-100 dark:bg-gray-800" />
            </div>
            <PropertiesAndListings />
          </section>

        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }
</style>