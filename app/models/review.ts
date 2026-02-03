import type { Pagination } from './pagination'

export interface ReviewListResponse {
  status: string
  data: Review[]
  pagination: Pagination
  message: string
}

export interface Review {
  id: number
  title: string
  content: string
  rate_number: number
  date_rented: string | null
  role: string | null
  tenant_property_type: string | null
  tenant_property_address: string | null
  owner_property_type: string | null
  owner_property_address: string | null
  author: Author
  created_at: string
}

export interface Author {
  id: number
  name: string
  avatar: string | boolean | null
}
