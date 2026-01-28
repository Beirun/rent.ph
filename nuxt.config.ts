// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Options
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'v-gsap-nuxt',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],
  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui',
  },
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
  },
})
