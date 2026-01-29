<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const authMode = ref<'login' | 'register'>('register')

const toggleMode = () => {
  authMode.value = authMode.value === 'login' ? 'register' : 'login'
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>

    <DialogContent class="sm:max-w-250 min-h-[70vh] max-h-125 p-0 overflow-hidden bg-white dark:bg-[#212121]">
      <div class="flex w-full h-full">
        <div class="w-full h-full hidden md:block">
          <div class="h-full w-full bg-[url('/loginformpic.jpeg')] bg-cover bg-center"></div>
        </div>

        <div class="flex flex-col items-center h-full w-full py-4 overflow-y-auto custom-scrollbar">
          
          <template v-if="authMode === 'register'">
            <div class="pt-12 pb-3 text-4xl font-bold text-[#4e4e4e] dark:text-[#fafafa]">Register</div>
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
                  <Label for="terms" class="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I have read and accept the Terms and Privacy Policy
                  </Label>
                </div>
              </div>
              <Button class="w-full py-6 font-semibold bg-[#fe8e0a] hover:bg-[#e07d08]">Register</Button>
            </form>

            <div class="w-full px-8 flex items-center justify-center gap-1 mt-auto pb-4">
              Already have an account?
              <button @click="toggleMode" class="text-[#fe8e0a] font-semibold hover:underline cursor-pointer">
                Login Here!
              </button>
            </div>
          </template>

          <template v-else>
            <div class="pt-12 pb-3 text-4xl font-bold text-[#4e4e4e] dark:text-[#fafafa]">Login</div>
            <form @submit.prevent class="w-full px-8 gap-8 flex flex-col py-12">
              <div class="grid gap-6">
                <div class="grid gap-2">
                  <Label for="login-email">Email</Label>
                  <Input id="login-email" type="email" class="py-6" />
                </div>
                <div class="grid gap-2">
                  <Label for="login-password">Password</Label>
                  <Input id="login-password" type="password" class="py-6" />
                </div>
              </div>
              <button type="button" class="text-left text-sm text-[#fe8e0a] hover:underline cursor-pointer">
                Forgot Password?
              </button>
              <Button class="w-full py-6 font-semibold bg-[#fe8e0a] hover:bg-[#e07d08]">Log In</Button>
            </form>

            <div class="w-full px-8 flex items-center justify-center gap-1 mt-auto pb-4">
              Don't have an account?
              <button @click="toggleMode" class="text-[#fe8e0a] font-semibold hover:underline cursor-pointer">
                Register Here!
              </button>
            </div>
          </template>

        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>