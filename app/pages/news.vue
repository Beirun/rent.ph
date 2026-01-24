<script setup lang="ts"></script>
<template>
  <div class="w-screen min-h-screen">
    <ClientOnly>
      <Navbar />
    </ClientOnly>
    <div>
      <NewsHero />
      <NewsHeader />
      <NewsBlogs />
    </div>

    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
