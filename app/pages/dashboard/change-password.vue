<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  KeyRound,
  Smartphone
} from 'lucide-vue-next'

const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)

const formData = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const isLoading = ref(false)
const statusMessage = ref<{ type: 'error' | 'success', text: string } | null>(null)

const isFormValid = computed(() => {
  return formData.value.currentPassword && 
         formData.value.newPassword && 
         formData.value.confirmPassword && 
         formData.value.newPassword === formData.value.confirmPassword
})

const handleUpdatePassword = async () => {
  if (!isFormValid.value) return
  
  isLoading.value = true
  statusMessage.value = null
  
  try {
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Success scenario
    statusMessage.value = {
      type: 'success',
      text: 'Your password has been successfully updated!'
    }
    
    // Clear form
    formData.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  } catch (err) {
    statusMessage.value = {
      type: 'error',
      text: 'Failed to update password. Please check your current password and try again.'
    }
  } finally {
    isLoading.value = false
  }
}
const securityTips = [
  {
    icon: ShieldCheck,
    title: 'Stronger Passwords',
    description: 'Use a mix of letters, numbers, and symbols for maximum security.'
  },
  {
    icon: KeyRound,
    title: 'Unique Key',
    description: 'Avoid using the same password across multiple different websites.'
  },
  {
    icon: Smartphone,
    title: 'Stay Safe',
    description: 'Never share your password with anyone, including Rent.ph staff.'
  }
]

const requirements = [
  'At least 8 characters long',
  'Includes at least one number',
  'Includes one special character',
  'Mix of uppercase & lowercase'
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-4 md:p-8 min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div class="max-w-7xl">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <div>
            <h1 class="text-3xl font-bold text-[#FE8E0A] mb-2 uppercase tracking-tight">Change Password</h1>
            <p class="text-gray-500 dark:text-gray-400">Manage and update your account security credentials</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <!-- Main Form Container -->
          <div class="lg:col-span-12 xl:col-span-8">
            <div class="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[2.5rem] p-6 md:p-10 shadow-sm space-y-8">
              <div class="flex items-center gap-4 border-b border-gray-100 dark:border-zinc-800 pb-6">
                <div class="size-12 bg-orange-50 dark:bg-orange-900/20 p-2.5 rounded-2xl text-[#FE8E0A] flex items-center justify-center">
                  <Lock class="size-6" />
                </div>
                <div>
                  <h2 class="text-xl font-bold text-gray-900 dark:text-white">Security Update</h2>
                  <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium uppercase tracking-widest">Update your access key</p>
                </div>
              </div>

              <!-- Status Messages -->
              <div v-if="statusMessage" 
                :class="[
                  'p-5 rounded-3xl flex items-center gap-4 animate-in fade-in slide-in-from-top-2',
                  statusMessage.type === 'success' ? 'bg-green-50 dark:bg-green-900/10 text-green-700 dark:text-green-300 border border-green-100 dark:border-green-800/50' : 'bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-300 border border-red-100 dark:border-red-800/50'
                ]"
              >
                <div :class="[
                  'size-10 rounded-full flex items-center justify-center shrink-0',
                  statusMessage.type === 'success' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                ]">
                  <CheckCircle2 v-if="statusMessage.type === 'success'" class="size-5" />
                  <AlertCircle v-else class="size-5" />
                </div>
                <p class="text-sm font-bold">{{ statusMessage.text }}</p>
              </div>

              <!-- Password Fields -->
              <div class="grid grid-cols-1 gap-8 max-w-2xl">
                <!-- Current Password -->
                <div class="space-y-3">
                  <div class="flex items-center justify-between px-1">
                    <label class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Current Password</label>
                  </div>
                  <div class="relative group">
                    <Lock class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#FE8E0A] transition-colors" />
                    <input
                      v-model="formData.currentPassword"
                      :type="showCurrentPassword ? 'text' : 'password'"
                      class="w-full pl-11 pr-12 py-4 rounded-2xl border border-gray-100 dark:border-zinc-800 dark:bg-[#0a0a0a] dark:text-white focus:ring-4 focus:ring-[#FE8E0A]/10 focus:border-[#FE8E0A] outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 font-medium"
                      placeholder="Enter current password"
                    >
                    <button 
                      @click="showCurrentPassword = !showCurrentPassword"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FE8E0A] transition-colors p-1"
                    >
                      <Eye v-if="!showCurrentPassword" class="size-5" />
                      <EyeOff v-else class="size-5" />
                    </button>
                  </div>
                </div>

                <!-- New Password -->
                <div class="space-y-3">
                  <div class="flex items-center justify-between px-1">
                    <label class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">New Password</label>
                  </div>
                  <div class="relative group">
                    <ShieldCheck class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#FE8E0A] transition-colors" />
                    <input
                      v-model="formData.newPassword"
                      :type="showNewPassword ? 'text' : 'password'"
                      class="w-full pl-11 pr-12 py-4 rounded-2xl border border-gray-100 dark:border-zinc-800 dark:bg-[#0a0a0a] dark:text-white focus:ring-4 focus:ring-[#FE8E0A]/10 focus:border-[#FE8E0A] outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 font-medium"
                      placeholder="Enter new password"
                    >
                    <button 
                      @click="showNewPassword = !showNewPassword"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FE8E0A] transition-colors p-1"
                    >
                      <Eye v-if="!showNewPassword" class="size-5" />
                      <EyeOff v-else class="size-5" />
                    </button>
                  </div>
                </div>

                <!-- Confirm Password -->
                <div class="space-y-3">
                  <div class="flex items-center justify-between px-1">
                    <label class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Confirm New Password</label>
                  </div>
                  <div class="relative group">
                    <ShieldCheck class="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#FE8E0A] transition-colors" />
                    <input
                      v-model="formData.confirmPassword"
                      :type="showConfirmPassword ? 'text' : 'password'"
                      class="w-full pl-11 pr-12 py-4 rounded-2xl border border-gray-100 dark:border-zinc-800 dark:bg-[#0a0a0a] dark:text-white focus:ring-4 focus:ring-[#FE8E0A]/10 focus:border-[#FE8E0A] outline-none transition-all placeholder:text-gray-300 dark:placeholder:text-gray-600 font-medium"
                      placeholder="Confirm new password"
                    >
                    <button 
                      @click="showConfirmPassword = !showConfirmPassword"
                      class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FE8E0A] transition-colors p-1"
                    >
                      <Eye v-if="!showConfirmPassword" class="size-5" />
                      <EyeOff v-else class="size-5" />
                    </button>
                  </div>
                  <p v-if="formData.confirmPassword && formData.newPassword !== formData.confirmPassword" class="text-xs text-red-500 font-black uppercase tracking-wider pl-1">
                    Passwords do not match
                  </p>
                </div>

                <!-- Submit Button -->
                <div class="pt-4">
                  <button
                    @click="handleUpdatePassword"
                    :disabled="!isFormValid || isLoading"
                    class="w-full sm:w-64 bg-[#FE8E0A] hover:bg-[#e67e00] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4.5 rounded-[1.5rem] font-black uppercase tracking-widest text-sm transition-all shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 active:scale-95 !text-white"
                  >
                    <span v-if="!isLoading">Save Password</span>
                    <span v-else class="flex items-center gap-2">
                       Updating...
                    </span>
                    <ChevronRight v-if="!isLoading" class="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar Widgets -->
          <div class="lg:col-span-12 xl:col-span-4 space-y-6">
            <!-- Password Requirements -->
            <div class="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[2.5rem] p-8 shadow-sm">
              <h3 class="text-lg font-bold text-[#FE8E0A] mb-1">Password Guide</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">Follow these to make your account secure</p>
              
              <ul class="space-y-4">
                <li v-for="req in requirements" :key="req" class="flex items-center gap-3 group">
                  <div class="size-6 rounded-full bg-gray-50 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
                    <CheckCircle2 class="size-3.5 text-gray-300 dark:text-gray-600 transition-colors" />
                  </div>
                  <span class="text-sm font-semibold text-gray-600 dark:text-gray-300">{{ req }}</span>
                </li>
              </ul>
            </div>

            <!-- Security Tips -->
            <div class="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-[2.5rem] p-8 shadow-sm">
              <h3 class="text-lg font-bold text-[#FE8E0A] mb-1">Security Tips</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium">Protect your data and property listings</p>
              
              <div class="space-y-8">
                <div v-for="tip in securityTips" :key="tip.title" class="flex gap-4 group">
                  <div class="size-11 shrink-0 bg-gray-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all border border-transparent group-hover:border-blue-100 dark:group-hover:border-blue-900/30">
                    <component :is="tip.icon" class="size-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-1">{{ tip.title }}</h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{{ tip.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
