<script setup lang="ts">
const route = useRoute();
const newsStore = useNewsStore();

onMounted(async () => {
    const articleId = route.params.id as string;
    await newsStore.getArticleById(articleId);
});

const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
</script>

<template>
    <ClientOnly>
        <Navbar />
    </ClientOnly>

    <div
        class="max-w-4xl mx-auto mt-10 px-4 py-12 bg-transparent  min-h-screen transition-colors duration-300">

        <NuxtLink to="/newsfromhomes"
            class="text-blue-600 dark:text-blue-400 flex items-center gap-2 mb-8 hover:text-blue-800 dark:hover:text-blue-300 transition">
            ← Back to News
        </NuxtLink>

        <div v-if="newsStore.loading" class="flex flex-col justify-center items-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p class="text-gray-500 dark:text-zinc-400">Loading article details...</p>
        </div>

        <div v-else-if="newsStore.currentArticle">
            <header class="mb-8">
                <div class="flex items-center gap-3 mb-4">
                    <span
                        class="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase">
                        {{ newsStore.currentArticle.category }}
                    </span>
                    <span class="text-gray-400 dark:text-zinc-500 text-sm">
                        {{ formatDate(newsStore.currentArticle.created_at) }}
                    </span>
                </div>

                <h1 class="text-3xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 leading-tight">
                    {{ newsStore.currentArticle.title }}
                </h1>
            </header>

            <img :src="newsStore.currentArticle.image_url" :alt="newsStore.currentArticle.title"
                class="w-full h-100 object-cover rounded-3xl shadow-lg mb-10 border dark:border-zinc-800" />

            <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-xl">
                <h3 class="font-bold text-blue-900 dark:text-blue-300 mb-2 font-serif uppercase tracking-tight text-sm">
                    Summary</h3>
                <p class="text-blue-800 dark:text-blue-200 italic leading-relaxed">
                    {{ newsStore.currentArticle.summary }}
                </p>
            </div>

            <div class="prose text-justify prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-zinc-300 leading-loose article-body"
                v-html="newsStore.currentArticle.content">

            </div>

            <div v-if="newsStore.currentArticle.keywords"
                class="mt-12 pt-8 border-t border-gray-100 dark:border-zinc-800">
                <h4 class="text-sm font-semibold text-gray-500 dark:text-zinc-500 uppercase mb-4">Keywords</h4>
                <div class="flex flex-wrap gap-2">
                    <span v-for="word in newsStore.currentArticle.keywords.split(',')" :key="word"
                        class="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 px-3 py-1 rounded-lg text-sm">
                        #{{ word.trim() }}
                    </span>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-20">
            <h2 class="text-2xl font-bold text-gray-800 dark:text-zinc-200">Article not found</h2>
            <p class="text-gray-500 dark:text-zinc-500 mt-2">The article you are looking for doesn't exist.</p>
            <NuxtLink to="/newsfromhomes"
                class="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Go Back Home
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
/* Base styles for the HTML tags */
.article-body :deep(p) {
    margin-bottom: 1.5rem;
}

.article-body :deep(br) {
    content: "";
    margin: 0.5rem 0;
    display: block;
}

/* Force Bold text to adapt to theme */
.article-body :deep(b),
.article-body :deep(strong) {
    font-weight: 700;
    color: inherit;
    /* This allows it to follow the parent's text color */
}

/* If prose-invert doesn't catch the bold tag specifically, 
   this manual override ensures it turns white in dark mode.
*/
:deep(.dark) .article-body :deep(b),
:deep(.dark) .article-body :deep(strong) {
    color: #f4f4f5 !important;
    /* zinc-100 */
}
</style>