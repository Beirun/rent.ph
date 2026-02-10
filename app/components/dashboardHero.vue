<script setup lang="ts">

const currentView = ref('map')
const searchQuery = ref('')

const stats = [
  {
    label: 'Active Listing',
    value: 60,
    change: '+15%',
    changePositive: true,
    subtitle: '52 in the last week'
  },
  {
    label: 'Total Reviews',
    value: 25,
    change: '+2%',
    changePositive: true,
    subtitle: '24 in the last week'
  },
  {
    label: 'Total views',
    value: 18,
    change: '+25%',
    changePositive: true,
    subtitle: '14 in the last week'
  },
  {
    label: 'Total Properties',
    value: 18,
    change: '+25%',
    changePositive: true,
    subtitle: '14 in the last week'
  },
  {
    label: 'Total Active',
    value: 18,
    change: '+25%',
    changePositive: true,
    subtitle: '14 in the last week'
  },
  {
    label: 'Total Rented',
    value: 18,
    change: '+25%',
    changePositive: true,
    subtitle: '14 in the last week'
  },
  {
    label: 'Total Hide',
    value: 18,
    change: '+25%',
    changePositive: true,
    subtitle: '14 in the last week'
  },

]

const weekData = [
  { day: 'Monday', value: 45, color: 'bg-blue-200 dark:bg-blue-900/30' },
  { day: 'Tuesday', value: 30, color: 'bg-blue-200 dark:bg-blue-900/30' },
  { day: 'Wednesday', value: 85, color: 'bg-[#1b4fb5] dark:bg-[#2b68df]' },
  { day: 'Thursday', value: 60, color: 'bg-blue-200 dark:bg-blue-900/30' },
  { day: 'Friday', value: 40, color: 'bg-blue-200 dark:bg-blue-900/30' },
]

const actions = [
  {
    icon: 'lucide:user-round-pen',
    title: 'Edit Profile',
    subtitle: 'Update your information and preferences',
    button: 'Customized',
  },
  {
    icon: 'lucide:inbox',
    title: 'My Inbox',
    subtitle: 'Respond to your client inquiries',
    button: 'Import',
  },
  {
    icon: 'lucide:arrow-big-down-dash',
    title: 'Downloadables',
    subtitle: 'Ready-to-use forms for managers',
    button: 'Installed',
    buttonVariant: 'secondary'
  },
  {
    icon: 'lucide:id-card',
    title: 'Business Card',
    subtitle: 'Create your personal business card',
  },
  {
    icon: 'lucide:rotate-ccw-key',
    title: 'Change Password',
    subtitle: 'Create your personal business card',
  },
]


const managerActions = [
  {
    icon: 'lucide:notebook-tabs',
    title: 'My Listings',
    subtitle: 'Manager my properties',
    button: 'Customized',
    buttonVariant: 'secondary'
  },
  {
    icon: 'lucide:locate-fixed',
    title: 'Rental Tracking',
    subtitle: 'Track payments and property updates',
    button: 'Import',
    buttonIcon: 'lucide:download'
  },
  {
    icon: 'lucide:external-link',
    title: 'Share Blogs',
    subtitle: 'Share our latest blogs and news',
    button: 'Installed',
    buttonVariant: 'secondary'
  },
  {
    icon: 'lucide:trending-up-down',
    title: 'Rent Estimate',
    subtitle: 'Get and instant estimate to your rental price',
    button: 'Invite'
  },
]


const projects = [
  { name: 'Dopamine', progress: 81, value: 365, icon: 'lucide:circle-dot' },
  { name: 'Citable', progress: 81, value: 25, icon: 'lucide:file-text' },
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#0a0a0a] p-4 md:p-8">
    <div class="max-w-7xl">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-bold text-[#FE8E0A] uppercase tracking-tight">Overview</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-8 items-start">
        
        <div class="lg:col-span-4 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div v-for="stat in stats" :key="stat.label"
              class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ stat.label }}</p>
              <div class="flex items-baseline gap-2 mb-1">
                <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</p>
                <span class="text-sm font-medium text-green-600 dark:text-green-400">{{ stat.change }}</span>
              </div>
              <p class="text-xs text-gray-500">{{ stat.subtitle }}</p>
            </div>
          </div>

          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
            <div class="p-4 border-b border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex items-center gap-2 p-1 bg-gray-100 dark:bg-zinc-800 rounded-lg w-fit">
                <button @click="currentView = 'map'" :class="[
                  'px-4 py-1.5 text-sm font-medium rounded-md transition-all',
                  currentView === 'map' ? 'bg-white dark:bg-zinc-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500'
                ]">Map View</button>
                <button @click="currentView = 'list'" :class="[
                  'px-4 py-1.5 text-sm font-medium rounded-md transition-all',
                  currentView === 'list' ? 'bg-white dark:bg-zinc-700 shadow-sm text-gray-900 dark:text-white' : 'text-gray-500'
                ]">List View</button>
              </div>

              <div class="relative flex-1 max-w-sm">
                <Icon name="lucide:search" class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input v-model="searchQuery" type="text" placeholder="Search locations..."
                  class="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1b4fb5]/20 dark:focus:ring-[#2b68df]/20 transition-all shadow-sm" />
              </div>
            </div>

            <div class="h-150 w-full">
              <div v-if="currentView === 'map'" class="h-full w-full relative">
                <ClientOnly>
                  <Map :center="[123.8854, 10.3157]" :zoom="12" class="h-full w-full" />
                  <template #fallback>
                    <div class="flex h-full w-full items-center justify-center bg-gray-50 dark:bg-zinc-800/50">
                      <Icon name="lucide:loader-2" class="size-6 animate-spin text-gray-400" />
                    </div>
                  </template>
                </ClientOnly>
              </div>

              <div v-else class="h-full p-6 space-y-4 overflow-y-auto bg-gray-50/50 dark:bg-black/20">
                <div class="flex items-center justify-between mb-4">
                   <button class="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-zinc-700 rounded-lg text-xs font-medium dark:text-gray-300 bg-white dark:bg-zinc-900">
                    <Icon name="lucide:filter" class="size-3" /> Filter Properties
                  </button>
                </div>
                <PropertiesAndListings />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-2 space-y-6 sticky top-8 h-fit">
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
            <h3 class="text-lg font-bold text-[#FE8E0A] mb-1">Rent Manager Profile</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Manage your profile in one go</p>
            <button class="w-full py-2.5 px-4 cursor-pointer bg-[#1b4fb5] dark:bg-[#2b68df] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#1b4fb5]/20 dark:shadow-black/20">
              <Icon name="lucide:user" class="size-4" /> View Profile
            </button>
            
            <div class="mt-6 space-y-1">
              <div v-for="action in actions" :key="action.title"
                class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-xl cursor-pointer group transition-colors">
                <div class="size-9 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-lg group-hover:bg-white dark:group-hover:bg-zinc-700 shadow-sm">
                  <Icon :name="action.icon" class="size-4.5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-900 dark:text-white leading-none mb-1">{{ action.title }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ action.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
            <h3 class="text-lg font-bold text-[#FE8E0A] mb-1">Rent Manager Tools</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Add Listings with minimal effort</p>
            <button class="w-full py-2.5 px-4 bg-[#FE8E0A] cursor-pointer text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-[#FE8E0A]/20">
              <Icon name="lucide:plus" class="size-4" /> Create Listing
            </button>

            <div class="mt-6 space-y-1">
              <div v-for="managerAction in managerActions" :key="managerAction.title"
                class="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-xl cursor-pointer group transition-colors">
                <div class="size-9 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-lg group-hover:bg-white dark:group-hover:bg-zinc-700 shadow-sm">
                  <Icon :name="managerAction.icon" class="size-4.5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-900 dark:text-white leading-none mb-1">{{ managerAction.title }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ managerAction.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>