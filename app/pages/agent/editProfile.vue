<script setup lang="ts">
import RichTextEditor from '@/components/ui/toggle-group/RichTextEditor.vue'

const router = useRouter()

const formData = ref({
  firstName: 'Hernan',
  lastName: 'Malubay',
  email: 'maluherby@gmail.com',
  phone: '+639422482037',
  birthday: '1985-10-13',
  about: 'Type Here',
  address: 'Blk 6 Sitio Immaculada (Near Sitio Son-oc Basketball Court)',
  country: 'Philippines',
  region: 'Region VII - Central Visayas',
  province: 'Cebu',
  city: 'Cebu City',
  barangay: '',
  zip: '6000'
})

const saveChanges = () => {
  // Logic to save data would go here
  console.log('Saving...', formData.value)
  router.back()
}
</script>

<template>
  <div class="min-h-screen bg-[#f8f9fa] dark:bg-[#0f1011] pb-20">
    <ClientOnly>
      <Navbar />
    </ClientOnly>

    <div class="max-w-8xl mx-auto pt-28 px-6">
      <div class="flex items-center justify-between mb-8">
        <div>
          <button @click="router.back()"
            class="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black dark:hover:text-white transition-all group">
            <Icon name="lucide:chevron-left" class="size-5 group-hover:-translate-x-1 transition-transform" />
            <span class="text-sm font-medium cursor-pointer tracking-wide uppercase">Back to Profile</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <section
          class="bg-white dark:bg-[#1a1b1e] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div class="flex items-center gap-3 mb-8 border-b dark:border-gray-800 pb-4">
            <div class=" rounded-lg">
              <Icon name="lucide:user" class="size-5 text-gray-600" />
            </div>
            <h2 class="text-lg font-bold uppercase tracking-wider">Personal Information</h2>
          </div>
          <section
            class="bg-white dark:bg-[#1a1b1e] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm mb-6">
            <h2 class="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Profile Photo</h2>
            <div class="flex items-center gap-8">
              <NuxtImg src="/rebecca.png"
                class="size-24 rounded-2xl object-cover ring-4 ring-gray-50 dark:ring-gray-800" />
              <div>
                <button
                  class="bg-black dark:bg-white dark:text-black text-white px-6 py-2 rounded-lg font-bold text-sm hover:opacity-80 transition-opacity mb-2">
                  Upload New Photo
                </button>
                <p class="text-xs text-gray-500">JPG, PNG Max size 2MB.</p>
              </div>
            </div>
          </section>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">First name *</label>
              <div class="relative">
                <Icon name="lucide:user" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.firstName" type="text"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Hernan">
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Last name *</label>
              <div class="relative">
                <Icon name="lucide:user" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.lastName" type="text"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Malubay">
              </div>
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-bold text-red-500">Email Address (Must match LR account)</label>
              <div class="relative">
                <Icon name="lucide:mail" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.email" type="email"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="maluherby@gmail.com">
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number *</label>
              <div class="relative">
                <Icon name="lucide:phone" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.phone" type="text"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="+639422482037">
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Birthday *</label>
              <div class="relative">
                <Icon name="lucide:calendar" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.birthday" type="date"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all">
              </div>
            </div>
            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">About Yourself *</label>
              <RichTextEditor v-model="formData.about" />
            </div>
          </div>
        </section>

        <section
          class="bg-white dark:bg-[#1a1b1e] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div class="flex items-center gap-3 mb-8 border-b dark:border-gray-800 pb-4">
            <div class=" rounded-lg">
              <Icon name="lucide:map-pin" class="size-5 text-gray-600" />
            </div>
            <h2 class="text-lg font-bold uppercase tracking-wider">Location Information</h2>
          </div>

          <div class="grid grid-cols-1 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Address Line 1</label>
              <div class="relative">
                <Icon name="lucide:home" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.address" type="text"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Blk 6 Sitio Immaculada (Near Sitio Son-oc Basketball Court)">
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Country *</label>
              <div class="relative">
                <Icon name="lucide:flag" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <select v-model="formData.country"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option>Philippines</option>
                  <option>United States</option>
                  <option>Japan</option>
                  <option>Singapore</option>
                </select>
                <Icon name="lucide:chevron-down"
                  class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Regions *</label>
              <div class="relative">
                <Icon name="lucide:map" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <select v-model="formData.region"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option>Region VII - Central Visayas</option>
                  <option>National Capital Region (NCR)</option>
                  <option>Region III - Central Luzon</option>
                  <option>Region IV-A - CALABARZON</option>
                </select>
                <Icon name="lucide:chevron-down"
                  class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Provinces *</label>
              <div class="relative">
                <Icon name="lucide:landmark" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <select v-model="formData.province"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option>Cebu</option>
                  <option>Bohol</option>
                  <option>Negros Oriental</option>
                  <option>Siquijor</option>
                </select>
                <Icon name="lucide:chevron-down"
                  class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Cities *</label>
              <div class="relative">
                <Icon name="lucide:building-2" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <select v-model="formData.city"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                  <option>Cebu City</option>
                  <option>Mandaue City</option>
                  <option>Lapu-Lapu City</option>
                  <option>Talisay City</option>
                </select>
                <Icon name="lucide:chevron-down"
                  class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Barangay</label>
              <div class="relative">
                <Icon name="lucide:map-pinned" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.barangay" type="text"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Barangay">
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Zip Code</label>
              <div class="relative">
                <Icon name="lucide:hash" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="formData.zip" type="text"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-[#0f1011] focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="6000">
              </div>
            </div>

            <button @click="saveChanges"
              class="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20">
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>