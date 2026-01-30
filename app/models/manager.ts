import type { Pagination } from './pagination'

export interface AgentListResponse {
  status: 'success'
  data: Agent[]
  pagination: Pagination
  filters: Filters
  message: string
}

export interface Agent {
  id: number
  name: string
  first_name: string
  last_name: string
  email: string
  phone: string
  avatar: string
  reviews: string | null
  city: string | null
  state: string | null
  rmpro: string | null
  agent_title: string
  listing_count: number
}

export interface Filters {
  order: string | null
}
