// property.model.ts

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
}

export interface GalleryImage {
  large: string
  thumb: string
}

export interface Pagination {
  current_page: number
  last_page: number
  per_page: number
  total: number
  from: number
  to: number
  has_more: boolean
}
