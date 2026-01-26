    <script setup lang="ts">
    import navbar from '~/components/navbar.vue'
    import pagination from '~/components/pagination.vue'
    import agentscard from '~/components/agentscard.vue'
    import { number } from 'motion-v'
    const currentPage = ref(1)
    const totalPages = ref(10)

    const handlePageChange = (page: number) => {
        currentPage.value = page
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
                { user: 'John', comment: 'very helpful', rating: 5 },
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
            reviewList: [
                { user: 'Doe', comment: 'very helpful', rating: 5 },
            ],

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
            reviewList: [
                { user: 'Doe', comment: 'very helpful', rating: 5 },
            ],

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
            reviewList: [
                { user: 'Doe', comment: 'very helpful', rating: 5 },
            ],

        },
    ]
</script>

    <template>
        <div class="w-screen min-h-screen">
            <ClientOnly>
                <navbar />
            </ClientOnly>
            <div class="container mx-auto px-4 md:px-10 pt-30 pb-20">
                <h1 class="text-4xl font-semibold mb-8">Rent Managers</h1>
                <ClientOnly>
                    <AgentSearchBar />
                </ClientOnly>

                <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    <agentscard v-for="manager in managers" 
                    :key="manager.id" 
                    v-bind="manager"
                    orientation="vertical"
                    class="w-full" />
                </div>

                <div class="flex justify-center mt-12">
                    <pagination :current-page="currentPage" :total-pages="totalPages" @page-change="handlePageChange" />
                </div>
            </div>
            <ClientOnly>
                <Footer />
            </ClientOnly>
        </div>
    </template>