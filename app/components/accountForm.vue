<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '~/stores/authStore'

const authStore = useAuthStore()
const isDialogOpen = ref(false)
const authMode = ref<'login' | 'register'>('login')
const isLoading = ref(false)
const errorMessage = ref('')

const loginEmail = ref('')
const loginPassword = ref('')

const toggleMode = () => {
  authMode.value = authMode.value === 'login' ? 'register' : 'login'
  errorMessage.value = ''
}

const handleLogin = async () => {
  console.log('Login button clicked')
  console.log('Email:', loginEmail.value)
  console.log('Password:', loginPassword.value)

  // Clear previous errors
  errorMessage.value = ''

  // Basic validation
  if (!loginEmail.value || !loginPassword.value) {
    errorMessage.value = 'Please enter email and password.'
    console.log('Form validation failed')
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(loginEmail.value)) {
    errorMessage.value = 'Please enter a valid email address.'
    console.log('Email validation failed')
    return
  }

  isLoading.value = true

  try {
    console.log('Sending login request...')
    const response = await fetch('https://rent.ph/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginEmail.value,
        password: loginPassword.value,
      }),
    })

    console.log('Response status:', response.status)
    console.log('Response ok:', response.ok)

    const data = await response.json()
    console.log('Full login response data:', JSON.stringify(data, null, 2))
    console.log('Current cookies after response:', document.cookie)

    if (!response.ok) {
      errorMessage.value = data.message || `Login failed (${response.status}). Please try again.`
      console.log('Login failed:', errorMessage.value)
      return
    }

    //const token = data.token || data.data?.token || data.access_token || data.data?.access_token
    const token = useCookie('access_token') //for access_token

    token.value = data.access_token //for access_token
    
    if (token.value) {
      authStore.login(token.value)
      console.log('Token successfully stored in authStore')
    } else {
      console.warn('No token found in response! Checked: data.token, data.data.token, data.access_token')
    }

    console.log('Login successful, navigating to dashboard...')
    isDialogOpen.value = false
    
    // Ensure state is updated before navigation
    await nextTick()
    await navigateTo('/dashboard')
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Network error. Please check your connection and try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="isDialogOpen">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>

    <DialogContent
      class="sm:max-w-250 min-h-[70vh] max-h-125 p-0 overflow-hidden bg-white dark:bg-[#212121]"
    >
      <div class="flex w-full h-full">
        <div class="w-full h-full hidden md:block">
          <div class="h-full w-full bg-[url('/loginformpic.jpeg')] bg-cover bg-center"></div>
        </div>

        <div class="flex flex-col items-center h-full w-full py-4 overflow-y-auto custom-scrollbar">
          <template v-if="authMode === 'register'">
            <div class="pt-12 pb-3 text-4xl font-bold text-[#4e4e4e] dark:text-[#fafafa]">
              Register
            </div>
            <form @submit.prevent class="w-full px-8 gap-6 flex flex-col py-6">
              <div class="grid gap-4">
                <div class="grid gap-2">
                  <Label for="firstname">First Name</Label>
                  <Input id="firstname" name="firstname" class="py-5" />
                </div>
                <div class="grid gap-2">
                  <Label for="lastname">Last Name</Label>
                  <Input id="lastname" name="lastname" class="py-5" />
                </div>
                <div class="grid gap-2">
                  <Label for="reg-email">Email</Label>
                  <Input id="reg-email" name="email" type="email" class="py-5" />
                </div>
                <div class="grid gap-2">
                  <Label for="reg-password">Password</Label>
                  <Input id="reg-password" name="password" type="password" class="py-5" />
                </div>
                <div class="flex items-center gap-2 mt-2">
                  <Checkbox id="terms" />
                  <Label
                    for="terms"
                    class="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have read and accept the Terms and Privacy Policy
                  </Label>
                </div>
              </div>
              <Button class="w-full py-6 font-semibold bg-[#fe8e0a] hover:bg-[#e07d08]"
                >Register</Button
              >
            </form>

            <div class="w-full px-8 flex items-center justify-center gap-1 mt-auto pb-4">
              Already have an account?
              <button
                @click="toggleMode"
                class="text-[#fe8e0a] font-semibold hover:underline cursor-pointer"
              >
                Login Here!
              </button>
            </div>
          </template>

          <template v-else>
            <div class="pt-12 pb-3 text-4xl font-bold text-[#4e4e4e] dark:text-[#fafafa]">
              Login
            </div>
            <form @submit.prevent="handleLogin" class="w-full px-8 gap-8 flex flex-col py-12">
              <div
                v-if="errorMessage"
                class="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded text-sm"
              >
                {{ errorMessage }}
              </div>
              <div class="grid gap-6">
                <div class="grid gap-2">
                  <Label for="login-email">Email</Label>
                  <Input
                    id="login-email"
                    v-model="loginEmail"
                    type="email"
                    class="py-6"
                    :disabled="isLoading"
                    required
                  />
                </div>
                <div class="grid gap-2">
                  <Label for="login-password">Password</Label>
                  <Input
                    id="login-password"
                    v-model="loginPassword"
                    type="password"
                    class="py-6"
                    :disabled="isLoading"
                    required
                  />
                </div>
              </div>
              <button
                type="button"
                class="text-left text-sm text-[#fe8e0a] hover:underline cursor-pointer"
                :disabled="isLoading"
              >
                Forgot Password?
              </button>
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full py-6 font-semibold bg-[#fe8e0a] hover:bg-[#e07d08] rounded-md text-white"
              >
                {{ isLoading ? 'Logging In...' : 'Log In' }}
              </button>
            </form>

            <div class="w-full px-8 flex items-center justify-center gap-1 mt-auto pb-4">
              Don't have an account?
              <button
                @click="toggleMode"
                class="text-[#fe8e0a] font-semibold hover:underline cursor-pointer"
                :disabled="isLoading"
              >
                Register Here!
              </button>
            </div>
          </template>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
