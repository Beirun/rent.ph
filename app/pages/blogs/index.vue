<script setup lang="ts">
const blogStore = useBlogStore()

onMounted(async () => {
  await blogStore.getBlogs(1, 5)
})
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
      <NewsHeader v-else v-bind="blogStore.blogs[0]!" />

      <NewsBlogsSkeleton v-if="blogStore.loading" />
      <NewsBlogs v-else :blogs="blogStore.blogs.slice(1)" />
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
