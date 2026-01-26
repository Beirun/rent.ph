<script setup lang="ts">
const route = useRoute()
const { id } = route.params


const {name, photo, price, location, agent} = route.query

const specs = computed(() => {
    try {
        return JSON.parse(route.query.specs as string)
    } catch {
        return []
    }
})

const goBack = () => navigateTo('/property')
</script>

<template>
    <ClientOnly><Navbar /></ClientOnly>

    <div class="min-h-screen bg-gray-50 dark:bg-[#121212] pt-24 pb-12 px-4 md:px-8">
        <button @click="goBack" class="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
            <Icon name="lucide:arrow-left" class="size-5" />
            <span>Back to properties</span>
        </button>

        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div class="lg:col-span-2">
                <div class="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                    <div :style="{ backgroundImage: `url(${photo})` }" class="size-full bg-cover bg-center" />
                    <div class="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                        Featured Property
                    </div>
                </div>
                
                <div class="mt-8 bg-white dark:bg-[#1e1e1e] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-zinc-800">
                    <h2 class="text-2xl font-bold mb-4 dark:text-white">About this property</h2>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Welcome to this beautiful {{ name }} located at {{ location }}. 
                        This property offers a spacious living environment perfect for families, 
                        featuring modern architecture and premium finishes throughout.
                    </p>
                </div>
            </div>

            <div class="lg:col-span-1">
                <div class="sticky top-24 bg-white dark:bg-[#1e1e1e] p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-zinc-800 space-y-6">
                    
                    <div class="flex justify-between items-start">
                        <div>
                            <h1 class="text-lg font-bold dark:text-white leading-tight">{{ location }}</h1>
                            <p class="text-gray-400 text-sm">Property ID: {{ id }}</p>
                        </div>
                        <button class="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                            <Icon name="lucide:bookmark" class="size-5 dark:text-white" />
                        </button>
                    </div>

                    <div class="flex justify-between py-4 border-y border-gray-100 dark:border-zinc-800">
                        <div class="text-center">
                            <p class="text-xl font-bold dark:text-white">{{ specs[0]?.bedrooms || 0 }}</p>
                            <p class="text-xs text-gray-400 uppercase">Beds</p>
                        </div>
                        <div class="text-center">
                            <p class="text-xl font-bold dark:text-white">{{ specs[0]?.bathroom || 0 }}</p>
                            <p class="text-xs text-gray-400 uppercase">Baths</p>
                        </div>
                        <div class="text-center">
                            <p class="text-xl font-bold dark:text-white">{{ specs[0]?.size || 0 }}k</p>
                            <p class="text-xs text-gray-400 uppercase">Sqft</p>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="text-2xl font-black text-blue-600 dark:text-blue-400">
                            ₱{{ Number(price).toLocaleString() }}
                        </div>
                        <button class="text-sm font-semibold text-gray-500 hover:text-blue-600 flex items-center gap-1">
                            Split options <Icon name="lucide:chevron-right" class="size-4" />
                        </button>
                    </div>

                    <div class="bg-gray-50 dark:bg-[#252525] p-4 rounded-2xl flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <Avatar class="size-12 ring-2 ring-white dark:ring-zinc-800">
                                <AvatarImage src="https://i.pravatar.cc/150?u=amelia" />
                                <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <div>
                                <p class="text-xs text-gray-400 font-medium">Agent</p>
                                <p class="font-bold dark:text-white">{{ agent }}</p>
                            </div>
                        </div>
                        <button class="px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-full text-sm font-bold hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all">
                            Contact
                        </button>
                    </div>

                    <button class="w-full bg-zinc-900 dark:bg-white dark:text-black text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl">
                        Request a tour
                        <p class="text-[10px] font-normal opacity-70">Earliest at 11:00 tomorrow</p>
                    </button>

                </div>
            </div>

        </div>
    </div>
</template>