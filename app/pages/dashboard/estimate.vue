<script setup lang="ts">
import { ref } from 'vue'

const propertyType = ref('')
const location = ref('')
const keyword = ref('')

const propertyTypes = [
  'Condominium',
  'House & Lot',
  'Apartment',
  'Townhouse',
  'Commercial Space',
  'Office Space',
  'Warehouse'
]

const handleEstimate = () => {
  console.log('Generating estimate for:', {
    propertyType: propertyType.value,
    location: location.value,
    keyword: keyword.value
  })
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-4 md:p-8 min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div class="max-w-7xl">
        <!-- Header -->
        <div class="mb-10">
          <h1 class="text-3xl font-bold text-[#FE8E0A] uppercase tracking-tight mb-2">
            Get Rental Price Estimates Instantly
          </h1>
          <p class="text-gray-500 dark:text-gray-400 font-medium italic">
            Compare your property with current market trends
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Form Card -->
          <div class="lg:col-span-2 space-y-6">
            <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-sm">
              <div class="space-y-8">
                <!-- Property Type -->
                <div class="space-y-3">
                  <div class="flex items-center gap-2 mb-1">
                    <div class="bg-[#FE8E0A]/10 p-2 rounded-lg text-[#FE8E0A]">
                      <Icon name="lucide:building-2" class="size-5" />
                    </div>
                    <label class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Property Type</label>
                  </div>
                  <div class="relative group">
                    <select
                      v-model="propertyType"
                      class="w-full pl-4 pr-10 py-4 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-700 rounded-2xl outline-none focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] transition-all appearance-none cursor-pointer text-gray-900 dark:text-white"
                    >
                      <option value="" disabled>Select Property Type</option>
                      <option v-for="type in propertyTypes" :key="type" :value="type">{{ type }}</option>
                    </select>
                    <Icon name="lucide:chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <!-- Location Search -->
                <div class="space-y-3">
                  <div class="flex items-center gap-2 mb-1">
                    <div class="bg-[#1b4fb5]/10 p-2 rounded-lg text-[#1b4fb5] dark:text-[#2b68df]">
                      <Icon name="lucide:map-pin" class="size-5" />
                    </div>
                    <label class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Search Location</label>
                  </div>
                  <div class="relative group">
                    <Icon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-[#1b4fb5] transition-colors" />
                    <input
                      v-model="location"
                      type="text"
                      placeholder="Search for a location in Philippines..."
                      class="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-700 rounded-2xl outline-none focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] transition-all text-gray-900 dark:text-white"
                    >
                  </div>
                  <div class="flex items-center gap-1.5 px-2">
                    <Icon name="logos:google-maps" class="size-4 grayscale opacity-50" />
                    <span class="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Powered by Google Maps</span>
                  </div>
                </div>

                <!-- Custom Keyword -->
                <div class="space-y-3">
                  <div class="flex items-center gap-2 mb-1">
                    <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-500">
                      <Icon name="lucide:sparkles" class="size-5" />
                    </div>
                    <div class="flex items-center gap-2">
                      <label class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Custom Keyword</label>
                      <span class="text-[10px] bg-gray-100 dark:bg-zinc-800 text-gray-500 px-2 py-0.5 rounded-full font-bold">OPTIONAL</span>
                    </div>
                  </div>
                  <div class="relative group">
                    <input
                      v-model="keyword"
                      type="text"
                      placeholder="e.g., Property Name, near IT Park, with sea view"
                      class="w-full px-4 py-4 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-zinc-700 rounded-2xl outline-none focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] transition-all text-gray-900 dark:text-white"
                    >
                  </div>
                </div>

                <!-- Action Button -->
                <button
                  @click="handleEstimate"
                  class="w-full bg-[#1b4fb5] dark:bg-[#2b68df] text-white py-5 rounded-2xl font-black text-lg uppercase tracking-wider hover:opacity-90 transition-all shadow-xl shadow-[#1b4fb5]/20 dark:shadow-black/40 flex items-center justify-center gap-3 group"
                >
                  Get Estimate Now
                  <Icon name="lucide:trending-up" class="size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <!-- Info & Guidelines Card -->
          <div class="space-y-6">
            <div class="bg-[#FE8E0A]/5 dark:bg-[#FE8E0A]/10 border border-[#FE8E0A]/20 rounded-3xl p-6 md:p-8 space-y-6">
              <div class="flex items-center gap-3 mb-2">
                <Icon name="lucide:info" class="size-6 text-[#FE8E0A]" />
                <h3 class="font-bold text-[#FE8E0A] uppercase tracking-tight">Important Notes</h3>
              </div>
              
              <div class="space-y-4">
                <div class="flex gap-4">
                  <div class="mt-1">
                    <div class="size-2 rounded-full bg-[#FE8E0A]"></div>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    The estimated price should still be aligned with the prices of <span class="text-[#FE8E0A] font-bold">neighboring properties</span>.
                  </p>
                </div>

                <div class="flex gap-4">
                  <div class="mt-1">
                    <div class="size-2 rounded-full bg-[#FE8E0A]"></div>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    Kindly consider and listen to the <span class="text-[#FE8E0A] font-bold">current market trends</span> when setting your price.
                  </p>
                </div>
              </div>

              <div class="pt-6 border-t border-[#FE8E0A]/10">
                <div class="bg-white/50 dark:bg-black/20 rounded-2xl p-4">
                  <p class="text-xs text-center text-gray-500 dark:text-gray-400 italic">
                    "Setting the right price is the first step to finding the perfect tenant."
                  </p>
                </div>
              </div>
            </div>

            <!-- Premium Badge -->
            <div class="bg-gradient-to-br from-[#1b4fb5] to-[#0a2e7a] rounded-3xl p-6 text-white overflow-hidden relative group">
              <Icon name="lucide:sparkles" class="absolute -right-4 -top-4 size-32 opacity-10 group-hover:rotate-12 transition-transform duration-700" />
              <div class="relative z-10">
                <h4 class="font-black text-xl mb-1 uppercase tracking-tight">Pro Tip</h4>
                <p class="text-blue-100 text-sm mb-4">Add high-quality photos to your listing for even more accurate comparisons.</p>
                <div class="inline-flex items-center gap-2 text-xs font-bold bg-white/10 px-3 py-1.5 rounded-full">
                  <Icon name="lucide:camera" class="size-3" />
                  Update Photos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
/* Custom scrollbar for better dark mode aesthetics if needed */
</style>
