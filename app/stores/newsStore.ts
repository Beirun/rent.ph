import { defineStore } from 'pinia'
import type { Article, ApiResponse, PaginatedData } from '~/models/news'

export const useNewsStore = defineStore('news', () => {
  const runtimeConfig = useRuntimeConfig()

  const articles = ref<Article[]>([])
  const currentArticle = ref<Article | null>(null)
  const pagination = ref<Partial<PaginatedData<Article>>>({})
  const loading = ref(false)

  const config = {
    baseUrl: 'https://homesphnews-api-394504332858.asia-southeast1.run.app/api/external',
    headers: {
      'X-Site-Api-Key': runtimeConfig.public.siteApiKey,
      'Accept': 'application/json'
    }
  }

  /**
   * Fetch a single article by its ID
   */
  const getArticleById = async (id: string | number) => {
    loading.value = true
    try {
      // Logic: Try fetching directly if the endpoint exists, 
      // otherwise fetch the list and find the ID.
      const data = await $fetch<ApiResponse<Article>>(`${config.baseUrl}/articles`, {
        method: 'GET',
        headers: config.headers
      })

      const found = data.data.data.find((a) => a.id === id || a.article_id === id)
      
      if (!found) throw new Error(`Article with ID ${id} not found`)

      currentArticle.value = found
      return found
    } catch (err) {
      console.error('Error fetching article by ID:', err)
      currentArticle.value = null
      return null
    } finally {
      loading.value = false
    }
  }

  const getArticles = async (page: number | string = 1) => {
    loading.value = true
    try {
      const data = await $fetch<ApiResponse<Article>>(`${config.baseUrl}/articles`, {
        method: 'GET',
        headers: config.headers,
        params: { page }
      })

      articles.value = data.data.data
      pagination.value = {
        current_page: data.data.current_page,
        last_page: data.data.last_page,
        per_page: data.data.per_page,
        total: data.data.total,
        links: data.data.links
      }
    } catch (err) {
      console.error('Error fetching articles:', err)
    } finally {
      loading.value = false
    }
  }

  const getArticleBySlug = async (slug: string) => {
    loading.value = true
    try {
      const data = await $fetch<ApiResponse<Article>>(`${config.baseUrl}/articles`, {
        method: 'GET',
        headers: config.headers
      })

      const found = data.data.data.find((a) => a.slug === slug)
      if (!found) throw new Error(`Article with slug ${slug} not found`)

      currentArticle.value = found
    } catch (err) {
      console.error('Error finding article:', err)
      currentArticle.value = null
    } finally {
      loading.value = false
    }
  }

  const getArticlesByCategory = async (category: string, page: number | string = 1) => {
    loading.value = true
    try {
      const data = await $fetch<ApiResponse<Article>>(`${config.baseUrl}/articles`, {
        method: 'GET',
        headers: config.headers,
        params: { category, page }
      })
      articles.value = data.data.data
      return data.data.data
    } catch (err) {
      console.error('Category fetch error:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  return {
    articles,
    currentArticle,
    pagination,
    loading,
    getArticles,
    getArticleById,
    getArticleBySlug,
    getArticlesByCategory
  }
})