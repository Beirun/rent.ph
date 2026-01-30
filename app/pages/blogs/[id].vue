<script setup lang="ts">
const blogStore = useBlogStore()
function formatDate(s: string) {
  if (!s) throw new Error('Invalid date')
  const d = new Date(s)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}
onMounted(async () => {
  const route = useRoute()
  const { id } = route.params
  await blogStore.getBlog(id as string)
})
</script>
<template>
  <div id="wholePage" class="w-screen overflow-hidden flex flex-col">
    <ClientOnly>
      <navbar />
    </ClientOnly>
    <div
      class="bg-[url(/blogBackGround.png)] bg-no-repeat w-screen h-screen bg-cover fixed -z-10"
    />
    <BlogDetailSkeleton v-if="blogStore.loading" />
    <div v-else id="scrollAraa" class="">
      <div id="HeadSection" class="justify-items-center">
        <p class="text-5xl pt-50 font-bold w-1/2 text-center">
          {{ blogStore.blog?.title }}
        </p>
        <div id="DetailsSection" class="flex flex-row gap-5 mt-5">
          <div class="flex flex-row gap-3 items-center">
            <Icon name="lucide:calendar-clock" />
            <p>{{ formatDate(blogStore.blog?.created_at || new Date().toISOString()) }}</p>
          </div>
          <p>|</p>
          <div class="flex flex-row gap-3 items-center">
            <Icon name="lucide:eye" />
            <p>{{ blogStore.blog?.view }} view{{ blogStore.blog?.view !== 1 ? 's' : '' }}</p>
          </div>
        </div>
      </div>
      <div id="SocialSection mx-auto" class="justify-items-center mt-10">
        <img :src="blogStore.blog?.image" alt="" class="w-150 h-150 shadow-sm round-sm" />
        <div class="justify-start items-center w-215 flex flex-row gap-3 mt-20">
          <p>Share</p>
          <Icon name="lucide:facebook" class="text-blue-500" />
          <Icon name="ic:baseline-whatsapp" class="text-green-500" />
          <Icon name="lucide:link" />
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 py-8 text-gray-900 font-sans leading-relaxed">
        <h1 class="text-3xl font-bold mb-6 text-black">
          {{ blogStore.blog?.title }}
        </h1>
        <div v-html="blogStore.blog?.content.replaceAll('Calibri', 'Poppins')"></div>

        <div id="RelatedBlogsScetion"></div>
      </div>
    </div>
  </div>
</template>
