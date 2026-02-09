export interface ApiResponse<T> {
  site: SiteInfo
  data: PaginatedData<T>
}

export interface SiteInfo {
  name: string
  url: string
  description: string | null
}

export interface PaginatedData<T> {
  current_page: number
  data: T[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: PaginationLink[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

export interface PaginationLink {
  url: string | null
  label: string
  page: number | null
  active: boolean
}

export interface Article {
  id: string
  article_id: string
  title: string
  original_title: string
  summary: string
  content: string
  image: string
  category: string
  country: string
  source: string
  original_url: string
  keywords: string
  topics: string[]
  slug: string
  status: string
  is_featured: boolean | null
  is_deleted: boolean
  is_live: boolean | null
  published_sites: PublishedSite[]
  custom_titles: any[]
  views_count: number
  created_at: string
  updated_at: string
  site_id: number | null
  citations: string | null
  image_url: string
  images: any[]
  pivot: ArticlePivot
}

export interface PublishedSite {
  id: number
  site_name: string
  pivot: ArticlePivot
}

export interface ArticlePivot {
  article_id: string
  site_id: number
}