<script setup lang="ts">
import PartnersAndSponsors from '~/components/partnersAndSponsors.vue'
import Testimonials from '~/components/testimonials.vue'
</script>
<template>
    <div class="w-screen min-h-screen">
        <ClientOnly>
            <Navbar />
        </ClientOnly>
        <div>
            <AboutusHero />
            <AboutStorySection />
            <AboutCaresSection />
            <testimonials />
        </div>git

        <ClientOnly>
            <Footer />
        </ClientOnly>
    </div>
</template>
