<script setup lang="ts">
const managerStore = useManagerStore()

onMounted(async () => {
  await managerStore.getManagers(1, 8)
})

const handlePageChange = (page: number) => {
  // currentPage.value = page
  console.log('Changed to page:', page)
}
const managers = [
  {
    id: 1,
    phone: 123456789,
    name: 'Rebecca Ferguson',
    email: 'rebecca@rent.com',
    photo: '/rebecca.png',
    location: 'Downtown, Oak Street',
    status: '613 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 1',
    reviewList: [
      { user: 'John', comment: 'shes very pretty and cool', rating: 5 },
      { user: 'Kobe', comment: 'i love how she treats her customers', rating: 5 },
      { user: 'Bryan', comment: 'She is great at customer service', rating: 5 },
      { user: 'Bryl', comment: '100% reccomend this agent', rating: 5 },
      { user: 'Bernerd', comment: 'very cool very nice', rating: 5 },
    ],
  },
  {
    id: 2,
    phone: 123456789,
    name: 'Tom Cruise',
    email: 'tom@rent.com',
    photo: '/img.png',
    location: 'Manila, PH',
    status: '120 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 2',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 3,
    phone: 123456789,
    name: 'Henry Cavill',
    email: 'henry@rent.com',
    photo: '/javie-gemini.png',
    location: 'Cebu City',
    status: '45 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 3',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 4,
    phone: 123456789,
    name: 'Simon Pegg',
    email: 'simon@rent.com',
    photo: '/elaine-gemini.png',
    location: 'Davao City',
    status: '12 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 4',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 1,
    phone: 123456789,
    name: 'Rebecca Ferguson',
    email: 'rebecca@rent.com',
    photo: '/rebecca.png',
    location: 'Downtown, Oak Street',
    status: '613 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 1',
    reviewList: [
      { user: 'John', comment: 'shes very pretty and cool', rating: 5 },
      { user: 'Kobe', comment: 'i love how she treats her customers', rating: 5 },
      { user: 'Bryan', comment: 'She is great at customer service', rating: 5 },
      { user: 'Bryl', comment: '100% reccomend this agent', rating: 5 },
      { user: 'Bernerd', comment: 'very cool very nice', rating: 5 },
    ],
  },
  {
    id: 2,
    phone: 123456789,
    name: 'Tom Cruise',
    email: 'tom@rent.com',
    photo: '/img.png',
    location: 'Manila, PH',
    status: '120 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 2',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 3,
    phone: 123456789,
    name: 'Henry Cavill',
    email: 'henry@rent.com',
    photo: '/javie-gemini.png',
    location: 'Cebu City',
    status: '45 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 3',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
  {
    id: 4,
    phone: 123456789,
    name: 'Simon Pegg',
    email: 'simon@rent.com',
    photo: '/elaine-gemini.png',
    location: 'Davao City',
    status: '12 Listings',
    reviews: '5 • 12 Reviews',
    about: 'Professional rent manager 4',
    reviewList: [{ user: 'Doe', comment: 'very helpful', rating: 5 }],
  },
]

const categories: Record<string, string> = {
  'Farm Land': '1',
  Condominium: '1951',
  Studio: '730',
  '1 Bedroom': '489',
  '2 Bedroom': '334',
  '3 Bedroom': '70',
  'House and Lot': '1464',
  Apartment: '327',
  'Lot Only': '153',
  'Bed Space': '37',
  'Town House': '94',
  Dormitory: '7',
  'Commercial Spaces': '653',
  'Office Spaces': '254',
  Warehouse: '227',
  'Beach House': '8',
  'Conference Hall': '1',
  'Function Hall': '1',
  'Parking Space': '9',
  Others: '50',
}
</script>

<template>
  <div class="w-screen min-h-screen flex flex-col">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    <div class="flex flex-row w-full mx-5 px-10 pt-30 pb-20 justify-self-center">
      <div
        id="categoriesSection"
        class="w-1/5 h-fit border-1 border-gray-200 rounded-lg bg-white shadow-lg p-10 dark:bg-[#212121] dark:border-gray-800 mb-20"
      >
        <h1 class="font-bold text-2xl dark:text-white">Categories</h1>
        <div class="mt-10">
          <template v-for="(listings, category, index) in categories" :key="category">
            <div class="flex justify-between mt-5">
              <a
                href="#"
                class="text-sm text-gray-600 dark:text-white hover:text-blue-600 transition-colors"
              >
                {{ category }}
              </a>
              <a
                href="#"
                class="text-sm text-gray-600 dark:text-white hover:text-blue-600 transition-colors"
              >
                {{ listings }} Properties
              </a>
            </div>
          </template>
        </div>
      </div>
      <!--------------------------------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="w-4/5">
        <div class="container px-4 md:px-10 pb-20">
          <h1 class="text-4xl font-semibold mb-8">Rent Managers</h1>
          <ClientOnly>
            <AgentSearchBar />
          </ClientOnly>

          <div class="mt-12 flex flex-wrap gap-4 gap-y-5 justify-center">
            <agentscard
              v-for="manager in managerStore.managers"
              :key="manager.id"
              v-bind="manager"
              orientation="vertical"
              class="w-[calc(25%-1rem)]"
            />
          </div>

          <div class="flex justify-center mt-12">
            <pagination
              :current-page="managerStore.pagination?.current_page ?? 1"
              :total-pages="managerStore.pagination?.total ?? 1"
              @page-change="handlePageChange"
            />
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
