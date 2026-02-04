<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
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
  Moon,
  Sun,
  NotebookTabs,
  LocateFixed,
  ExternalLink,
  TrendingUpDown,
  Download,
  IdCard,
  KeyRound,
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

const handleLogout = () => {
  navigateTo('/')
}
</script>

<template>
  <Sidebar variant="inset" collapsible="icon" class="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
    <SidebarHeader class="pt-6">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" class="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg transition-colors duration-200">
            <DashboardLogo />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent class="pt-6">
      <SidebarGroup>
        <SidebarMenu class="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton as-child tooltip="Home" :class="[
              'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11',
              isActiveRoute('/dashboard') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
            ]">
              <NuxtLink to="/dashboard">
                <Home :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard') }" />
                <span>Home</span>
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>

      <!-- Personal Settings Group -->
      <SidebarGroup>
        <SidebarGroupLabel>Personal Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu class="space-y-1">
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Inbox" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/inbox') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/inbox">
                  <Inbox :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/inbox') }" />
                  <span>Inbox</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Edit Profile" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/profile/edit') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/profile/edit">
                  <User :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/profile/edit') }" />
                  <span>Edit Profile</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Downloadables" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/downloadables') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/downloadables">
                  <Download :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/downloadables') }" />
                  <span>Downloadables</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Business Card" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/business-card') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/business-card">
                  <IdCard :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/business-card') }" />
                  <span>Business Card</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Change Password" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/change-password') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/change-password">
                  <KeyRound :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/change-password') }" />
                  <span>Change Password</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <!-- Rent Manager Tools Group -->
      <SidebarGroup>
        <SidebarGroupLabel>Rent Manager Tools</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu class="space-y-1">
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="My Listings" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/listings') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/listings">
                  <NotebookTabs :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/listings') }" />
                  <span>My Listings</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Rental Tracking" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/tracking') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/tracking">
                  <LocateFixed :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/tracking') }" />
                  <span>Rental Tracking</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Share Blogs" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/share-blogs') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/share-blogs">
                  <ExternalLink :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/share-blogs') }" />
                  <span>Share Blogs</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as-child tooltip="Rent Estimate" :class="[
                'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-10',
                isActiveRoute('/dashboard/estimate') ? 'bg-gray-100 dark:bg-gray-800 font-medium text-[#FE8E0A] dark:text-[#FE8E0A]' : ''
              ]">
                <NuxtLink to="/dashboard/estimate">
                  <TrendingUpDown :class="{ 'text-[#FE8E0A]': isActiveRoute('/dashboard/estimate') }" />
                  <span>Rent Estimate</span>
                </NuxtLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter class="pb-6">
      <SidebarMenu>
        <!-- Dark Mode Toggle as Menu Item -->
        <SidebarMenuItem>
          <SidebarMenuButton 
            tooltip="Toggle Theme"
            @click="changeMode"
            class="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11"
          >
            <Moon v-if="colorMode.preference === 'light'" />
            <Sun v-else />
            <span>{{ colorMode.preference === 'light' ? 'Dark Mode' : 'Light Mode' }}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton tooltip="User Account" class="hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors duration-200 h-11">
                <User2 class="w-5 h-5 mr-3 shrink-0" /> 
                <span class="truncate">Username</span>
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
              <DropdownMenuItem 
                class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 cursor-pointer"
                @click="handleLogout"
              >
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
