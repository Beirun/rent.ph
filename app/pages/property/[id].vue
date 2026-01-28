<script setup lang="ts">
const route = useRoute()
const { id } = route.params

// Reactive mapping
const title = computed(() => (route.query.name || route.query.title) as string || 'Property Detail')
const propertyPhotoSrc = computed(() => (route.query.photo || route.query.image) as string || '/img.png')
const price = computed(() => Number(route.query.price) || 0)
const bed = computed(() => route.query.bed || '0')
const bathroom = computed(() => route.query.bathroom || '0')
const square = computed(() => route.query.size || route.query.square || '0')
const address = computed(() => route.query.location || route.query.address || 'Address not listed')
const type = computed(() => route.query.type as string || 'Apartments')
const user_name = computed(() => (route.query.agent || route.query.user_name) as string || 'Agent')
const agentPhotoSrc = computed(() => (route.query.agentphoto || route.query.user_avatar) as string || '/rebecca.png')
const agentId = computed(() => route.query.agent_id as string || 'default')

// --- EXPANDABLE IMAGE LOGIC ---
const isExpanded = ref(false)
const activeImg = ref('')
const galleryImages = [propertyPhotoSrc.value, '/img.png', '/houseimg.png', '/img.png']

const expandImage = (imgSrc: string) => {
    activeImg.value = imgSrc
    isExpanded.value = true

    // Use import.meta.client instead of process.client
    if (import.meta.client) {
        document.body.style.overflow = 'hidden'
    }
}

const closeExpand = () => {
    isExpanded.value = false

    if (import.meta.client) {
        document.body.style.overflow = 'auto'
    }
}
const goBack = () => navigateTo('/property')

</script>

<template>
    <ClientOnly>
        <Navbar />
    </ClientOnly>

    <Transition name="fade">
        <div v-if="isExpanded"
            class="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            @click="closeExpand">
            <button class="absolute top-8 right-8 text-white/70 hover:text-white transition-colors">
                <Icon name="lucide:x" class="size-8" />
            </button>
            <img :src="activeImg" class="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-zoom"
                @click.stop />
        </div>
    </Transition>

    <div class="min-h-screen max-w-full bg-gray-50 dark:bg-[#121212] pt-24 pb-5 mx-5">
        <div class="max-w-8xl mx-auto mb-6">
            <button @click="goBack"
                class="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-all cursor-pointer">
                <Icon name="lucide:arrow-left" class="size-5" />
                <span class="font-medium">Back to properties</span>
            </button>
        </div>

        <div class="max-w-8xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div class="lg:col-span-2 space-y-6">
                    <div @click="expandImage(propertyPhotoSrc)"
                        class="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-zoom-in">
                        <div :style="{ backgroundImage: `url(${propertyPhotoSrc})` }"
                            class="size-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
                        <div
                            class="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                            {{ title }} for ₱{{ price.toLocaleString() }} / Month
                        </div>
                    </div>

                    <div class="grid grid-cols-4 gap-4">
                        <div v-for="(img, idx) in galleryImages" :key="idx" @click="expandImage(img)"
                            class="h-24 rounded-2xl bg-gray-200 dark:bg-zinc-800 overflow-hidden cursor-zoom-in border-2 border-transparent hover:border-blue-500 transition-all">
                            <img :src="img" class="object-cover size-full" />
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-4 items-center py-2">
                        <div v-for="spec in [
                            { icon: 'lucide:map-pin', label: 'Location', value: address },
                            { icon: 'lucide:building-2', label: 'Property type', value: type },
                            { icon: 'lucide:philippine-peso', label: 'Price', value: '₱' + price.toLocaleString() },
                            { icon: 'lucide:bed-single', label: 'Bedrooms', value: bed + ' BR' },
                            { icon: 'lucide:shower-head', label: 'Bathrooms', value: bathroom },
                            { icon: 'lucide:radius', label: 'Size by sqft', value: square }
                        ]" :key="spec.label"
                            class="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-full px-5 py-3 shadow-sm">
                            <Icon :name="spec.icon" class="size-5 text-gray-400" />
                            <div class="flex flex-col border-l border-gray-100 dark:border-zinc-800 pl-3">
                                <span class="text-[10px] text-gray-400 font-medium leading-none">{{ spec.label }}</span>
                                <span class="text-sm font-bold text-gray-900 dark:text-white">{{ spec.value }}</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 p-8">
                        <h3 class="font-bold text-lg mb-4">Property Description</h3>
                        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Welcome to this beautiful {{ title }} located in {{ address }}.
                            This property features an expansive {{ square }} sqft floor plan with modern architecture.
                            It offers a perfect balance of comfort and luxury for modern living.
                        </p>
                    </div>
                </div>

                <div class="lg:col-span-1">
                    <div
                        class="bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 sticky top-28 space-y-6">
                        <div>
                            <h2 class="text-xl font-black uppercase tracking-tight mb-2">Property Inquiry</h2>
                            <hr class="border-gray-100 dark:border-zinc-800" />
                        </div>

                        <form class="space-y-3" @submit.prevent>
                            <div class="grid grid-cols-2 gap-3">
                                <input type="text" placeholder="First Name"
                                    class="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent text-sm outline-none focus:ring-1 focus:ring-red-400" />
                                <input type="text" placeholder="Last Name"
                                    class="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent text-sm outline-none focus:ring-1 focus:ring-red-400" />
                            </div>
                            <div class="flex gap-2">
                                <select
                                    class="p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent text-xs outline-none">
                                    <option>PH +63</option>
                                </select>
                                <input type="text" placeholder="Phone"
                                    class="flex-1 p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent text-sm outline-none focus:ring-1 focus:ring-red-400" />
                            </div>
                            <input type="email" placeholder="Email"
                                class="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent text-sm outline-none focus:ring-1 focus:ring-red-400" />
                            <textarea rows="3"
                                class="w-full p-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-transparent text-sm resize-none outline-none focus:ring-1 focus:ring-red-400">I'm interested in {{ title }}...</textarea>

                            <button
                                class="w-full bg-[#fe8e0a] text-[#fafafa] font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-md">
                                Send Inquiry
                            </button>
                        </form>

                        <div class="pt-6 border-t border-gray-100 dark:border-gray-800">
                            <div class="flex items-center gap-3 mb-4">
                                <div
                                    class="size-20 rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-800">
                                    <NuxtImg :src="agentPhotoSrc" class="object-cover size-full" />
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Listed
                                        By</span>
                                    <span class="font-bold text-gray-900 dark:text-white leading-none">{{ user_name }}</span>
                                </div>
                            </div>
                            <button @click="navigateTo(`/agent/${agentId}`)"
                                class="w-full bg-[#fe8e0a] text-[#fafafa] font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-md">
                                <Icon name="lucide:layout-grid" class="size-4  text-[#fafafa]" />
                                View My Listings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Transition Effects */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Zoom Animation for the image itself */
@keyframes zoom {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-zoom {
    animation: zoom 0.3s ease-out;
}
</style>