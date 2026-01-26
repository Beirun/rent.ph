<script setup lang="ts">
const currentPage = ref(1)
const totalPages = ref(10)

const handlePageChange = (page: number) => {
  currentPage.value = page
  console.log('Changed to page:', page)
}

interface Props {
  id: string | number
}

const props = withDefaults(defineProps<Props>(), {

})

const goToBlog = () => {
  navigateTo({
    path: `/blogs/${props.id}`,
  })

}
</script>
<template>
  <div class="w-screen py-5 md:py-10 flex flex-col items-center">
    <div class="flex text-3xl font-semibold w-9/10 py-8 md:py-10">All Blogs</div>
    <div class="flex xl:flex-row flex-col w-9/10 gap-6 md:gap-10">
      <NewsCard v-for="_ in new Array(4)" @click="goToBlog"> </NewsCard>
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
