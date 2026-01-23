<script setup lang="ts">
interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'page-change': [page: number]
}>()

const pages = computed(() => {
  const pages = []
  const maxVisible = 5
  
  if (props.totalPages <= maxVisible) {
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i)
    }
  } else {
    if (props.currentPage <= 3) {
      for (let i = 1; i <= 4; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(props.totalPages)
    } else if (props.currentPage >= props.totalPages - 2) {
      pages.push(1)
      pages.push('...')
      for (let i = props.totalPages - 3; i <= props.totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(props.totalPages)
    }
  }
  
  return pages
})

const changePage = (page: number | string) => {
  if (typeof page === 'number') {
    emit('page-change', page)
  }
}
</script>

<template>
  <div class="flex justify-center items-center gap-2 mt-8">
    <!-- Previous Button -->
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
      class="h-10 w-10 p-0"
    >
      <Icon name="lucide:chevron-left" />
    </Button>
    
    <!-- Page Numbers -->
    <Button
      v-for="page in pages"
      :key="page"
      :variant="page === currentPage ? 'default' : 'outline'"
      size="sm"
      :disabled="page === '...'"
      @click="changePage(page)"
      class="h-10 w-10 p-0"
    >
      {{ page }}
    </Button>
    
    <!-- Next Button -->
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
      class="h-10 w-10 p-0"
    >
      <Icon name="lucide:chevron-right" />
    </Button>
  </div>
</template>
