<script setup lang="ts">
// import IntegratedNews from '~/components/newsComponents/IntegratedNews.vue';
</script>

<template>
    <ClientOnly>
        <Navbar />
    </ClientOnly>
    <div class="px-12" >
        <NewsComponentsIntegratedNews />
    </div>
    <div class="pt-15">
        <ClientOnly>
            <Backlinks />
        </ClientOnly>
    </div>
    <ClientOnly>
        <Footer />
    </ClientOnly>
</template>