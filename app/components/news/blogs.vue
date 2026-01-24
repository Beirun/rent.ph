<script setup lang="ts">
const currentPage = ref(1)
const totalPages = ref(10)

const handlePageChange = (page: number) => {
  currentPage.value = page
  console.log('Changed to page:', page)
}
</script>
<template>
  <div class="w-screen py-10">
    <div class="flex justify-evenly px-10">
      <NewsCard v-for="_ in new Array(4)"> </NewsCard>
    </div>
    <div class="flex justify-center">
      <pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        @page-change="handlePageChange"
      />
    </div>
  </div>
</template>
