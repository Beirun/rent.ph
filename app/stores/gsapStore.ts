export const useGSAPStore = defineStore('gsap', () => {
  const isFirstLoad = ref(true)

  const setIsFirstLoad = (value: boolean) => (isFirstLoad.value = value)

  return {
    isFirstLoad,
    setIsFirstLoad,
  }
})
