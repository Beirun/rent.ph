export const useGSAPStore = defineStore('gsap', () => {
  const isFirstLoad = ref(true)
  const isSplashScreenLoaded = ref(false)
  const setIsFirstLoad = (value: boolean) => (isFirstLoad.value = value)
  const setIsSplashScreenLoaded = (value: boolean) => (isSplashScreenLoaded.value = value)

  return {
    isFirstLoad,
    setIsFirstLoad,
    isSplashScreenLoaded,
    setIsSplashScreenLoaded,
  }
})
