<script setup lang="ts">
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar'

useHead({
  title: 'Dashboard - Rent.ph',
  meta: [
    { name: 'description', content: 'Rent management dashboard' }
  ]
})
</script>

<template>
  <SidebarProvider>
    <DashboardSideBar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <div class="h-6 w-px bg-gray-200 dark:bg-gray-700" />
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h2>
        </div>
      </header>
      <main class="flex flex-1 flex-col">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
