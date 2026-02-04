<script setup lang="ts">
import { Calculator, FileText, CreditCard, BarChart3, Share2, TrendingUp } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const tools = [
  {
    icon: Calculator,
    title: 'Rental Calculator',
    description: 'Calculate rental yields and ROI for your properties',
    color: 'bg-[#1b4fb5]',
    action: 'Calculate'
  },
  {
    icon: FileText,
    title: 'Document Templates',
    description: 'Access lease agreements, contracts, and forms',
    color: 'bg-green-500',
    action: 'View Templates'
  },
  {
    icon: CreditCard,
    title: 'Business Card Generator',
    description: 'Create professional digital business cards',
    color: 'bg-purple-500',
    action: 'Create Card'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'View property performance and metrics',
    color: 'bg-[#FE8E0A]',
    action: 'View Analytics'
  },
  {
    icon: Share2,
    title: 'Social Sharing Tools',
    description: 'Share listings across social media platforms',
    color: 'bg-pink-500',
    action: 'Share Now'
  },
  {
    icon: TrendingUp,
    title: 'Market Trends',
    description: 'Get insights on rental market in your area',
    color: 'bg-cyan-500',
    action: 'View Trends'
  }
]

const recentActivities = [
  { action: 'Generated rental agreement', date: '2 hours ago', tool: 'Document Templates' },
  { action: 'Calculated ROI for BGC property', date: '1 day ago', tool: 'Rental Calculator' },
  { action: 'Shared listing on Facebook', date: '2 days ago', tool: 'Social Sharing' },
  { action: 'Viewed market trends', date: '3 days ago', tool: 'Market Trends' }
]
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-6 max-w-7xl min-h-screen bg-white dark:bg-[#0a0a0a]">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-[#FE8E0A] mb-2 uppercase tracking-tight">Rent Manager Tools</h1>
        <p class="text-gray-500 dark:text-gray-400">Powerful tools to manage your rental business efficiently</p>
      </div>

      <!-- Tools Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div
          v-for="tool in tools"
          :key="tool.title"
          class="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <div class="flex items-start justify-between mb-4">
            <div :class="[tool.color, 'p-3 rounded-lg']">
              <component :is="tool.icon" class="w-6 h-6 text-white" />
            </div>
            <Button
              variant="default"
              size="sm"
              class="opacity-0 group-hover:opacity-100 transition-opacity bg-[#1b4fb5] dark:bg-[#2b68df] text-white hover:opacity-90 transition-all font-bold"
            >
              {{ tool.action }}
            </Button>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {{ tool.title }}
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            {{ tool.description }}
          </p>
        </div>
      </div>

      <!-- Recent Activities -->
      <div class="bg-white dark:bg-zinc-900 rounded-lg border border-gray-200 dark:border-zinc-800 p-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h2>
        
        <div class="space-y-4">
          <div
            v-for="(activity, index) in recentActivities"
            :key="index"
            class="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
          >
            <div>
              <p class="text-sm font-medium text-gray-900 dark:text-white">{{ activity.action }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ activity.tool }}</p>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">{{ activity.date }}</span>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <h3 class="text-xl font-bold mb-2">Need Help?</h3>
          <p class="text-blue-100 mb-4 text-sm">Watch video tutorials on how to use these tools effectively</p>
          <Button variant="secondary" size="sm">
            <Icon name="lucide:play-circle" class="w-4 h-4 mr-2" />
            Watch Tutorials
          </Button>
        </div>

        <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <h3 class="text-xl font-bold mb-2">Premium Tools</h3>
          <p class="text-purple-100 mb-4 text-sm">Unlock advanced features with our premium subscription</p>
          <Button variant="secondary" size="sm">
            <Icon name="lucide:star" class="w-4 h-4 mr-2" />
            Upgrade Now
          </Button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
