<script setup lang="ts">
import type { NewsItem } from '~/models/blog'

const blogStore = useBlogStore()
const latestBlog = ref<NewsItem | null>(null)
onMounted(async () => {
  await blogStore.getBlogs(1, 4)
  latestBlog.value = blogStore.blogs[0] as NewsItem
})

const nexPage = async (page: string) => {
  await blogStore.getBlogs(page, 4)
}
</script>
<template>
  <div class="w-screen min-h-screen flex flex-col overflow-hidden">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <div class="w-screen h-screen bg-[url(/blogIndexBG.png)] dark:bg-[url(/blogIndexBGDark.png)] bg-no-repeat bg-cover fixed -z-10"></div>
    <div id="blogsContainer">
      <NewsHero />
      <NewsHeaderSkeleton v-if="blogStore.loading" />
      <NewsHeader v-else v-bind="latestBlog!" />

      <NewsBlogsSkeleton v-if="blogStore.loading" />
      <NewsBlogs v-else :blogs="blogStore.blogs" @next-page="nexPage" />
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
