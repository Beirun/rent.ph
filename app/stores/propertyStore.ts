import type { Pagination } from '~/models/pagination'
import type { Property, PropertyListResponse, PropertyResponse } from '~/models/property'

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

  const getPropertyBySlug = async (slug: string) => {
    loading.value = true
    try {
      console.log('Fetching property with slug:', slug)
      // Fetch all properties to find the ID matching this slug
      const listUrl = `${BASE_URL}/properties`
      console.log('Fetching properties list from:', listUrl)
      const listRes = await fetch(listUrl)
      const listJson = await listRes.json()
      console.log('All properties response:', listJson)

      // Find the property with matching slug
      const propertyItem = listJson.data?.find((p: any) => p.slug === slug)
      if (!propertyItem) {
        throw new Error(`Property with slug ${slug} not found`)
      }

      console.log('Found property ID:', propertyItem.id)
      // Now fetch the full property data using the ID
      const detailUrl = `${BASE_URL}/properties/${propertyItem.id}`
      console.log('Fetching full property from:', detailUrl)
      const detailRes = await fetch(detailUrl)
      const detailJson = await detailRes.json()
      console.log('Full property data:', detailJson)

      if (!detailRes.ok) throw new Error(`Failed to fetch property: ${detailRes.statusText}`)
      property.value = detailJson.data
      console.log('Property set to:', property.value)
      loading.value = false
    } catch (err) {
      console.error(err)
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

  const getPropertiesbyCategory = async (
    page: string | number = 1,
    numberPerPage: string | number = 10,
    customQuery: string | null = null,
  ): Promise<Property[]> => {
    loading.value = true
    try {
      const query = `page=${page}&per_page=${numberPerPage}&${customQuery}`
      const res = await fetch(`${BASE_URL}/properties?${query}`)
      if (!res.ok) throw new Error(`Failed to fetch properties: ${res.statusText}`)
      const json: PropertyListResponse<Property> = await res.json()
      properties.value = json.data
      pagination.value = json.pagination
      return json.data
    } catch (err) {
      console.error(err)
      return []
    } finally {
      loading.value = false
    }
  }

  return {
    properties,
    property,
    pagination,
    getProperty,
    getPropertiesbyCategory,
    getPropertyBySlug,
    getProperties,
    loading,
  }
})
