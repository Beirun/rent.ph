<script setup lang="ts">
const route = useRoute();
const newsStore = useNewsStore();

const articleId = route.params.id as string;

// Fetch article data (SSR compatible)
await useAsyncData(`article-${articleId}`, () => newsStore.getArticleById(articleId).then(() => true));

const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

// Split content into paragraphs for better rendering
const getParagraphs = (content?: string) => {
    if (!content) return [];
    // Remove HTML tags and split by common paragraph separators
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';

    // Split by double line breaks or paragraph tags
    return content
        .split(/<\/p>|<br\s*\/?>\s*<br\s*\/?>|\n\n/)
        .map(p => p.replace(/<\/?p>/g, '').trim())
        .filter(p => p.length > 0);
};
</script>

<template>
    <ClientOnly>
        <Navbar />
    </ClientOnly>

    <div class="w-full min-h-screen bg-transparent transition-colors duration-300">

        <!-- Hero Section - Full Width -->
        <div v-if="newsStore.currentArticle && !newsStore.loading"
            class="w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
            <img :src="newsStore.currentArticle.image_url" :alt="newsStore.currentArticle.title"
                class="w-full h-full object-cover  object-[70%_30%]" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <!-- Title Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div class="max-w-full mx-auto">
                    <NuxtLink to="/newsfromhomes"
                        class="text-white/90 font-bold flex items-center gap-2 mb-6 hover:text-white transition text-sm md:text-base">
                        ← Back to News
                    </NuxtLink>

                    <div class="flex items-center gap-3 mb-4">
                        <span
                            class="bg-blue-500/90 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase">
                            {{ newsStore.currentArticle.category }}
                        </span>
                        <span class="text-white/80 text-sm md:text-base">
                            {{ formatDate(newsStore.currentArticle.created_at) }}
                        </span>
                    </div>

                    <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {{ newsStore.currentArticle.title }}
                    </h1>
                </div>
            </div>
        </div>

        <!-- Loading State -->
        <div v-if="newsStore.loading" class="flex h-screen w-full flex-col justify-center items-center py-20">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p class="text-gray-500 dark:text-zinc-400">Loading article details...</p>
        </div>

        <!-- Article Content - Constrained Width with Side Columns -->
        <div v-else-if="newsStore.currentArticle" class="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 md:py-16">

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

                <!-- Left Sidebar: Navigation -->
                <div class="hidden lg:col-span-2 lg:block">
                    <div class="sticky top-24 space-y-6">
                        <NuxtLink to="/newsfromhomes"
                            class="group flex items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors">
                            <div
                                class="p-2 rounded-full border border-gray-200 dark:border-zinc-800 group-hover:border-blue-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all">
                                <Icon name="lucide:arrow-left" class="size-4" />
                            </div>
                            <span class="text-sm font-bold uppercase tracking-wide">Back</span>
                        </NuxtLink>

                        <div class="h-px bg-gray-100 dark:bg-zinc-800 w-full"></div>

                        <div class="space-y-4">
                            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest">More News</p>
                            <NuxtLink to="https://news.homes.ph/" target="_blank"
                                class="block text-sm text-gray-600 dark:text-zinc-400 hover:text-blue-600 transition-colors line-clamp-2">
                                Read more news from Source
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="lg:col-span-8">
                    <!-- Summary Section -->
                    <div
                        class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 md:p-8 mb-12 rounded-r-xl">
                        <h3
                            class="font-bold text-blue-900 dark:text-blue-300 mb-3 font-serif uppercase tracking-tight text-sm md:text-base">
                            Summary
                        </h3>
                        <p class="text-blue-800 dark:text-blue-200 italic leading-relaxed text-base md:text-lg">
                            {{ newsStore.currentArticle.summary }}
                        </p>
                    </div>

                    <!-- Article Body - Paragraph by Paragraph -->
                    <article class="prose prose-lg dark:prose-invert max-w-none">
                        <div v-for="(paragraph, index) in getParagraphs(newsStore.currentArticle.content)" :key="index"
                            class="mb-6 text-gray-800 dark:text-zinc-200 leading-relaxed text-base md:text-lg text-justify"
                            v-html="paragraph">
                        </div>
                    </article>

                    <!-- Keywords Section -->
                    <div v-if="newsStore.currentArticle.keywords"
                        class="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800">
                        <h4 class="text-sm md:text-base font-semibold text-gray-500 dark:text-zinc-500 uppercase mb-4">
                            Keywords
                        </h4>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="word in newsStore.currentArticle.keywords.split(',')" :key="word"
                                class="bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-200 dark:hover:bg-zinc-700 transition">
                                #{{ word.trim() }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Right Sidebar: Share Buttons -->
                <div class="hidden lg:col-span-2 lg:block">
                    <div class="sticky top-24 flex flex-col items-center gap-4">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest writing-vertical-lr mb-4">
                            Share Article</p>

                        <button
                            class="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <Icon name="lucide:facebook" class="size-5" />
                        </button>
                        <button
                            class="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <Icon name="lucide:twitter" class="size-5" />
                        </button>
                        <button
                            class="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-blue-700 hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <Icon name="lucide:linkedin" class="size-5" />
                        </button>
                        <button
                            class="p-3 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm hover:shadow-lg hover:-translate-y-1">
                            <Icon name="lucide:link" class="size-5" />
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <!-- Not Found State -->
        <div v-else class="max-w-5xl mx-auto px-6 text-center py-20">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-zinc-200">Article not found</h2>
            <p class="text-gray-500 dark:text-zinc-500 mt-3 text-base md:text-lg">
                The article you are looking for doesn't exist.
            </p>
            <NuxtLink to="/newsfromhomes"
                class="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-base md:text-lg font-medium">
                Go Back Home
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
/* Ensure bold text adapts to theme */
.prose :deep(b),
.prose :deep(strong) {
    font-weight: 700;
    color: inherit;
}

.dark .prose :deep(b),
.dark .prose :deep(strong) {
    color: #f4f4f5;
}

/* Smooth paragraph spacing */
.prose :deep(p) {
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

/* Better link styling in articles */
.prose :deep(a) {
    color: #2563eb;
    text-decoration: underline;
    text-decoration-color: #2563eb40;
    transition: all 0.2s;
}

.dark .prose :deep(a) {
    color: #60a5fa;
    text-decoration-color: #60a5fa40;
}

.prose :deep(a):hover {
    text-decoration-color: currentColor;
}
</style>