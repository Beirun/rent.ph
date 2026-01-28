import type {
  Pagination,
  Property,
  PropertyListResponse,
  PropertyResponse,
} from '~/models/property'

const BASE_URL = 'https://rent.ph/api'

export const usePropertyStore = defineStore('property', () => {
  const property = ref<Property>()
  const properties = ref<Property[]>([])
  const pagination = ref<Pagination>()
  const loading = ref(false)

  const getProperty = async (id: string | number) => {
    loading.value = true
    try {
      const res = await fetch(`${BASE_URL}/properties/${id}`)
      if (!res.ok) throw new Error(`Failed to fetch property: ${res.statusText}`)
      const json: PropertyResponse<Property> = await res.json()
      property.value = json.data
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const getProperties = async (
    page: string | number = 1,
    numberPerPage: string | number = 10,
    searchQuery: string | null = null,
  ) => {
    loading.value = true
    try {
      const query = `page=${page}&per_page=${numberPerPage}${searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ''}`
      const res = await fetch(`${BASE_URL}/properties?${query}`)
      if (!res.ok) throw new Error(`Failed to fetch properties: ${res.statusText}`)
      const json: PropertyListResponse<Property> = await res.json()
      properties.value = json.data
      pagination.value = json.pagination
    } catch (err) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    properties,
    property,
    pagination,
    getProperty,
    getProperties,
    loading,
  }
})
