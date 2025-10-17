// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  //   // layoutTransition: { name: 'layout', mode: 'out-in' },
  // },
  css: [
    '~/assets/css/tailwind.css', 
    '~/assets/css/main.css'
],
})
