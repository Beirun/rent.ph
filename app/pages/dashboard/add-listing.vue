<script setup lang="ts">
import { ref, computed } from 'vue'

const currentStep = ref(1)
const transitionDirection = ref('slide-right')
const steps = [
  { id: 1, title: 'Category' },
  { id: 2, title: 'Details' },
  { id: 3, title: 'Location' },
  { id: 4, title: 'Property Images' },
  { id: 5, title: 'Pricing' },
  { id: 6, title: 'Attributes' },
  { id: 7, title: 'Owner Info' },
  { id: 8, title: 'Publish' },
]

const formData = ref({
  // Step 1: Category
  category: '',
  
  // Step 2: Details
  title: '',
  description: '',
  bedrooms: 0,
  bathrooms: 0,
  garage: 0,
  floorArea: 1,
  lotArea: 0,
  
  // Step 3: Location
  country: 'Philippines',
  state: '',
  city: '',
  streetAddress: '',
  latitude: 14.599500,
  longitude: 120.984200,
  zoom: 5,
  
  // Step 4: Images & Video
  images: [] as any[],
  videoLink: '',
  
  // Step 5: Pricing
  price: '',
  priceType: 'Monthly',
  
  // Step 6: Attributes
  amenities: [] as string[],
  furnishing: 'None',
  
  // Step 7: Owner Info
  ownerFirstName: '',
  ownerLastName: '',
  ownerPhone: '',
  ownerEmail: '',
  ownerCountry: 'Philippines',
  ownerState: '',
  ownerCity: '',
  ownerStreetAddress: '',
  
  // RAPA Upload (Step 7)
  rapaFile: null as any,
})

const nextStep = () => {
  if (currentStep.value < steps.length) {
    transitionDirection.value = 'slide-right'
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    transitionDirection.value = 'slide-left'
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const goToStep = (step: number) => {
  if (step === currentStep.value) return
  transitionDirection.value = step > currentStep.value ? 'slide-right' : 'slide-left'
  currentStep.value = step
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const isLastStep = computed(() => currentStep.value === steps.length)
const isFirstStep = computed(() => currentStep.value === 1)

// Specific options for the form
const propertyCategories = [
  '1 Bedroom',
  '2 Bedrooms',
  '3 Bedrooms',
  'Studio',
  'House & Lot',
  'Condominium',
  'Apartment',
  'Commercial Space'
]

const priceTypes = ['Daily', 'Weekly', 'Monthly', 'Yearly']

const amenitiesOptions = [
  'Air Conditioning',
  'Breakfast',
  'Kitchen',
  'Parking',
  'Pool',
  'Wi-Fi Internet',
  'Pet Friendly'
]

const furnishingOptions = ['Fully Furnished', 'Semi Furnished', 'Finish', 'None']

const fileInput = ref<HTMLInputElement | null>(null)

// Handlers for images
const onFileChange = (e: any) => {
  const files = e.target.files
  if (!files) return
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onload = (event: any) => {
      formData.value.images.push({
        url: event.target.result,
        file: files[i]
      })
    }
    reader.readAsDataURL(files[i])
  }
}

const removeImage = (index: number) => {
  formData.value.images.splice(index, 1)
}

const setAsDefault = (index: number) => {
  const item = formData.value.images.splice(index, 1)[0]
  formData.value.images.unshift(item)
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-6 max-w-[1600px] mx-auto min-h-screen bg-white dark:bg-[#0a0a0a]">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-[#FE8E0A] mb-2 uppercase tracking-tight">Add New Listing</h1>
        <p class="text-gray-500 dark:text-gray-400">Follow the steps below to publish your property</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start min-h-screen">
        <!-- Stepper Sidebar -->
        <div class="lg:col-span-1 space-y-4">
          <div class="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm sticky top-24">
            <h2 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6 px-4">Steps</h2>
            <div class="space-y-2">
              <button
                v-for="step in steps"
                :key="step.id"
                @click="goToStep(step.id)"
                class="w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left group"
                :class="[
                  currentStep === step.id
                    ? 'bg-[#FE8E0A]/10 text-[#FE8E0A] ring-1 ring-[#FE8E0A]/20'
                    : currentStep > step.id
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-gray-400 dark:text-gray-600 hover:bg-gray-50 dark:hover:bg-zinc-800'
                ]"
              >
                <div
                  class="size-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors"
                  :class="[
                    currentStep === step.id
                      ? 'bg-[#FE8E0A] text-white shadow-lg shadow-[#FE8E0A]/20'
                      : currentStep > step.id
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600'
                        : 'bg-gray-100 dark:bg-zinc-800 text-gray-400'
                  ]"
                >
                  <Icon v-if="currentStep > step.id" name="lucide:check" class="size-4" />
                  <span v-else>{{ step.id }}</span>
                </div>
                <span class="font-bold leading-tight">{{ step.title }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Form Content -->
        <div class="lg:col-span-2">
          <Transition :name="transitionDirection" mode="out-in">
            <div :key="currentStep" class="bg-white dark:bg-zinc-900 rounded-3xl p-10 border border-gray-100 dark:border-zinc-800 shadow-sm min-h-[700px] flex flex-col transition-all duration-300">
            
            <!-- Step 1: Category -->
            <div v-if="currentStep === 1" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:layers" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Property Category</h2>
              </div>
              
              <div class="space-y-6">
                <p class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-widest">Select Category *</p>
                <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  <button
                    v-for="cat in propertyCategories"
                    :key="cat"
                    @click="formData.category = cat"
                    class="flex flex-col items-center justify-center gap-6 p-10 rounded-[2.5rem] border-2 transition-all group relative overflow-hidden"
                    :class="[
                      formData.category === cat
                        ? 'bg-[#FE8E0A]/5 border-[#FE8E0A] text-[#FE8E0A] shadow-xl shadow-[#FE8E0A]/10 scale-[1.02]'
                        : 'bg-white dark:bg-zinc-800/50 border-gray-100 dark:border-zinc-800 text-gray-400 hover:border-gray-200 dark:hover:border-zinc-700'
                    ]"
                  >
                    <div 
                      class="p-5 rounded-2xl transition-all duration-500"
                      :class="formData.category === cat ? 'bg-[#FE8E0A] text-white rotate-6 scale-110' : 'bg-gray-50 dark:bg-zinc-800 text-gray-400 group-hover:scale-110'"
                    >
                      <Icon :name="cat === 'House & Lot' ? 'lucide:home' : cat.includes('Bedroom') ? 'lucide:bed' : 'lucide:building-2'" class="size-10" />
                    </div>
                    <span class="font-bold text-sm text-center leading-tight tracking-wide">{{ cat }}</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Step 2: Details -->
            <div v-if="currentStep === 2" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:file-text" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Property Details</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2 space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Property Title *</label>
                  <input
                    v-model="formData.title"
                    type="text"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all"
                    placeholder="Enter a descriptive title"
                  >
                </div>

                <div class="md:col-span-2 space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Property Description *</label>
                  <textarea
                    v-model="formData.description"
                    rows="4"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all"
                    placeholder="Describe your property in detail..."
                  ></textarea>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Bedrooms</label>
                  <input v-model="formData.bedrooms" type="number" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Bathrooms</label>
                  <input v-model="formData.bathrooms" type="number" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Garage</label>
                  <input v-model="formData.garage" type="number" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Floor Area (sqm)</label>
                  <input v-model="formData.floorArea" type="number" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Lot Area (sqm)</label>
                  <input v-model="formData.lotArea" type="number" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                </div>
              </div>
            </div>

            <!-- Step 3: Location -->
            <div v-if="currentStep === 3" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:map-pin" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Property Location</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Country</label>
                  <input disabled v-model="formData.country" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-gray-50 dark:bg-zinc-800/50 opacity-70">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">State/Province</label>
                  <input v-model="formData.state" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">City</label>
                  <input v-model="formData.city" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                </div>

                <div class="md:col-span-2 space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Street Address</label>
                  <input v-model="formData.streetAddress" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all">
                  <p class="text-xs text-gray-400 italic">If you don't want to pinpoint the exact location, you may leave this blank.</p>
                </div>

                <!-- Map Integration -->
                <div class="md:col-span-2 mt-4">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 block">Map Location</label>
                  <div class="h-80 rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-700 relative bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                    <Map :zoom="formData.zoom" :interactive="true" :center="[formData.longitude, formData.latitude]">
                      <MapMarker 
                        :longitude="formData.longitude" 
                        :latitude="formData.latitude" 
                        :draggable="true"
                        @drag-end="(coords) => { formData.latitude = coords.lat; formData.longitude = coords.lng }"
                      >
                        <div class="bg-white dark:bg-zinc-900 p-1.5 rounded-full shadow-xl border-2 border-[#FE8E0A] flex items-center justify-center">
                           <Icon name="lucide:map-pin" class="size-6 text-[#FE8E0A]" />
                        </div>
                      </MapMarker>
                      <MapControls position="bottom-right" :show-zoom="true" :show-locate="true" />
                    </Map>
                    <div class="absolute bottom-4 left-4 right-4 flex gap-4 pointer-events-none">
                       <div class="flex-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur p-3 rounded-2xl border dark:border-zinc-800 shadow-lg pointer-events-auto">
                          <p class="text-[10px] uppercase font-bold text-gray-400 mb-1">Latitude</p>
                          <input type="number" step="any" v-model="formData.latitude" class="w-full bg-transparent font-bold text-sm outline-none">
                       </div>
                       <div class="flex-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur p-3 rounded-2xl border dark:border-zinc-800 shadow-lg pointer-events-auto">
                          <p class="text-[10px] uppercase font-bold text-gray-400 mb-1">Longitude</p>
                          <input type="number" step="any" v-model="formData.longitude" class="w-full bg-transparent font-bold text-sm outline-none">
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 4: Images -->
            <div v-if="currentStep === 4" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:image" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Property Gallery</h2>
              </div>
              
              <div class="space-y-6">
                <div class="space-y-4">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Property Images *</label>
                  <div 
                    @dragover.prevent 
                    @drop.prevent="onFileChange"
                    class="border-2 border-dashed border-gray-200 dark:border-zinc-700 rounded-3xl p-12 flex flex-col items-center justify-center gap-4 hover:border-[#FE8E0A] transition-colors group cursor-pointer"
                    @click="fileInput?.click()"
                  >
                    <div class="bg-gray-50 dark:bg-zinc-800 p-4 rounded-2xl group-hover:scale-110 transition-transform text-gray-400">
                      <Icon name="lucide:upload-cloud" class="size-8" />
                    </div>
                    <div class="text-center">
                      <p class="font-bold">Drop files here or click to upload</p>
                      <p class="text-xs text-gray-400 mt-1">Upload high-quality images of your property (max 10MB each)</p>
                    </div>
                    <input ref="fileInput" type="file" multiple class="hidden" accept="image/*" @change="onFileChange">
                  </div>
                </div>

                <div v-if="formData.images.length > 0" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <div v-for="(img, idx) in formData.images" :key="idx" class="group relative aspect-square rounded-2xl overflow-hidden border dark:border-zinc-800">
                    <img :src="img.url" class="size-full object-cover">
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                       <button @click="removeImage(idx)" class="bg-red-500 text-white p-2 rounded-xl hover:scale-110 transition-transform">
                         <Icon name="lucide:trash-2" class="size-4" />
                       </button>
                       <button v-if="idx !== 0" @click="setAsDefault(idx)" class="bg-white text-black text-[10px] font-bold px-2 py-1 rounded-lg">
                         Set Default
                       </button>
                    </div>
                    <div v-if="idx === 0" class="absolute top-2 left-2 bg-[#FE8E0A] text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                      Default
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Video Link (Optional)</label>
                  <input
                    v-model="formData.videoLink"
                    type="text"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all"
                    placeholder="Enter YouTube or Vimeo video link"
                  >
                  <p class="text-xs text-gray-400 italic">YouTube, Vimeo, Facebook Reel, TikTok, or Google Drive link.</p>
                </div>
              </div>
            </div>

            <!-- Step 5: Pricing -->
            <div v-if="currentStep === 5" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:banknote" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Property Pricing</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Price (₱) *</label>
                  <div class="relative group">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-500">₱</span>
                    <input
                      v-model="formData.price"
                      type="text"
                      class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all"
                      placeholder="0.00"
                    >
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Price Type *</label>
                  <div class="relative group">
                    <select
                      v-model="formData.priceType"
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option v-for="type in priceTypes" :key="type" :value="type">{{ type }}</option>
                    </select>
                    <Icon name="lucide:chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 6: Attributes -->
            <div v-if="currentStep === 6" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:check-circle" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Property Attributes</h2>
              </div>
              
              <div class="space-y-6">
                <div class="space-y-4">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Amenities</label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <label v-for="amenity in amenitiesOptions" :key="amenity" class="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-all select-none">
                      <input 
                        type="checkbox" 
                        v-model="formData.amenities" 
                        :value="amenity"
                        class="size-5 rounded-lg accent-[#FE8E0A] bg-[#0a0a0a]"
                      >
                      <span class="text-sm font-medium">{{ amenity }}</span>
                    </label>
                  </div>
                </div>

                <div class="space-y-4">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Furnishing</label>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label v-for="option in furnishingOptions" :key="option" class="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-all select-none" :class="{ 'bg-zinc-800 bg-[#FE8E0A]/10 border-[#FE8E0A]/30 text-[#FE8E0A]': formData.furnishing === option }">
                      <input 
                        type="radio" 
                        v-model="formData.furnishing" 
                        :value="option"
                        class="size-5 rounded-full accent-[#FE8E0A]"
                      >
                      <span class="text-sm font-medium">{{ option }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Step 7: Owner Info -->
            <div v-if="currentStep === 7" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:user" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Lessor / Property Owner Information</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- RAPA Upload Shell -->
                <div class="md:col-span-2 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800">
                    <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">RAPA Upload</h3>
                    <div class="flex items-center gap-4">
                       <button class="bg-[#1b4fb5] text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
                          Choose File
                       </button>
                       <span class="text-xs text-gray-500">No file chosen</span>
                    </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">First Name *</label>
                  <input v-model="formData.ownerFirstName" type="text" placeholder="Enter First Name" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Last Name *</label>
                  <input v-model="formData.ownerLastName" type="text" placeholder="Enter Last Name" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Phone *</label>
                  <div class="flex gap-2">
                    <div class="w-24 px-3 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-zinc-800/50 text-xs flex items-center gap-2">
                       <Icon name="twemoji:flag-philippines" class="size-4" /> +63
                    </div>
                    <input v-model="formData.ownerPhone" type="text" placeholder="Enter Phone Number" class="flex-1 px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none">
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Email *</label>
                  <input v-model="formData.ownerEmail" type="email" placeholder="Enter Email" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Country</label>
                  <input disabled v-model="formData.ownerCountry" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-zinc-800/50 opacity-70">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">State/Province</label>
                  <input v-model="formData.ownerState" type="text" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">City</label>
                  <input v-model="formData.ownerCity" type="text" placeholder="-- Select City --" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none">
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Street Address</label>
                  <input v-model="formData.ownerStreetAddress" type="text" placeholder="Enter Street Address" class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] outline-none">
                </div>
              </div>
            </div>

            <!-- Step 8: Review & Publish -->
            <div v-if="currentStep === 8" class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
                  <Icon name="lucide:clipboard-check" class="size-5" />
                </div>
                <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Review & Publish</h2>
              </div>
              
              <div class="space-y-6">
                <!-- Summary Card -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Main Info -->
                  <div class="space-y-4">
                    <div class="flex justify-between items-center group">
                      <h3 class="font-bold text-xl">{{ formData.title || 'Untitled Property' }}</h3>
                      <button @click="goToStep(2)" class="text-[#FE8E0A] hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Edit</button>
                    </div>
                    
                    <div class="space-y-3 bg-gray-50 dark:bg-zinc-800/30 p-6 rounded-3xl border dark:border-zinc-800">
                      <div class="flex items-center gap-3">
                        <Icon name="lucide:tag" class="size-4 text-gray-400" />
                        <span class="text-sm font-bold">{{ formData.category || 'No category' }}</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <Icon name="lucide:banknote" class="size-4 text-gray-400" />
                        <span class="text-sm font-bold">₱{{ formData.price || '0' }} ({{ formData.priceType }})</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <Icon name="lucide:map-pin" class="size-4 text-gray-400" />
                        <span class="text-sm text-gray-500">{{ formData.city }}, {{ formData.state }}</span>
                      </div>
                      <div class="pt-2 grid grid-cols-3 gap-2">
                        <div class="bg-white dark:bg-zinc-800 p-2 rounded-xl text-center border dark:border-zinc-700">
                          <p class="text-[10px] text-gray-400">Beds</p>
                          <p class="font-bold text-sm">{{ formData.bedrooms }}</p>
                        </div>
                        <div class="bg-white dark:bg-zinc-800 p-2 rounded-xl text-center border dark:border-zinc-700">
                          <p class="text-[10px] text-gray-400">Baths</p>
                          <p class="font-bold text-sm">{{ formData.bathrooms }}</p>
                        </div>
                        <div class="bg-white dark:bg-zinc-800 p-2 rounded-xl text-center border dark:border-zinc-700">
                          <p class="text-[10px] text-gray-400">Area</p>
                          <p class="font-bold text-sm">{{ formData.floorArea }} sq</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Images Grid View -->
                  <div class="space-y-4">
                    <div class="flex justify-between items-center group">
                      <h3 class="text-sm font-bold uppercase tracking-wider text-gray-400">Images ({{ formData.images.length }})</h3>
                      <button @click="goToStep(4)" class="text-[#FE8E0A] hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Edit</button>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                       <div v-for="(img, i) in formData.images.slice(0, 5)" :key="i" class="aspect-square rounded-xl overflow-hidden border dark:border-zinc-800">
                          <img :src="img.url" class="size-full object-cover">
                       </div>
                       <div v-if="formData.images.length > 5" class="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold text-gray-500 border dark:border-zinc-700">
                          +{{ formData.images.length - 5 }}
                       </div>
                    </div>
                  </div>
                </div>

                <!-- Attributes Summary -->
                <div class="space-y-4 bg-gray-50 dark:bg-zinc-800/30 p-6 rounded-3xl border dark:border-zinc-800 relative group">
                  <button @click="goToStep(6)" class="absolute top-6 right-6 text-[#FE8E0A] hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Edit</button>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Amenities & Furnishing</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="amenity in formData.amenities" :key="amenity" class="bg-white dark:bg-zinc-800 px-3 py-1.5 rounded-full text-xs font-bold border dark:border-zinc-700 border-gray-100">{{ amenity }}</span>
                    <span class="bg-[#FE8E0A]/10 text-[#FE8E0A] px-3 py-1.5 rounded-full text-xs font-bold border border-[#FE8E0A]/20">{{ formData.furnishing }}</span>
                  </div>
                </div>

                <!-- Owner Summary -->
                <div class="space-y-4 bg-gray-50 dark:bg-zinc-800/30 p-6 rounded-3xl border dark:border-zinc-800 relative group">
                  <button @click="goToStep(7)" class="absolute top-6 right-6 text-[#FE8E0A] hover:underline text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Edit</button>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Lessor Information</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <p class="text-[10px] text-gray-400">Name</p>
                       <p class="text-sm font-bold">{{ formData.ownerFirstName }} {{ formData.ownerLastName }}</p>
                     </div>
                     <div>
                       <p class="text-[10px] text-gray-400">Phone</p>
                       <p class="text-sm font-bold">+63 {{ formData.ownerPhone }}</p>
                     </div>
                  </div>
                </div>

                <label class="flex items-start gap-3 p-4 bg-[#FE8E0A]/5 rounded-2xl border border-[#FE8E0A]/30 cursor-pointer">
                  <input type="checkbox" class="mt-1 size-4 accent-[#FE8E0A]">
                  <span class="text-xs font-medium text-gray-600 dark:text-gray-400">Check this if you don't want it to be visible on your profile page.</span>
                </label>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="mt-auto pt-10 flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 mt-10">
              <button
                v-if="!isFirstStep"
                @click="prevStep"
                class="flex items-center gap-2 px-8 py-3 rounded-2xl font-bold bg-white dark:bg-zinc-800 border dark:border-zinc-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 transition-all"
              >
                <Icon name="lucide:arrow-left" class="size-4" />
                Back
              </button>
              <div v-else></div>

              <button
                @click="isLastStep ? null : nextStep()"
                class="flex items-center gap-2 px-8 py-3 rounded-2xl font-bold transition-all shadow-xl cursor-pointer"
                :class="[
                  isLastStep 
                    ? 'bg-green-600 text-white shadow-green-500/20' 
                    : 'bg-[#FE8E0A] text-white shadow-[#FE8E0A]/20'
                ]"
              >
                <span>{{ isLastStep ? 'Publish Property' : 'Next Step' }}</span>
                <Icon v-if="!isLastStep" name="lucide:arrow-right" class="size-4" />
                <Icon v-else name="lucide:check-circle" class="size-4" />
              </button>
            </div>

          </div>
          </Transition>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
@reference "../../assets/tailwind.css";

.animate-in {
  animation-duration: 0.5s;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Corrected Sliding Transitions */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
