<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Card } from '@/components/ui/card'
import RichTextEditor from '@/components/ui/toggle-group/RichTextEditor.vue'

const router = useRouter()
const hasUnsavedChanges = ref(false)

const formData = ref({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+63 912 345 6789',
  birthday: '1990-01-01',
  about: 'Experienced real estate agent specializing in residential and commercial properties in Metro Manila.',
  address: '123 Main Street, Makati City',
  country: 'Philippines',
  region: 'National Capital Region (NCR)',
  province: 'Metro Manila',
  city: 'Makati',
  barangay: 'Bel-Air',
  zip: '1200'
})

const handleInputChange = () => {
  hasUnsavedChanges.value = true
}

const saveChanges = () => {
  // Logic to save data would go here
  console.log('Saving...', formData.value)
  hasUnsavedChanges.value = false
  // In a real app we might redirect or show a success message
}
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-6 max-w-8xl mx-auto min-h-screen bg-white dark:bg-[#0a0a0a]">
      <!-- Header -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold text-[#FE8E0A] mb-2 uppercase tracking-tight">Edit Profile</h1>
          <p class="text-gray-500 dark:text-gray-400">Update your personal information and profile settings</p>
        </div>
      </div>

      <!-- Warning Banner -->
      <div v-if="hasUnsavedChanges" class="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-4 transition-all animate-in fade-in slide-in-from-top-4">
        <div class="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
          <Icon name="lucide:alert-triangle" class="w-5 h-5" />
          <p class="text-sm font-medium">You have unsaved changes</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Personal Information Section -->
        <section class="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm space-y-8">
          <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
            <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
              <Icon name="lucide:user" class="size-5" />
            </div>
            <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Personal Information</h2>
          </div>

          <!-- Profile Photo -->
          <div class="bg-gray-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800">
            <h3 class="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Profile Photo</h3>
            <div class="flex items-center gap-6">
              <div class="relative">
                <NuxtImg
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
                  class="size-24 rounded-2xl object-cover ring-4 ring-white dark:ring-zinc-800 shadow-xl"
                />
              </div>
              <div class="space-y-3">
                <button
                  class="bg-[#1b4fb5] dark:bg-[#2b68df] dark:text-white text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
                >
                  Upload New Photo
                </button>
                <p class="text-xs text-gray-500 dark:text-gray-400">JPG, PNG Max size 2MB.</p>
              </div>
            </div>
          </div>

          <!-- Personal Fields -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">First name *</label>
              <div class="relative group">
                <Icon name="lucide:user" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <input
                  v-model="formData.firstName"
                  type="text"
                  @input="handleInputChange"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all placeholder:text-gray-400"
                  placeholder="First Name"
                >
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Last name *</label>
              <div class="relative group">
                <Icon name="lucide:user" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <input
                  v-model="formData.lastName"
                  type="text"
                  @input="handleInputChange"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all placeholder:text-gray-400"
                  placeholder="Last Name"
                >
              </div>
            </div>

            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-bold text-red-500">Email Address (Must match LR account)</label>
              <div class="relative group">
                <Icon name="lucide:mail" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <input
                  v-model="formData.email"
                  type="email"
                  @input="handleInputChange"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all placeholder:text-gray-400"
                  placeholder="Email"
                >
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Phone Number *</label>
              <div class="relative group">
                <Icon name="lucide:phone" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <input
                  v-model="formData.phone"
                  type="text"
                  @input="handleInputChange"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all placeholder:text-gray-400"
                  placeholder="Phone Number"
                >
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Birthday *</label>
              <div class="relative group">
                <Icon name="lucide:calendar" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <input
                  v-model="formData.birthday"
                  type="date"
                  @input="handleInputChange"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all"
                >
              </div>
            </div>

            <div class="md:col-span-2 space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">About Yourself *</label>
              <div class="rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700">
                <RichTextEditor v-model="formData.about" @input="handleInputChange" />
              </div>
            </div>
          </div>
        </section>

        <!-- Location Information Section -->
        <section class="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-100 dark:border-zinc-800 shadow-sm space-y-8 h-fit">
          <div class="flex items-center gap-3 border-b border-gray-100 dark:border-zinc-800 pb-4">
            <div class="bg-gray-100 dark:bg-zinc-800 p-2 rounded-lg text-gray-600 dark:text-gray-400">
              <Icon name="lucide:map-pin" class="size-5" />
            </div>
            <h2 class="text-lg font-bold uppercase tracking-wider text-[#FE8E0A]">Location Information</h2>
          </div>

          <div class="grid grid-cols-1 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Address Line 1</label>
              <div class="relative group">
                <Icon name="lucide:home" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <input
                  v-model="formData.address"
                  type="text"
                  @input="handleInputChange"
                  class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all placeholder:text-gray-400"
                  placeholder="Main Street"
                >
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Country *</label>
              <div class="relative group">
                <Icon name="lucide:flag" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <select
                  v-model="formData.country"
                  @change="handleInputChange"
                  class="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option>Philippines</option>
                  <option>United States</option>
                  <option>Singapore</option>
                </select>
                <Icon name="lucide:chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Region *</label>
              <div class="relative group">
                <Icon name="lucide:map" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                <select
                  v-model="formData.region"
                  @change="handleInputChange"
                  class="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all appearance-none cursor-pointer"
                >
                  <option>National Capital Region (NCR)</option>
                  <option>Region VII - Central Visayas</option>
                  <option>Region IV-A - CALABARZON</option>
                </select>
                <Icon name="lucide:chevron-down" class="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 dark:text-gray-300">City *</label>
                <div class="relative group">
                  <Icon name="lucide:building-2" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                  <input
                    v-model="formData.city"
                    type="text"
                    @input="handleInputChange"
                    class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all placeholder:text-gray-400"
                    placeholder="City"
                  >
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700 dark:text-gray-300">Zip Code</label>
                <div class="relative group">
                  <Icon name="lucide:hash" class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#1b4fb5] dark:group-focus-within:text-[#2b68df] transition-colors" />
                  <input
                    v-model="formData.zip"
                    type="text"
                    @input="handleInputChange"
                    class="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 dark:bg-[#0a0a0a] dark:text-white focus:ring-2 focus:ring-[#1b4fb5]/20 focus:border-[#1b4fb5] dark:focus:ring-[#2b68df]/20 dark:focus:border-[#2b68df] outline-none transition-all placeholder:text-gray-400"
                    placeholder="1200"
                  >
                </div>
              </div>
            </div>

            <button
              @click="saveChanges"
              class="w-full bg-[#1b4fb5] dark:bg-[#2b68df] hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-[#1b4fb5]/20 dark:shadow-[#2b68df]/20 cursor-pointer flex items-center justify-center gap-2 group mt-4"
            >
              <span>Save Changes</span>
              <Icon name="lucide:check" class="size-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
@reference "../../../assets/tailwind.css";

/* Custom transitions for the editor */
:deep(.ql-toolbar) {
  @apply dark:bg-zinc-800 dark:border-zinc-700 rounded-t-xl;
}
:deep(.ql-container) {
  @apply dark:bg-[#0a0a0a] dark:border-zinc-700 rounded-b-xl;
}
</style>
