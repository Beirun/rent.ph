//import type { Pagination } from './pagination'

export interface PropertyListResponse<T> {
  status: string
  data: T[]
//   pagination: Pagination
  message: string
}

export interface PropertyResponse<T> {
  status: string
  data: T
  message: string
}

// Updated to match actual API response from /api/agent/properties
export interface Property {
  id: number
  proj_id: number | null
  title: string
  slug: string
  content: string
  image_id: number
  banner_image_id: number | null
  region_id: number | null
  location_id: number | null
  province: string
  city: string
  category_id: number
  address: string
  map_lat: string
  map_lng: string
  map_zoom: number
  is_featured: number | null
  gallery: string // Comma-separated image IDs
  video: string | null
  faqs: string | null
  last_time_viewed: string | null
  price: string
  sale_price: string | null
  price_type: string
  is_instant: number
  allow_children: number
  allow_infant: number
  max_guests: number | null
  bed: number
  bathroom: number
  square: number
  unit: string
  garages: number
  year_built: number | null
  floor_area: number | null
  floor_area_unit: string | null
  area: number
  area_unit: string
  deposit: number | null
  pool_size: number | null
  additional_zoom: number | null
  remodal_year: number | null
  amenities: string
  equipment: string
  enable_extra_price: number | null
  property_type: number | null
  extra_price: string | null
  discount_by_days: string | null
  status: string
  owner_first_name: string | null
  owner_last_name: string | null
  owner_country_code: string
  owner_phone: string | null
  owner_email: string | null
  owner_address: string
  owner_country: string
  default_state: string | null
  view: number
  review_score: number
  recent_view: string | null
  create_user: number
  update_user: number | null
  deleted_at: string | null
  created_at: string
  updated_at: string
  is_sold: number | null
  remarks: string | null
  remarks_updated: string | null
  profile_view: number
  rapa_file: string | null
  rapa_verified: number
}

export interface GalleryImage {
  large: string
  thumb: string
}

// Helper type for the gallery images API response
export interface ImageResponse {
  id: number
  url: string
  large: string
  thumb: string
}