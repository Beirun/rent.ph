import type { Pagination } from './pagination'

export interface PropertyListResponse<T> {
  status: string
  data: T[]
  pagination: Pagination
  message: string
}

export interface PropertyResponse<T> {
  status: string
  data: T
  message: string
}

export interface Property {
  id: number
  slug: string
  title: string
  image: string
  price: string
  bed: number
  bathroom: number
  square: number
  garages: number
  lat: number
  lng: number
  marker: string
  gallery: GalleryImage[]
  address: string
  status: string
  is_featured: boolean
  content: string
  amenities: string
  image_id: number
  category_id: number
  created_at: string
  updated_at: string
  floor_area: number | null
  deposit: number | null
  year_built: number | null
  property_type: string | null
  user_avatar: string | false
  user_name: string
  agent_title: string
  agent_phone: string
  agent_email: string

  // Fields required by editListing.vue (from agentBasedProperty)
  map_lat?: string
  map_lng?: string
  map_zoom?: number
  is_sold?: number | boolean
  city?: string
  owner_first_name?: string
  owner_last_name?: string
  owner_phone?: string
  owner_email?: string
  owner_address?: string
  view?: number
}

export interface GalleryImage {
  large: string
  thumb: string
}
