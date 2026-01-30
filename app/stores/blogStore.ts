import type { NewsItem } from '~/models/blog'
import type { Pagination } from '~/models/pagination'

const BASE_URL = 'https://rent.ph/api'

export const useBlogStore = defineStore('blog', () => {
  const blog = ref<NewsItem>()
  const blogs = ref<NewsItem[]>([])
  const pagination = ref<Pagination>()
  const loading = ref(false)

  const getBlog = async (id: string | number) => {
    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}/news/${id}`)
      if (!res.ok) throw new Error(`Failed to fetch blog: ${res.statusText}`)
      const json = await res.json()
      blog.value = json.data
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const getBlogs = async (
    page: string | number = 1,
    numberPerPage: string | number = 10,
    searchQuery: string | null = null,
  ) => {
    loading.value = true
    try {
      const query = `page=${page}&per_page=${numberPerPage}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`
      const res = await fetch(`${BASE_URL}/news?${query}`)
      if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.statusText}`)
      const json = await res.json()
      blogs.value = json.data
      pagination.value = json.pagination
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    blog,
    blogs,
    pagination,
    getBlog,
    getBlogs,
    loading,
  }
})
