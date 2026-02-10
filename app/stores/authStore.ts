import { defineStore } from 'pinia'
import { watch } from 'vue'
import type { Agent } from '~/models/manager'

export const useAuthStore = defineStore('auth', () => {
  const token = useCookie('authToken', {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })
  
  const user = ref<Agent | null>(null)
  const loading = ref(false)

  const decodedToken = computed(() => {
    if (!token.value) return null
    try {
      const payload = token.value?.split('.')[1]
      if (!payload) return null
      
      // Robust Base64URL decoding
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))

      const decoded = JSON.parse(jsonPayload)
      console.log('Decoded Token:', decoded)
      return decoded
    } catch (e) {
      console.error('Failed to decode token:', e)
      return null
    }
  })

  const login = (newToken: string) => {
    token.value = newToken
  }

  const logout = () => {
    token.value = null
    user.value = null
  }

  const fetchUserProfile = async () => {
    console.log('fetchUserProfile called, token:', !!token.value, 'user:', !!user.value)
    if (!token.value || user.value) return

    loading.value = true
    try {
      const decoded = decodedToken.value
      console.log('Decoded token in fetchUserProfile:', decoded)
      
      const userId = decoded?.sub || decoded?.id || decoded?.user_id || decoded?.id_user || decoded?.uid || decoded?.pk
      console.log('Identified User ID for profile fetch:', userId)

      if (!userId) {
        console.warn('No user ID found in token payload')
        return
      }

      const url = `https://rent.ph/api/rent-manager-detail/${userId}`
      console.log('Fetching profile from:', url)
      
      const res = await fetch(url)
      if (res.ok) {
        const json = await res.json()
        console.log('Profile API response:', json)
        user.value = json.data
      } else {
        console.error('Profile API error:', res.status, res.statusText)
      } 
    } catch (err) {
      console.error('Failed to fetch user profile:', err)
    } finally {
      loading.value = false
    }
  }

  // Watch for token changes to fetch profile automatically
  watch(token, (newToken) => {
    console.log('Token watch triggered, new token exists:', !!newToken)
    if (newToken) {
      fetchUserProfile()
    }
  }, { immediate: true })

  return {
    token,
    user,
    loading,
    decodedToken,
    login,
    logout,
    fetchUserProfile,
  }
})
