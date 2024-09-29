// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 9000,
    host: '0.0.0.0',
  },
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
  }
})