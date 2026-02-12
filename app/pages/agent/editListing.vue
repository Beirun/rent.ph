<script setup lang="ts">
import { ref } from 'vue'
import RichTextEditor from '@/components/ui/toggle-group/RichTextEditor.vue'

// UI State
const editorValue = ref('')
const isSaving = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const currentView = ref('map')
const searchQuery = ref('')

// Form Constants
const categories = ['Apartment', 'Condominium', 'House and Lot', 'Studio', 'Commercial']
const paymentTerms = ['Monthly', 'Quarterly', 'Yearly']

// Main Form Data
const formData = ref({
  category: 'Apartment',
  title: 'Affordable Apartment for Rent at Guadalupe Cebu!',
  videoLink: '',
  price: 15000.00,
  paymentTerms: 'Monthly',
  lessor: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: 'FELY HOMES, Cebu, Cebu',
    country: 'Philippines'
  },
  extraInfo: {
    beds: 0,
    bathrooms: 0,
    floorArea: 1,
    floorAreaUnit: 'sqm',
    garages: 0,
    lotArea: 0
  },
  location: {
    city: 'Cebu City',
    address: '',
    latitude: 10.3234205,
    longitude: 123.8801952,
    zoom: 13
  },
  publishOnProfile: true,
  status: 'publish', // publish, draft, pending
  is_rented: false,
  stats: {
    views: 0,
    inquiries: 0,
    clients: 0
  },
  rapaFile: null as File | null
})

const statusOptions = [
  { label: 'Published', value: 'publish', class: 'text-green-600 bg-green-50 border-green-200' },
  { label: 'Draft', value: 'draft', class: 'text-gray-600 bg-gray-50 border-gray-200' },
  { label: 'Pending', value: 'pending', class: 'text-amber-600 bg-amber-50 border-amber-200' }
]

// Gallery Logic
interface GalleryImage {
  id: string;
  url: string;
  isDefault: boolean;
  file?: File;
}

const galleryImages = ref<GalleryImage[]>([])

const triggerUpload = () => fileInput.value?.click()

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!target.files) return

  const newFiles = Array.from(target.files).map(file => ({
    id: crypto.randomUUID(),
    url: URL.createObjectURL(file),
    isDefault: galleryImages.value.length === 0,
    file
  }))

  galleryImages.value = [...galleryImages.value, ...newFiles]
  target.value = ''
}

const removeImage = (id: string) => {
  const wasDefault = galleryImages.value.find(img => img.id === id)?.isDefault
  galleryImages.value = galleryImages.value.filter(img => img.id !== id)
  // if (wasDefault && galleryImages.value.length > 0) {
  //   galleryImages.value[0].isDefault = true
  // }
}

const setThumbnail = (id: string) => {
  galleryImages.value.forEach(img => img.isDefault = img.id === id)
}

const handleSave = async () => {
  isSaving.value = true
  console.log('Saving:', { ...formData.value, images: galleryImages.value })
  setTimeout(() => {
    isSaving.value = false
    alert('Property updated successfully!')
  }, 1000)
}



// Fetch Data on Mount if ID exists
import { onMounted } from 'vue'
import { useRoute } from '#app'
import { usePropertyStore } from '~/stores/propertyStore'

const route = useRoute()
const propertyStore = usePropertyStore()

onMounted(async () => {
  const propertyId = route.query.id
  if (propertyId) {
    // Fetch property details
    await propertyStore.getProperty(propertyId as string)
    const property = propertyStore.property

    if (property) {
      // Populate form data
      formData.value.title = property.title
      formData.value.category = categories.includes(property.category_id?.toString()) ? property.category_id.toString() : 'Apartment'
      editorValue.value = property.content || ''
      formData.value.price = parseFloat(property.price)

      // Location
      formData.value.location.city = property.city || ''
      formData.value.location.address = property.address || ''
      formData.value.location.latitude = property.map_lat ? parseFloat(property.map_lat) : 10.3234205
      formData.value.location.longitude = property.map_lng ? parseFloat(property.map_lng) : 123.8801952
      formData.value.location.zoom = property.map_zoom || 13

      formData.value.status = property.status || 'publish'
      formData.value.is_rented = !!property.is_sold

      // Owner Details
      // Note: Public API property model might differ slightly in naming, adjusting based on models/property.ts
      formData.value.lessor.firstName = property.owner_first_name || property.user_name || ''
      formData.value.lessor.lastName = property.owner_last_name || ''
      formData.value.lessor.phone = property.owner_phone || property.agent_phone || ''
      formData.value.lessor.email = property.owner_email || property.agent_email || ''
      formData.value.lessor.address = property.owner_address || ''

      // Stats
      formData.value.stats.views = property.view || 0

      // Populate Gallery
      if (property.gallery) {
        let galleryData: any[] = []

        if (Array.isArray(property.gallery)) {
          // Handle Public API format (Array of objects)
          galleryData = property.gallery
        } else if (typeof property.gallery === 'string') {
          // Handle Agent API format (String of IDs)
          galleryData = (property.gallery as string).split(',').map(id => ({
            id: id.trim(),
            url: `https://rent.ph/api/images/${id.trim()}`,
            large: `https://rent.ph/api/images/${id.trim()}`,
            thumb: `https://rent.ph/api/images/${id.trim()}`
          }))
        }

        galleryImages.value = galleryData.map((item: any) => {
          if (typeof item === 'string') {
            return {
              id: item,
              url: `https://rent.ph/api/images/${item}`,
              isDefault: false
            }
          }

          const url = item.large || item.url || item.thumb
          let isDef = false
          if (property.image && url === property.image) isDef = true

          return {
            id: item.id || crypto.randomUUID(),
            url: url,
            isDefault: isDef
          }
        })
      }
    }
  }
})

</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-6 max-w-8xl mx-auto min-h-screen bg-gray-50/50 dark:bg-[#0a0a0a]">

      <div class="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-zinc-800 pb-6">
        <div>
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            Manage Properties <span class="text-gray-400 font-light">»</span>
            <span class="text-[#FE8E0A] uppercase tracking-tighter">Edit</span>
          </h1>
          <div class="mt-2 flex items-center gap-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-gray-500 uppercase">Status:</span>
              <select v-model="formData.status"
                class="text-xs font-bold uppercase bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-2 py-1 outline-none focus:border-[#FE8E0A]">
                <option v-for="opt in statusOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>
            <label class="flex items-center gap-2 cursor-pointer group">
              <div class="relative inline-flex items-center">
                <input type="checkbox" v-model="formData.is_rented" class="sr-only peer">
                <div
                  class="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-zinc-600 peer-checked:bg-blue-600">
                </div>
              </div>
              <span class="text-xs font-bold text-gray-500 uppercase group-hover:text-blue-600 transition-colors">Mark
                as Rented</span>
            </label>
          </div>
        </div>
        <div class="flex gap-3">
          <button @click="handleSave" :disabled="isSaving"
            class="bg-[#FE8E0A] text-white px-8 py-2.5 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50 active:scale-95">
            {{ isSaving ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">

        <div class="lg:col-span-8 space-y-8">

          <section
            class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h2 class="text-base font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-tight">Property
              Category</h2>
            <div class="relative">
              <select v-model="formData.category"
                class="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-800 dark:text-zinc-200 outline-none focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] transition-all appearance-none cursor-pointer">
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
              <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <Icon name="lucide:chevron-down" class="size-4" />
              </div>
            </div>
          </section>

          <section
            class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h2 class="text-base font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-tight">Property Content
            </h2>
            <div class="space-y-6">
              <div class="space-y-2">
                <label
                  class="text-xs font-bold text-gray-500 dark:text-zinc-400 mb-1 block px-1 uppercase tracking-wide">Title
                  *</label>
                <input v-model="formData.title" type="text" placeholder="e.g. Modern Villa with Sea View"
                  class="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-800 dark:text-zinc-200 outline-none focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] transition-all" />
              </div>
              <div class="space-y-2">
                <label
                  class="text-xs font-bold text-gray-500 dark:text-zinc-400 mb-1 block px-1 uppercase tracking-wide">Content
                  *</label>
                <div
                  class="rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                  <RichTextEditor v-model="editorValue" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-normal text-gray-400 italic mb-1 block px-1">Video Link (Optional)</label>
                <input v-model="formData.videoLink" type="text" placeholder="YouTube or Vimeo URL"
                  class="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-800 dark:text-zinc-200 outline-none focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] transition-all" />
              </div>
            </div>
          </section>

          <section
            class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-base font-bold text-gray-800 dark:text-white uppercase tracking-tight">Gallery *</h2>
              <span class="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded-md">{{
                galleryImages.length }} / 18 Images</span>
            </div>

            <input type="file" ref="fileInput" multiple accept="image/*" class="hidden" @change="handleFileUpload" />

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <button @click="triggerUpload" type="button"
                class="aspect-video flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-zinc-700 rounded-2xl hover:border-[#FE8E0A] dark:hover:border-[#FE8E0A] hover:bg-orange-50/50 dark:hover:bg-orange-500/5 transition-all group">
                <div class="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 group-hover:scale-110 transition-transform">
                  <Icon name="lucide:plus" class="size-6 text-gray-500 dark:text-zinc-400 group-hover:text-[#FE8E0A]" />
                </div>
                <span
                  class="mt-2 text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#FE8E0A]">Add
                  Photos</span>
              </button>

              <div v-for="img in galleryImages" :key="img.id"
                class="relative group aspect-video rounded-2xl overflow-hidden bg-gray-200 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
                <img :src="img.url"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div
                  class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                  <div class="flex justify-end">
                    <button @click="removeImage(img.id)"
                      class="bg-red-500/80 hover:bg-red-500 backdrop-blur-md text-white p-1.5 rounded-lg transition-colors">
                      <Icon name="lucide:trash-2" class="size-4" />
                    </button>
                  </div>
                  <button @click="setThumbnail(img.id)" :class="[
                    'text-[10px] uppercase font-bold py-1.5 rounded-lg backdrop-blur-md transition-all',
                    img.isDefault ? 'bg-green-500/90 text-white' : 'bg-white/20 text-white hover:bg-white/40'
                  ]">
                    {{ img.isDefault ? 'Main Thumbnail' : 'Set as Main' }}
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm">
            <div class="p-6 space-y-6 border-b border-gray-100 dark:border-zinc-800">
              <h2
                class="text-base font-bold text-gray-800 dark:text-white uppercase tracking-tight flex items-center gap-2">
                <Icon name="lucide:map-pin" class="size-5 text-[#FE8E0A]" />
                Location Details
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs font-bold text-gray-500 dark:text-zinc-400 px-1 uppercase tracking-wide">City /
                    Municipality *</label>
                  <input v-model="formData.location.city" type="text" placeholder="e.g. Cebu City"
                    class="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-800 dark:text-zinc-200 outline-none focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] transition-all" />
                </div>
                <div class="space-y-2">
                  <label
                    class="text-xs font-bold text-gray-500 dark:text-zinc-400 px-1 uppercase tracking-wide">Complete
                    Address *</label>
                  <input v-model="formData.location.address" type="text" placeholder="Street, Building, Barangay"
                    class="w-full px-4 py-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-800 dark:text-zinc-200 outline-none focus:ring-2 focus:ring-[#FE8E0A]/20 focus:border-[#FE8E0A] transition-all" />
                </div>
              </div>
            </div>

            <div class="h-80 w-full relative bg-gray-100 dark:bg-zinc-950">
              <ClientOnly>
                <Map :center="[formData.location.longitude, formData.location.latitude]" :zoom="formData.location.zoom"
                  class="h-full w-full" />
              </ClientOnly>
            </div>

            <div class="p-6 bg-white dark:bg-zinc-900 grid grid-cols-3 gap-6">
              <div class="space-y-1">
                <label class="text-[10px] text-gray-400 uppercase font-extrabold tracking-tighter">Latitude</label>
                <input v-model="formData.location.latitude" type="text"
                  class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-lg text-xs font-mono outline-none focus:border-[#FE8E0A]" />
              </div>
              <div class="space-y-1">
                <label class="text-[10px] text-gray-400 uppercase font-extrabold tracking-tighter">Longitude</label>
                <input v-model="formData.location.longitude" type="text"
                  class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-lg text-xs font-mono outline-none focus:border-[#FE8E0A]" />
              </div>
              <div class="space-y-1">
                <label class="text-[10px] text-gray-400 uppercase font-extrabold tracking-tighter">Zoom</label>
                <input v-model="formData.location.zoom" type="number"
                  class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-lg text-xs font-mono outline-none focus:border-[#FE8E0A]" />
              </div>
            </div>
          </section>

          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <button @click="handleSave"
              class="w-full bg-[#ff5a5f] hover:bg-[#ff4449] text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-red-500/20 active:scale-[0.98]">
              Save Property Changes
            </button>
          </div>
        </div>

        <div class="lg:col-span-4 space-y-6">

          <!-- Property Stats Card -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h2
              class="text-sm font-bold text-gray-800 dark:text-white mb-4 uppercase tracking-tight flex items-center gap-2">
              <Icon name="lucide:bar-chart-3" class="size-4 text-[#FE8E0A]" /> Performance
            </h2>
            <div class="grid grid-cols-3 gap-2">
              <div
                class="flex flex-col items-center p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-800">
                <span class="text-xl font-bold text-gray-800 dark:text-white">{{ formData.stats.views }}</span>
                <span class="text-[10px] uppercase text-gray-500 font-bold">Views</span>
              </div>
              <div
                class="flex flex-col items-center p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-800">
                <span class="text-xl font-bold text-gray-800 dark:text-white">{{ formData.stats.inquiries }}</span>
                <span class="text-[10px] uppercase text-gray-500 font-bold">Inquiries</span>
              </div>
              <div
                class="flex flex-col items-center p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-xl border border-gray-100 dark:border-zinc-800">
                <span class="text-xl font-bold text-gray-800 dark:text-white">{{ formData.stats.clients }}</span>
                <span class="text-[10px] uppercase text-gray-500 font-bold">Clients</span>
              </div>
            </div>
          </div>

          <!-- RAPA Upload Card -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
            <h2
              class="text-sm font-bold text-gray-800 dark:text-white mb-4 uppercase tracking-tight flex items-center gap-2">
              <Icon name="lucide:file-check" class="size-4 text-blue-500" /> RAPA Validation
            </h2>
            <div class="flex flex-col gap-3">
              <div
                class="p-4 border-2 border-dashed border-gray-200 dark:border-zinc-700 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-blue-400 transition-colors cursor-pointer bg-gray-50/50 dark:bg-zinc-800/20">
                <Icon name="lucide:upload-cloud" class="size-8 text-gray-400" />
                <span class="text-xs font-bold text-gray-500 uppercase">Upload RAPA File</span>
              </div>
              <p class="text-[10px] text-gray-400 text-center leading-tight">
                Upload your Rental Authority to Process Application (RAPA) to verify this listing.
              </p>
            </div>
          </div>
          <h2
            class="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-tight flex items-center gap-2">
            <Icon name="lucide:sparkles" class="size-4 text-blue-500" /> Amenities
          </h2>
          <div
            class="max-h-80 overflow-y-auto space-y-1 pr-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-zinc-800">
            <div
              class="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors cursor-pointer group">
              <input type="checkbox" class="size-4 rounded border-gray-300 accent-[#1b4fb5] cursor-pointer" />
              <label
                class="text-sm text-gray-600 dark:text-gray-400 cursor-pointer group-hover:text-gray-900 dark:group-hover:text-white">jhvjvh</label>
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
          <h2
            class="text-sm font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-tight flex items-center gap-2">
            <Icon name="lucide:user" class="size-4 text-orange-500" /> Owner Details
          </h2>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <input v-model="formData.lessor.firstName" placeholder="First Name"
                class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm outline-none focus:border-[#FE8E0A]" />
              <input v-model="formData.lessor.lastName" placeholder="Last Name"
                class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm outline-none focus:border-[#FE8E0A]" />
            </div>
            <input v-model="formData.lessor.phone" placeholder="Phone Number"
              class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm outline-none focus:border-[#FE8E0A]" />
            <input v-model="formData.lessor.email" placeholder="Email Address"
              class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm outline-none focus:border-[#FE8E0A]" />
            <div class="relative">
              <select v-model="formData.lessor.country"
                class="w-full px-3 py-2 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm outline-none appearance-none cursor-pointer">
                <option>Philippines</option>
              </select>
              <Icon name="lucide:chevron-down" class="absolute right-3 top-1/2 -translate-y-1/2 size-3 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>