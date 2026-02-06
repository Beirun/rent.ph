<script setup lang="ts">
import { ref, computed } from 'vue'
import { 
  FileText, 
  Download, 
  Search, 
  QrCode, 
  Clock, 
  Info,
  ExternalLink,
  ChevronRight
} from 'lucide-vue-next'

const searchQuery = ref('')

const documents = [
  {
    id: 1,
    title: 'RAPA (NEW)',
    description: 'This document is a permit that must be signed by the property owner, allowing the Rent Managers to legally market the property for rent.',
    updatedAt: 'September 22, 2025',
    isNew: true,
  },
  {
    id: 2,
    title: 'Authorization to Market Property for Rent (NEW)',
    description: 'This document serves as a formal authorization from the property owner, granting a designated Rent Manager the right to market, promote, and lease the specified property.',
    updatedAt: 'September 22, 2025',
    isNew: true,
  },
  {
    id: 3,
    title: 'Rentph Commission Agreement (RCA)',
    description: 'This document must be signed by the property owner so that the Rent Managers can receive their commission once they have successfully provided a tenant for the property.',
  },
  {
    id: 4,
    title: 'Lease Contract',
    description: 'This document contains the terms and regulations set by the property owner. Once signed by the tenant, it signifies that the tenant has read and agreed to all the stated terms and regulations.',
  },
  {
    id: 5,
    title: 'Inventory List',
    description: 'This document is used by the Rent Managers to record the contents of the property owner\'s unit.',
  },
  {
    id: 6,
    title: 'Listing Checklist',
    description: 'This checklist is used for commercial properties such as warehouses, office spaces, and buildings. It collects detailed information about the property before uploading the listing.',
  },
  {
    id: 7,
    title: 'Rentph Inquiry Form (Commercial)',
    description: 'These forms are used by the Rent Managers to gather information from prospective clients and identify their ideal property.',
  },
  {
    id: 8,
    title: 'Rentph Inquiry Form (Residential)',
    description: 'These forms are used by the Rent Managers to gather information from prospective clients and identify their ideal property.',
  },
  {
    id: 9,
    title: 'Rental Property Information Sheet (Commercial)',
    description: 'This document is used for commercial properties such as warehouses, office spaces, and buildings. It collects detailed information about the property before uploading the listing.',
  },
  {
    id: 10,
    title: 'Rental Property Information Sheet (Residential)',
    description: 'This document is used for residential properties. It collects detailed information about the property before uploading the listing.',
  },
  {
    id: 11,
    title: 'Tenant Information Sheet',
    description: 'This document is used by the Rent Manager to screen prospective clients or tenants before transfer.',
  },
  {
    id: 12,
    title: 'Rent Commission Report Slip',
    description: 'This document is a Rent.ph Rent Commission Report Slip, used for documenting rental transaction details and commission remittance. This form ensures transparency and proper tracking of rental commissions handled through Rent.ph.',
  },
  {
    id: 13,
    title: 'Short Term Agreement',
    description: 'This document is a Short-Term Residential Lease Agreement, used for formalizing a rental arrangement between a property owner (Lessor) and a tenant (Lessee) in the Philippines. This form ensures clarity and legal protection for short-term residential leasing arrangements.',
  },
  {
    id: 14,
    title: 'LETTER OF PROPOSAL',
    description: 'A letter of introduction to yourself as a Rent.ph Rent Manager and formally propose your services to help lease and manage a property.',
  },
  {
    id: 15,
    title: 'LETTER OF INTENT TO LEASE',
    description: 'A letter to inform the property owner that there is a potential tenant interested in renting their property and to ask for permission to proceed with rental discussions.',
  },
  {
    id: 16,
    title: 'Partner Agents Commission Agreement',
    description: 'This document is a Commission Sharing Agreement between two licensed real estate practitioners (or a broker and a referring party). The agreement specifies transaction details, percentage shares, and effectivity until the release of commission.',
  },
  {
    id: 17,
    title: 'Lease of Agreement (Commercial Property)',
    description: 'This contract is between a landlord and tenant outlining the terms and conditions for renting a commercial space such as an office, warehouse, or retail store. It ensures both parties’ rights and responsibilities are clearly defined and legally protected.',
  },
  {
    id: 18,
    title: 'Acknowledgment Receipt',
    description: 'A document that serves as proof that money, keys, or documents have been received by a property owner, tenant, or rent manager. (Have a copy for each party)',
    updatedAt: 'September 22, 2025',
  },
  {
    id: 19,
    title: 'Property Management Service Agreement',
    description: 'Is a contract between a Property Owner and a Rent Manager that outlines responsibilities more than marketing, tenant screening, rent collection, and property upkeep, including fees and terms of service. This will include services in the contract and agreements if the said property.',
    updatedAt: 'September 22, 2025',
  },
  {
    id: 20,
    title: 'Rent.ph Billing Statement',
    description: 'Is an official document that summarizes the charges, payments, and outstanding balances associated with services provided by RENT.PH. It details the billing period, itemized services or subscriptions, applicable fees, and total amount due, serving as a clear record for accounting and payment verification purposes.',
    updatedAt: 'December 15, 2025',
  },
]

const filteredDocuments = computed(() => {
  if (!searchQuery.value) return documents
  const query = searchQuery.value.toLowerCase()
  return documents.filter(doc => 
    doc.title.toLowerCase().includes(query) || 
    doc.description.toLowerCase().includes(query)
  )
})
</script>

<template>
  <NuxtLayout name="dashboard">
    <div class="p-4 md:p-8 min-h-screen bg-white dark:bg-[#0a0a0a]">
      <!-- Header Section -->
      <div class="max-w-400 mx-auto mb-10">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-3xl font-bold text-[#FE8E0A] uppercase tracking-tight">Downloadables</h1>
        </div>

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100 dark:border-zinc-800">
          <div class="space-y-1">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-[#fafafa] tracking-tight">
              Rent.ph Agreements and Contracts Description
            </h2>
            <p class="text-base text-gray-500 dark:text-gray-400 font-medium max-w-2xl leading-relaxed italic">
              Essential documents and forms for property management and client services
            </p>
          </div>
          
          <!-- Search Bar -->
          <div class="relative w-full md:w-80 group">
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400 group-focus-within:text-[#FE8E0A] transition-colors" />
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search documents..." 
              class="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FE8E0A]/20 dark:focus:ring-[#FE8E0A]/20 transition-all shadow-sm"
            />
          </div>
        </div>

        <!-- Welcome Banner -->
        <div class="mt-8 p-6 bg-gradient-to-r from-[#FE8E0A] to-[#ffaa45] rounded-2xl shadow-lg shadow-orange-500/10 text-white relative overflow-hidden">
          <div class="relative z-10 flex items-center gap-4">
            <div class="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
              <Info class="size-8 !text-white" />
            </div>
            <div>
              <h2 class="text-xl font-bold !text-white">Welcome to your Resource Center</h2>
              <p class="text-white/90 font-medium !text-white">These standardized forms ensure consistency and professionalism in all client interactions.</p>
            </div>
          </div>
          <!-- Decorative Background Elements -->
          <div class="absolute -right-10 -top-10 size-40 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute -left-10 -bottom-10 size-40 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <!-- Documents Grid -->
      <div v-if="filteredDocuments.length" class="max-w-400 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        <div 
          v-for="doc in filteredDocuments" 
          :key="doc.id"
          class="group bg-white dark:bg-[#1a1b1e] rounded-[2rem] p-6 border-2 border-gray-50 dark:border-gray-800 hover:border-[#FE8E0A]/30 dark:hover:border-[#FE8E0A]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col relative"
        >
          <!-- Document Icon & New Tag -->
          <div class="flex items-start justify-between mb-6">
            <div class="size-14 bg-gray-50 dark:bg-gray-800/50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
              <FileText class="size-8 text-[#FE8E0A]" />
            </div>
            <div v-if="doc.isNew" class="bg-orange-100 dark:bg-orange-900/30 text-[#FE8E0A] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-orange-200 dark:border-orange-800/50">
              New
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 space-y-3">
            <h3 class="text-xl font-bold text-gray-900 dark:text-[#fafafa] leading-tight group-hover:text-[#FE8E0A] transition-colors">
              {{ doc.title }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
              {{ doc.description }}
            </p>
          </div>

          <!-- Meta Data -->
          <div class="mt-6 pt-6 border-t border-gray-50 dark:border-gray-800 flex flex-col gap-4">
            <div v-if="doc.updatedAt" class="flex items-center gap-2 text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
              <Clock class="size-3" />
              Updated: {{ doc.updatedAt }}
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
              <button class="flex-1 bg-gray-900 dark:bg-[#FE8E0A] !text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-black/5 dark:shadow-orange-500/10 active:scale-95">
                <Download class="size-4 !text-white" />
                Download
              </button>
              
              <!-- Scan to Download Placeholder -->
              <button 
                title="Scan to Download"
                class="size-12 bg-gray-50 dark:bg-gray-800 flex items-center justify-center rounded-xl text-gray-400 hover:text-[#FE8E0A] hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all border border-transparent hover:border-orange-100 dark:hover:border-orange-800/50"
              >
                <QrCode class="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="max-w-400 mx-auto flex flex-col items-center justify-center py-20 text-center">
        <div class="size-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <Search class="size-10 text-gray-400" />
        </div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">No documents found</h3>
        <p class="text-gray-500 dark:text-gray-400">Try adjusting your search terms to find what you're looking for.</p>
        <button 
          @click="searchQuery = ''"
          class="mt-6 text-[#FE8E0A] font-bold hover:underline underline-offset-4"
        >
          Clear search
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 10px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background: #3f3f46;
}
</style>
