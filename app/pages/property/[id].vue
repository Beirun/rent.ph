<script setup lang="ts">
    const route = useRoute()
    const { id } = route.params
</script>
<template>
    <div>
        Property {{ id }}
    </div>
</template>

