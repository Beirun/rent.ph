import type { Pagination } from './pagination'

export interface Category {
  id: number
  name: string
  slug: string
}

export interface Author {
  id: number
  name: string
  avatar: string | false
}

export interface NewsItem {
  id: number
  slug: string
  title: string
  content: string
  image: string
  category: Category
  author: Author
  is_featured: boolean
  view: number
  created_at: string
  updated_at: string
  url: string
}

export interface NewsListResponse {
  status: 'success' | 'error'
  data: NewsItem[]
  pagination: Pagination
  message: string
}
