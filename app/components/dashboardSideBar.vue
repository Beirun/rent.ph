<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ref } from 'vue'
import {
  ChevronRight,
  ChevronUp,
  Home,
  Inbox,
  Settings,
  Wrench,
  User,
  User2,
} from 'lucide-vue-next'
import { Button } from '@/components/ui/button'


const profileOpen = ref(false)
const colorMode = useColorMode()
const route = useRoute()

const changeMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

const isActiveRoute = (path: string) => {
  const currentPath = route.path
  if (path === '/dashboard') {
    return currentPath === '/dashboard' || currentPath === '/dashboard/'
  }
  return currentPath.startsWith(path)
}
</script>

<template>
  <Sidebar variant="inset" collapsible="icon" class="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
    <SidebarHeader class="pt-6">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg transition-colors duration-200">
            <DashboardLogo />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent class="pt-6">
      <!-- Dark Mode Switch Centered -->
      <div class="flex justify-center mb-8">
        <button 
          @click="changeMode"
          class="relative w-12 h-12 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors duration-200 flex items-center justify-center"
        >
          <Icon
            v-if="colorMode.preference === 'light'"
            name="radix-icons:moon"
            class="h-5 w-5 text-gray-600 dark:text-gray-400"
          />
          <Icon
            v-else
            name="radix-icons:sun"
            class="h-5 w-5 text-gray-600 dark:text-gray-400"
          />
        </button>
      </div>
      
      <SidebarGroup>
        <SidebarMenu class="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton as-child :class="[
              'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11',
              isActiveRoute('/dashboard') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
            ]">
              <NuxtLink to="/dashboard" class="flex items-center">
                <Home class="w-5 h-5 mr-3" />
                <span>Home</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton as-child @click="profileOpen = !profileOpen" :class="[
              'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11',
              isActiveRoute('/dashboard/profile') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
            ]">
              <button class="flex items-center w-full">
                <User class="w-5 h-5 mr-3" />
                <span>Profile</span>
                <ChevronRight
                  class="ml-auto transition-transform duration-200"
                  :class="{ 'rotate-90': profileOpen }"
                />
              </button>
            </SidebarMenuButton>
            <div v-if="profileOpen" class="mt-1 ml-4">
              <SidebarMenuSub>
                <SidebarMenuItem>
                  <SidebarMenuButton as-child :class="[
                    'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md transition-colors duration-200 h-9 text-sm',
                    isActiveRoute('/dashboard/profile/edit') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
                  ]">
                    <NuxtLink to="/dashboard/profile/edit" class="flex items-center">
                      <span>Edit Profile</span>
                    </NuxtLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenuSub>
            </div>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton as-child :class="[
              'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11',
              isActiveRoute('/dashboard/inbox') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
            ]">
              <NuxtLink to="/dashboard/inbox" class="flex items-center">
                <Inbox class="w-5 h-5 mr-3" />
                <span>Inbox</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton as-child :class="[
              'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11',
              isActiveRoute('/dashboard/settings') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
            ]">
              <NuxtLink to="/dashboard/settings" class="flex items-center">
                <Settings class="w-5 h-5 mr-3" />
                <span>Settings</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton as-child :class="[
              'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11',
              isActiveRoute('/dashboard/tools') ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''
            ]">
              <NuxtLink to="/dashboard/tools" class="flex items-center">
                <Wrench class="w-5 h-5 mr-3" />
                <span>Tools</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter class="pb-6">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton class="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11">
                <User2 class="w-5 h-5 mr-3" /> 
                <span>Username</span>
                <ChevronUp class="ml-auto w-4 h-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" class="w-(--reka-popper-anchor-width) bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <DropdownMenuItem class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
                <span class="text-red-600 dark:text-red-400">Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
