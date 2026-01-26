<script setup lang="ts">
const blogs = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
]
</script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <div>
      <NewsHero />
      <NewsHeader />
      <NewsBlogs v-for="blog in blogs"
      :key="blog.id"
      v-bind="blog"
      orientation="vertical"/>
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
