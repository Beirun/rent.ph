import { defineStore } from 'pinia'
import type { UserProfile } from '@/models/user'

const BASE_URL = '/api'

export const useUserStore = defineStore('user', () => {
    const user = ref<UserProfile | null>(null)
    const loading = ref(false)

    const fullName = computed(() => {
        if (!user.value) return ''
        return `${user.value.first_name} ${user.value.last_name}`
    })


    const fetchUserProfile = async () => {
        loading.value = true

        const userID = useCookie('id').value
        try {
            const res: any = await $fetch(`${BASE_URL}/rent-manager-detail/${userID}`)
            user.value = res.data
        } catch (error) {
            console.error('Failed to fetch profile:', error)
        } finally {
            loading.value = false
        }
    }

    const updateUserProfile = async (formData: Partial<UserProfile>) => {
        loading.value = true
        const token = useCookie('access_token')

        try {
            const res: any = await $fetch(`${BASE_URL}'}/api/rent-manager-details/${user.value?.id}`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token.value}` },
                body: formData
            })
            
            if (user.value) {
                user.value = { ...user.value, ...formData }
            }
            
            return { success: true }
        } catch (error) {
            console.error('Update failed:', error)
            return { success: false, error }
        } finally {
            loading.value = false
        }
    }

    return {
        user,
        fullName,
        loading,
        fetchUserProfile,
        updateUserProfile
    }
})