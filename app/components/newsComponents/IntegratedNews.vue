<script setup lang="ts">
const newsStore = useNewsStore();

// Fetch articles on page mount
onMounted(async () => {
  await newsStore.getArticles();
});

// Handle pagination
const changePage = async (page: number | string | null) => {
  if (!page) return;
  await newsStore.getArticles(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Formatting date helper
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const featuredArticle = computed(() => newsStore.articles[0] || null);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 mt-10 py-8 bg-gray-50 dark:bg-transparent min-h-screen">
    
    <header class="mb-10">
      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-[#fafafa] tracking-tight">Latest News</h1>
      <p class="text-gray-600 dark:text-zinc-400 mt-2">Stay updated with the latest trends and opportunities.</p>
    </header>

    <div v-if="newsStore.loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <div v-else>
      <section v-if="featuredArticle" class="mb-12">
        <NuxtLink :to="`/newsfromhomes/${featuredArticle.id}`"
          class="block relative group overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-lg lg:flex transition-all hover:shadow-2xl border border-transparent dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500">
          
          <img :src="featuredArticle.image_url" :alt="featuredArticle.title"
            class="lg:w-1/2 h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div class="p-8 lg:w-1/2 flex flex-col justify-center bg-white dark:bg-zinc-900">
            <span class="text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
              {{ featuredArticle.category }}
            </span>
            <h2 class="text-2xl font-bold mt-2 text-gray-900 dark:text-zinc-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ featuredArticle.title }}
            </h2>
            <p class="mt-4 text-blue-500 dark:text-blue-400 font-semibold inline-flex items-center">
              Read Featured Story
              <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </div>
        </NuxtLink>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NuxtLink v-for="article in newsStore.articles.slice(1)" :key="article.id" :to="`/newsfromhomes/${article.id}`"
          class="group bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
          
          <img :src="article.image_url"
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div class="p-5">
            <div class="flex gap-2 mb-3">
              <span class="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] px-2 py-1 rounded uppercase font-bold">
                {{ article.category }}
              </span>
              <span class="bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 text-[10px] px-2 py-1 rounded uppercase font-bold">
                {{ article.country }}
              </span>
            </div>
            
            <h3 class="font-bold text-gray-900 dark:text-zinc-100 line-clamp-2 mb-2 h-12 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ article.title }}
            </h3>
            
            <p class="text-sm text-justify text-gray-500 dark:text-zinc-400 line-clamp-3 mb-4">
              {{ article.summary }}
            </p>
            
            <div class="pt-4 border-t border-gray-50 dark:border-zinc-800 flex items-center justify-between text-xs text-gray-400 dark:text-zinc-500">
              <span>{{ formatDate(article.created_at) }}</span>
              <span class="text-blue-500 dark:text-blue-400 font-medium">View Details</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <nav v-if="newsStore.pagination?.links" class="mt-12 flex justify-center gap-2">
        <button v-for="link in newsStore.pagination.links" :key="link.label" @click="changePage(link.page)"
          :disabled="!link.url || link.active" 
          class="px-4 py-2 rounded-md border text-sm transition-colors" 
          :class="[
            link.active 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800',
            !link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          ]" 
          v-html="link.label" />
      </nav>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>