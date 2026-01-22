<script setup lang="ts">
import propertySearchBar from '~/components/propertySearchBar.vue'
import navbar from '~/components/navbar.vue'
</script>

<template>
    <div class="h-[95vh] bg-top bg-cover w-full flex flex-col items-center gap-5">
        <div class="w-full">
            <ClientOnly>
                <navbar />
            </ClientOnly>
        </div>
        <div class="flex-grow flex items-center justify-center mx-100">
            <div>
                <h1>Property for Rent</h1>
            </div>
            <ClientOnly>
                <propertySearchBar />
            </ClientOnly>
        </div>
        
    </div>
</template>