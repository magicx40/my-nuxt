// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components/',
      pathPrefix: false
    }
  ],
  modules: ['@element-plus/nuxt', "@nuxt/content", "@vueuse/nuxt"],
  elementPlus: {},
  css: [
    '~/assets/main.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})