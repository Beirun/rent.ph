<script setup lang="ts">
const route = useRoute()
const propertyStore = usePropertyStore()

// Get property data from store
const property = computed(() => propertyStore.property)
const loading = computed(() => propertyStore.loading)

// --- IMAGE STATE LOGIC ---
const selectedImage = ref('')

// Fetch property data by slug
const fetchProperty = async () => {
  const slug = route.params.slug as string
  if (slug) {
    await propertyStore.getPropertyBySlug(slug)
    // Initialize selectedImage with the main photo once data is loaded
    if (property.value?.image) {
      selectedImage.value = property.value.image
    }
  }
}

onMounted(async () => {
  await fetchProperty()
})

watch(
  () => route.params.slug,
  async () => {
    await fetchProperty()
  },
)

// Reactive mapping from store data
const title = computed(() => property.value?.title || '')
const price = computed(() => Number(property.value?.price || 0))
const address = computed(() => property.value?.address || '')
const type = computed(() => property.value?.property_type || '')
const bed = computed(() => property.value?.bed || 0)
const bathroom = computed(() => property.value?.bathroom || 0)
const square = computed(() => property.value?.square || 0)
const propertyPhotoSrc = computed(() => property.value?.image || '/img.png')
const agentPhotoSrc = computed(() => property.value?.user_avatar || '/img.png')
const user_name = computed(() => property.value?.user_name || '')
const agentId = computed(() => property.value?.id || 0)

const galleryImages = computed(() => {
  // 1. Get the raw gallery from the API
  const apiGallery = property.value?.gallery?.map(img => img.large) || []
  const mainImage = propertyPhotoSrc.value

  // 2. Create a unique list using a Set
  // This automatically removes any string that exactly matches the mainImage
  const uniqueImages = [...new Set([mainImage, ...apiGallery])]

  // 3. Filter out any empty strings or placeholders if they exist
  return uniqueImages.filter(img => img && img !== '/img.png')
})

const selectThumbnail = (imgSrc: string) => {
  selectedImage.value = imgSrc
}

// --- EXPANDABLE IMAGE LOGIC ---
const isExpanded = ref(false)
const activeImg = ref('')

const expandImage = (imgSrc: string) => {
  activeImg.value = imgSrc
  isExpanded.value = true
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

const orientation = ref<'landscape' | 'portrait' | 'square'>('landscape')

const checkOrientation = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img.naturalWidth > img.naturalHeight) {
    orientation.value = 'landscape'
  } else if (img.naturalHeight > img.naturalWidth) {
    orientation.value = 'portrait'
  } else {
    orientation.value = 'square'
  }
}

const goBack = () => navigateTo('/property')
</script>

<template>
  <ClientOnly>
    <Navbar />

    <Transition name="fade">
      <div v-if="isExpanded"
        class="fixed inset-0 z-100 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        @click="closeExpand">
        <button class="absolute top-8 right-8 text-white/70 hover:text-white transition-colors">
          <Icon name="lucide:x" class="size-8" />
        </button>
        <img :src="activeImg" class="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-zoom"
          @click.stop />
      </div>
    </Transition>

    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600 dark:text-gray-400">Loading property...</p>
      </div>
    </div>

    <div v-else-if="!property" class="min-h-screen flex items-center justify-center">
      <p class="text-gray-600 dark:text-gray-400">Property not found</p>
    </div>

    <div v-else class="min-h-screen max-w-full bg-gray-50 dark:bg-[#121212] pt-24 pb-10 px-4 md:px-8">
      <div class="max-w-8xl mx-auto mb-6">
        <button @click="goBack"
          class="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-all cursor-pointer group">
          <Icon name="lucide:arrow-left" class="size-5 group-hover:-translate-x-1 transition-transform" />
          <span class="font-medium">Back to properties</span>
        </button>
      </div>

      <div class="max-w-8xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-8 space-y-6">

            <div @click="expandImage(selectedImage || propertyPhotoSrc)"
              class="relative w-full h-64 md:h-96 lg:h-125 rounded-3xl overflow-hidden bg-gray-200 dark:bg-zinc-800 flex items-center justify-center shadow-lg group cursor-zoom-in">
              <Transition name="fade" mode="out-in">
                  <img :key="selectedImage" :src="selectedImage || propertyPhotoSrc" @load="checkOrientation"
                    class="transition-transform duration-300 group-hover:scale-105" :class="{
                      'w-full h-full object-cover': orientation === 'landscape',
                      'max-h-full cursor-pointer w-auto object-contain': orientation === 'portrait'
                    }" />
                </Transition>
                <div
                  class="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-blue-700 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {{ title }} for ₱{{ price.toLocaleString() }} / Month
                </div>
            </div>

            <div class="relative">
              <div class="flex gap-4 overflow-x-auto scrollbar-hide snap-x">
                <div v-for="(img, idx) in galleryImages" :key="idx" @click="selectThumbnail(img)"
                  class="aspect-square rounded-2xl bg-gray-200 dark:bg-zinc-800 overflow-hidden cursor-pointer border-2 transition-all snap-start shrink-0 group"
                  :class="selectedImage === img ? 'border-blue-500 scale-95 shadow-inner' : 'border-transparent hover:border-blue-300'">
                  <img :src="img" class="object-cover size-35 transition-transform duration-500 group-hover:scale-100"
                    loading="lazy" />
                </div>
              </div>
              <div v-if="galleryImages.length > 5"
                class="absolute right-0 top-0 bottom-4 w-12 bg-linear-to-l from-gray-50 dark:from-[#121212] to-transparent pointer-events-none" />
            </div>

            <div class="flex flex-wrap gap-4 items-center py-2">
              <div v-for="spec in [
                { icon: 'lucide:map-pin', label: 'Location', value: address },
                { icon: 'lucide:building-2', label: 'Property type', value: type },
                { icon: 'lucide:philippine-peso', label: 'Price', value: '₱' + price.toLocaleString() },
                { icon: 'lucide:bed-single', label: 'Bedrooms', value: bed + ' BR' },
                { icon: 'lucide:shower-head', label: 'Bathrooms', value: bathroom },
                { icon: 'lucide:radius', label: 'Size by sqft', value: square },
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
              <h3 class="font-bold text-lg mb-4 text-[#fe8e0a] uppercase tracking-wider">Property Description</h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                Welcome to this beautiful {{ title }} located in {{ address }}. This property
                features an expansive {{ square }} sqft floor plan with modern architecture. It
                offers a perfect balance of comfort and luxury for modern living.
              </p>
            </div>
          </div>

          <div class="lg:col-span-4">
            <div
              class="bg-white dark:bg-[#1e1e1e] rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-8 lg:p-10 sticky top-28 space-y-8">
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
                  <div class="size-20 rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-800">
                    <NuxtImg :src="agentPhotoSrc" class="object-cover size-full" />
                  </div>
                  <div class="flex flex-col">
                    <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Listed By</span>
                    <span class="font-bold text-gray-900 dark:text-white leading-none">{{ user_name }}</span>
                  </div>
                </div>
                <button @click="navigateTo(`/agent/${agentId}`)"
                  class="w-full bg-[#fe8e0a] text-[#fafafa] font-bold py-3.5 rounded-xl transition-all active:scale-95 shadow-md">
                  <Icon name="lucide:layout-grid" class="size-4 text-[#fafafa]" />
                  View My Listings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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