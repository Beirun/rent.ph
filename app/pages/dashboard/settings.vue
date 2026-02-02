<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// No need for definePageMeta, we'll use NuxtLayout instead

const emailNotifications = ref(true)
const smsNotifications = ref(false)
const pushNotifications = ref(true)
const marketingEmails = ref(false)
const twoFactorAuth = ref(false)
const profileVisibility = ref('public')
const language = ref('en')
const timezone = ref('Asia/Manila')
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-6 max-w-5xl min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div class="mb-6">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p class="text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
      </div>

      <div class="space-y-6">
        <!-- Account Settings -->
        <div class="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account Information</h2>
          
          <div class="space-y-4">
            <div class="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" value="john_doe" class="dark:bg-zinc-800 dark:border-zinc-700" />
            </div>

            <div class="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value="john.doe@example.com" class="dark:bg-zinc-800 dark:border-zinc-700" />
            </div>

            <div class="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value="+63 912 345 6789" class="dark:bg-zinc-800 dark:border-zinc-700" />
            </div>

            <Separator class="my-4" />

            <div class="grid gap-2">
              <Label htmlFor="company">Company/Agency</Label>
              <Input id="company" placeholder="Your company name" class="dark:bg-zinc-800 dark:border-zinc-700" />
            </div>

            <div class="grid gap-2">
              <Label htmlFor="license">License Number</Label>
              <Input id="license" placeholder="Real estate license number" class="dark:bg-zinc-800 dark:border-zinc-700" />
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-6">
            <Button variant="outline">Cancel</Button>
            <Button class="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h2>
          
          <div class="space-y-6">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>Email Notifications</Label>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Receive updates about inquiries and messages via email
                </p>
              </div>
              <input type="checkbox" v-model="emailNotifications" class="w-10 h-5" />
            </div>

            <Separator />

            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>SMS Notifications</Label>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Get important alerts sent to your phone
                </p>
              </div>
              <input type="checkbox" v-model="smsNotifications" class="w-10 h-5" />
            </div>

            <Separator />

            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>Push Notifications</Label>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Receive push notifications in your browser
                </p>
              </div>
              <input type="checkbox" v-model="pushNotifications" class="w-10 h-5" />
            </div>

            <Separator />

            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>Marketing Emails</Label>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Receive tips, news, and promotional offers
                </p>
              </div>
              <input type="checkbox" v-model="marketingEmails" class="w-10 h-5" />
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-6">
            <Button variant="outline">Reset to Default</Button>
            <Button class="bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
          </div>
        </div>

        <!-- Password & Security -->
        <div class="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-6 space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Password & Security</h2>
            
            <div class="space-y-4">
              <div class="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" class="dark:bg-zinc-800 dark:border-zinc-700" />
              </div>

              <div class="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" class="dark:bg-zinc-800 dark:border-zinc-700" />
              </div>

              <div class="grid gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" class="dark:bg-zinc-800 dark:border-zinc-700" />
              </div>

              <Button class="bg-blue-600 hover:bg-blue-700">Update Password</Button>
            </div>
          </div>

          <Separator />

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Two-Factor Authentication</h3>
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>Enable 2FA</Label>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Add an extra layer of security to your account
                </p>
              </div>
              <input type="checkbox" v-model="twoFactorAuth" class="w-10 h-5" />
            </div>
          </div>

          <Separator />

          <div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy Settings</h3>
            <div class="grid gap-2">
              <Label>Profile Visibility</Label>
              <Select v-model="profileVisibility">
                <SelectTrigger class="dark:bg-zinc-800 dark:border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="contacts">Contacts Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
            <h3 class="text-lg font-semibold text-red-900 dark:text-red-100 mb-2">Danger Zone</h3>
            <p class="text-sm text-red-700 dark:text-red-300 mb-4">
              Permanently delete your account and all associated data
            </p>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>

        <!-- Display Preferences -->
        <div class="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-6">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Display Preferences</h2>
          
          <div class="space-y-6">
            <div class="grid gap-2">
              <Label>Language</Label>
              <Select v-model="language">
                <SelectTrigger class="dark:bg-zinc-800 dark:border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fil">Filipino</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div class="grid gap-2">
              <Label>Timezone</Label>
              <Select v-model="timezone">
                <SelectTrigger class="dark:bg-zinc-800 dark:border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Asia/Manila">Manila (GMT+8)</SelectItem>
                  <SelectItem value="Asia/Hong_Kong">Hong Kong (GMT+8)</SelectItem>
                  <SelectItem value="Asia/Singapore">Singapore (GMT+8)</SelectItem>
                  <SelectItem value="Asia/Tokyo">Tokyo (GMT+9)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div>
              <Label class="mb-3 block">Currency Display</Label>
              <Select>
                <SelectTrigger class="dark:bg-zinc-800 dark:border-zinc-700">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="php">Philippine Peso (₱)</SelectItem>
                  <SelectItem value="usd">US Dollar ($)</SelectItem>
                  <SelectItem value="eur">Euro (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div>
              <Label class="mb-3 block">Date Format</Label>
              <Select>
                <SelectTrigger class="dark:bg-zinc-800 dark:border-zinc-700">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="flex justify-end gap-2 mt-6">
            <Button variant="outline">Cancel</Button>
            <Button class="bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
