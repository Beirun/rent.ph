<script setup lang="ts">
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
]

const weekData = [
  { day: 'Monday', value: 45, color: 'bg-blue-200 dark:bg-blue-900/30' },
  { day: 'Tuesday', value: 30, color: 'bg-blue-200 dark:bg-blue-900/30' },
  { day: 'Wednesday', value: 85, color: 'bg-blue-600 dark:bg-blue-600' },
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
    <!-- Header -->
    <div class="max-w-350 mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Overview</h1>
        
        <!-- <div class="flex items-center gap-2">
          <button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-2">
            <Icon name="lucide:sliders-horizontal" class="size-4" />
            <span class="hidden sm:inline">Customize</span>
          </button>
          
          <button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors flex items-center gap-2 border border-gray-200 dark:border-zinc-700">
            <Icon name="lucide:calendar" class="size-4" />
            <span>This week</span>
            <Icon name="lucide:chevron-down" class="size-4" />
          </button>
          
          <button class="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
            <Icon name="lucide:more-horizontal" class="size-5" />
          </button>
        </div> -->
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <!-- Left Section: Stats + Chart -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="stat in stats" :key="stat.label"
              class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6">
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">{{ stat.label }}</p>
              <div class="flex items-baseline gap-2 mb-1">
                <p class="text-4xl font-bold text-gray-900 dark:text-white">{{ stat.value }}</p>
                <span class="text-sm font-medium text-green-600 dark:text-green-400">{{ stat.change }}</span>
              </div>
              <p class="text-xs text-gray-500 dark:text-gray-500">{{ stat.subtitle }}</p>
            </div>
          </div>

          <!-- Chart Card -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-1">
                  <img src="https://i.pravatar.cc/32?img=1" class="size-6 rounded-full border-2 border-white dark:border-zinc-900" />
                  <img src="https://i.pravatar.cc/32?img=2" class="size-6 rounded-full border-2 border-white dark:border-zinc-900 -ml-2" />
                  <img src="https://i.pravatar.cc/32?img=3" class="size-6 rounded-full border-2 border-white dark:border-zinc-900 -ml-2" />
                </div>
                <div>
                  <p class="text-sm font-bold text-gray-900 dark:text-white">32 <span class="text-green-600 dark:text-green-400 text-xs">60.29%</span></p>
                  <p class="text-xs text-gray-500 dark:text-gray-500">Tasks completed</p>
                </div>
              </div>
            </div>

            <!-- Bar Chart -->
            <div class="flex items-end justify-between gap-3 h-56">
              <div v-for="data in weekData" :key="data.day" class="flex-1 flex flex-col justify-end items-center gap-2 h-full">
                <div class="w-full rounded-t-xl transition-all duration-500" 
                  :class="data.color"
                  :style="{ height: `${data.value}%` }">
                </div>
                <span class="text-xs text-gray-600 dark:text-gray-400 font-medium">{{ data.day }}</span>
              </div>
            </div>
          </div>

          <!-- Projects Section -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6">
            <div class="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-zinc-800 pb-4">
              <button class="text-sm font-semibold text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-3">Projects</button>
              <button class="text-sm font-semibold text-gray-500 dark:text-gray-400 pb-3">Members</button>
            </div>

            <div class="space-y-4">
              <div v-for="project in projects" :key="project.name" 
                class="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-xl">
                <div class="flex items-center gap-3 flex-1">
                  <Icon :name="project.icon" class="size-5 text-gray-900 dark:text-white" />
                  <span class="font-medium text-gray-900 dark:text-white">{{ project.name }}</span>
                  <div class="flex-1 max-w-xs">
                    <div class="h-2 bg-gray-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-600 rounded-full transition-all" :style="{ width: `${project.progress}%` }"></div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-3 text-sm">
                  <span class="font-semibold text-gray-900 dark:text-white">{{ project.value }}</span>
                  <span class="text-gray-500 dark:text-gray-400">{{ project.progress }}%</span>
                </div>
              </div>
            </div>

            <button class="w-full mt-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
              View all
            </button>
          </div>
        </div>

        <!-- Right Section: Actions + Progress -->
        <div class="space-y-6">
          <!-- Start Project Card -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6">
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Rent Manager Profile</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Manage your profile in one go</p>
            </div>

            <button class="w-full py-2.5 px-4 cursor-pointer bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Icon name="lucide:plus" class="size-4" />
              View Profile
            </button>
          </div>

          <!-- Action Cards -->
          <div class="bg-white dark:bg-zinc-900  border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <div v-for="action in actions" :key="action.title"
              class="flex items-center justify-between hover:bg-gray-100 rounded-md p-2 py-3 border-b  border-gray-100 dark:border-zinc-800 last:border-0">
              <div class="flex items-center gap-3">
                <div class="size-9 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-lg">
                  <Icon :name="action.icon" class="size-4.5 text-gray-900 dark:text-white" />
                </div>
                <div class="cursor-pointer" >
                  <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ action.title }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{{ action.subtitle }}</p>
                </div>
              </div>
 
            </div>
          </div>

        </div>
                <!-- Right Section: Actions + Progress -->
        <div class="space-y-6">
          <!-- Start Project Card -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6">
            <div class="mb-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Rent Manager Tools</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Add your Listing with minimal effort</p>
            </div>

            <button class="w-full py-2.5 px-4 bg-gray-900 cursor-pointer dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <Icon name="lucide:plus" class="size-4" />
              Create Listing
            </button>
          </div>

          <!-- Action Cards -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <div v-for="managerAction in managerActions" :key="managerAction.title"
              class="flex items-center justify-between py-3 hover:bg-gray-100 rounded-md p-2 cursor-pointer border-b border-gray-100 dark:border-zinc-800 last:border-0">
              <div class="flex items-center gap-3">
                <div class="size-9 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-lg">
                  <Icon :name="managerAction.icon" class="size-4.5 text-gray-900 dark:text-white" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-900 dark:text-white">{{ managerAction.title }}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">{{ managerAction.subtitle }}</p>
                </div>
              </div>

            </div>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>