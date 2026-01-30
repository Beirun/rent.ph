<script setup lang="ts">
</script>
<template>
  <div class="w-screen min-h-screen flex flex-col overflow-hidden">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <div class="w-screen h-screen bg-[url(/blogIndexBG.png)] bg-no-repeat bg-cover fixed -z-10"></div>
    <div id="blogsContainer">
      <NewsHero />
      <NewsHeader />
      <NewsBlogs />
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
