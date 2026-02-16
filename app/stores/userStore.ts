import { defineStore } from 'pinia'
import type { UserProfile } from '@/models/user'

const BASE_URL = 'https://rent.ph/api'

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

    return {
        user,
        fullName,
        loading,
        fetchUserProfile
    }
})