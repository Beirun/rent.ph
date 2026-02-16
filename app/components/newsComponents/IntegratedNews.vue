<script setup lang="ts">
const newsStore = useNewsStore();

// Fetch articles (SSR compatible)
await useAsyncData('news-list', () => newsStore.getArticles().then(() => true));

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
  <div class="max-w-full px-12 mx-auto mt-10 py-8 bg-gray-50 dark:bg-transparent min-h-screen">

    <header class="mb-10">
      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-[#fafafa] tracking-tight">Latest News</h1>
      <p class="text-gray-600 dark:text-zinc-400 mt-2">Stay updated with the latest trends and opportunities.</p>
    </header>

    <!-- Loading State -->
    <div v-if="newsStore.loading" class="flex h-screen w-full flex-col justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p class="text-gray-500 dark:text-zinc-400">Loading article details...</p>
    </div>

    <div v-else>
      <div v-if="featuredArticle" class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <!-- Main Featured Article (Bigger, Left) -->
        <NuxtLink :to="`/newsfromhomes/${featuredArticle.id}`"
          class="lg:col-span-2 relative group overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-lg flex flex-col transition-all hover:shadow-2xl border border-transparent dark:border-zinc-800 hover:border-blue-400 dark:hover:border-blue-500">

          <div class="relative h-64 lg:h-[31rem] w-full overflow-hidden">
            <img :src="featuredArticle.image_url" :alt="featuredArticle.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
            <div class="absolute bottom-0 left-0 p-8 w-full">
              <span
                class="bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md mb-3 inline-block">
                {{ featuredArticle.category }}
              </span>
              <h2
                class="text-xl lg:text-4xl font-extrabold text-white leading-tight group-hover:text-blue-300 transition-colors mb-2">
                {{ featuredArticle.title }}
              </h2>
              <div class="flex items-center text-gray-300 text-sm gap-4 mt-2">
                <span>{{ formatDate(featuredArticle.created_at) }}</span>
                <span class="text-blue-400 font-bold flex items-center gap-1">
                  Read Story
                  <Icon name="lucide:arrow-right" class="size-4" />
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Side Article (Smaller, Right) -->
        <NuxtLink v-if="newsStore.articles[1]" :to="`/newsfromhomes/${newsStore.articles[1].id}`"
          class="lg:col-span-1 group bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-gray-100 dark:border-zinc-800 overflow-hidden flex flex-col transition-all hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500">

          <div class="relative h-48 lg:h-60 overflow-hidden">
            <img :src="newsStore.articles[1].image_url"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div class="p-6 flex flex-col flex-1">
            <div class="mb-3">
              <span class="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                {{ newsStore.articles[1].category }}
              </span>
            </div>
            <h3
              class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ newsStore.articles[1].title }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-zinc-400 line-clamp-3 mb-4 flex-1">
              {{ newsStore.articles[1].summary }}
            </p>
            <span class="text-blue-500 dark:text-blue-400 text-sm font-bold flex items-center gap-2 mt-auto">
              Read Article
              <Icon name="lucide:arrow-right" class="size-4" />
            </span>
          </div>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NuxtLink v-for="article in newsStore.articles.slice(2)" :key="article.id" :to="`/newsfromhomes/${article.id}`"
          class="group bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">

          <img :src="article.image_url"
            class="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105" />

          <div class="p-5">
            <div class="flex gap-2 mb-3">
              <span
                class="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] px-2 py-1 rounded uppercase font-bold">
                {{ article.category }}
              </span>
              <span
                class="bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 text-[10px] px-2 py-1 rounded uppercase font-bold">
                {{ article.country }}
              </span>
            </div>

            <h3
              class="font-bold text-gray-900 dark:text-zinc-100 line-clamp-2 mb-2 h-12 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ article.title }}
            </h3>

            <p class="text-sm text-left text-gray-500 dark:text-zinc-400 line-clamp-3 mb-4">
              {{ article.summary }}
            </p>

            <div
              class="pt-4 border-t border-gray-50 dark:border-zinc-800 flex items-center justify-between text-xs text-gray-400 dark:text-zinc-500">
              <span>{{ formatDate(article.created_at) }}</span>
              <span class="text-blue-500 dark:text-blue-400 font-medium">View Details</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <nav v-if="newsStore.pagination?.links" class="mt-12 flex justify-center gap-2">
        <button v-for="link in newsStore.pagination.links" :key="link.label" @click="changePage(link.page)"
          :disabled="!link.url || link.active" class="px-4 py-2 rounded-md border text-sm transition-colors" :class="[
            link.active
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white dark:bg-zinc-900 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800',
            !link.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          ]" v-html="link.label" />
      </nav>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>