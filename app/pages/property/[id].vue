<script setup lang="ts">
const route = useRoute()
const { id } = route.params

const { name, photo, price, reviews, location, agent, agentphoto, specs } = route.query

// Parse specs from JSON string
const parsedspecs = computed(() => {
    if (!specs) return []
    return typeof specs === 'string' ? JSON.parse(specs) : specs
})
// Cast them to strings so NuxtImg doesn't complain
const agentPhotoSrc = (agentphoto as string) || '/rebecca.png'
const propertyPhotoSrc = (photo as string) || '/img.png'
const goBack = () => navigateTo('/property')
</script>

<template>
    <ClientOnly>
        <Navbar />
    </ClientOnly>

    <div class="min-h-screen max-w-full bg-gray-50 dark:bg-[#121212] pt-24 pb-5 mx-5 ">
        <div class="max-w-full mx-auto mb-6">
            <button @click="goBack"
                class="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-all cursor-pointer">
                <Icon name="lucide:arrow-left" class="size-5" />
                <span class="font-medium">Back to properties</span>
            </button>
        </div>

        <div class="max-w-full mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <div class="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                        <div :style="{ backgroundImage: `url(${photo})` }"
                            class="size-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                            {{ name }}
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-1">
                    <div
                        class="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 space-y-8">

                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h1 class="text-xl font-bold text-gray-900 dark:text-white leading-tight">{{ location }}
                                </h1>
                                <p class="text-gray-400 text-xs mt-1">Property ID: {{ id }}</p>
                            </div>
                            <button class="text-gray-400 hover:text-red-500 transition-colors">
                                <Icon name="lucide:bookmark" class="size-6" />
                            </button>
                        </div>

                        <div class="flex justify-between py-6 border-y border-gray-100 dark:border-gray-800">
                            <div
                                class="flex flex-col items-center flex-1 border-r border-gray-100 dark:border-gray-800 last:border-0">
                                <p class="text-2xl font-black text-gray-900 dark:text-white leading-none">
                                    {{ parsedspecs[0]?.bedrooms || 0 }}
                                </p>
                                <div class="flex items-center gap-1.5 mt-2 text-gray-400">
                                    <Icon name="lucide:bed" class="size-3.5" />
                                    <span class="text-[10px] font-bold uppercase tracking-tighter">Beds</span>
                                </div>
                            </div>

                            <div
                                class="flex flex-col items-center flex-1 border-r border-gray-100 dark:border-gray-800 last:border-0">
                                <p class="text-2xl font-black text-gray-900 dark:text-white leading-none">
                                    {{ parsedspecs[0]?.bathroom || 0 }}
                                </p>
                                <div class="flex items-center gap-1.5 mt-2 text-gray-400">
                                    <Icon name="lucide:bath" class="size-3.5" />
                                    <span class="text-[10px] font-bold uppercase tracking-tighter">Baths</span>
                                </div>
                            </div>

                            <div class="flex flex-col items-center flex-1">
                                <p class="text-2xl font-black text-gray-900 dark:text-white leading-none">
                                    {{ parsedspecs[0]?.size || 0 }}<span class="text-xs font-medium ml-0.5">k</span>
                                </p>
                                <div class="flex items-center gap-1.5 mt-2 text-gray-400">
                                    <Icon name="lucide:ruler" class="size-3.5" />
                                    <span class="text-[10px] font-bold uppercase tracking-tighter">Sqft</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-3xl font-black text-blue-600">₱{{ Number(price).toLocaleString() }}
                                </div>
                                <div class="text-[10px] text-gray-400 font-medium">{{ reviews }}</div>
                            </div>
                            <button class="text-xs font-bold text-gray-500 hover:text-blue-600 flex items-center gap-1">
                                Split options
                                <Icon name="lucide:chevron-right" class="size-4" />
                            </button>
                        </div>

                        <div
                            class="bg-gray-50 dark:bg-[#252525] p-4 rounded-2xl flex items-center justify-between border border-gray-100 dark:border-zinc-800">
                            <div class="flex items-center gap-3">
                                <div class="size-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <NuxtImg :src="agentPhotoSrc" />
                                </div>
                                <div>
                                    <div class="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Listing
                                        Agent</div>
                                    <div class="font-bold text-gray-900 dark:text-white text-sm">{{ agent }}</div>
                                </div>
                            </div>
                            <button
                                class="bg-white dark:bg-zinc-800 text-xs font-bold py-2 px-4 rounded-full border border-gray-200 dark:border-zinc-700 hover:shadow-md transition-all">
                                Contact
                            </button>
                        </div>

                        <button
                            class="w-full bg-zinc-900 dark:bg-white dark:text-black text-white py-4 rounded-2xl font-bold shadow-2xl hover:scale-[1.02] transition-transform">
                            Request a tour
                            <p class="text-[10px] font-normal opacity-60">Earliest at 11:00 tomorrow</p>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-1">
                    <div
                        class="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
                        <h3 class="text-lg font-bold mb-6">Update Search</h3>
                        <div class="space-y-6">
                            <div>
                                <label class="text-[10px] font-bold text-gray-400 uppercase block mb-2">Current
                                    Location</label>
                                <div class="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-sm font-medium">{{ location
                                    }}</div>
                            </div>
                            <div>
                                <label
                                    class="text-[10px] font-bold text-gray-400 uppercase block mb-2">Specifications</label>
                                <div class="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl text-sm font-medium">
                                    {{ parsedspecs[0]?.bedrooms }} BR | {{ parsedspecs[0]?.bathroom }} BA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <div
                        class="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
                        <h2 class="text-xl font-bold mb-6">Property Description</h2>
                        <div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                Welcome to this beautiful <span class="font-bold text-gray-900 dark:text-white">{{ name
                                    }}</span> located in
                                <span class="font-bold text-gray-900 dark:text-white">{{ location }}</span>.
                            </p>
                            <p>
                                This stunning property features an expansive
                                <span class="font-bold text-gray-900 dark:text-white">{{ parsedspecs[0]?.size }}k
                                    sqft</span> floor plan.
                                With {{ parsedspecs[0]?.bedrooms }} bedrooms and {{ parsedspecs[0]?.bathroom }}
                                bathrooms,
                                it offers the perfect balance of modern architecture and luxury living.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>