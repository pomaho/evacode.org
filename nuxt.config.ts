// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
  $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
  routeRules: {

  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Evacode - интернет магазин корейской косметики',
      meta: [
        { name: 'description', content: 'Evacode - интернет магазин корейской косметики.' }
      ],
      link: [
          { rel: 'icon', type: 'image/png', href: "/images/evacode/favicon.ico" }
      ],
    },
  },

  css: ["@/assets/scss/app.scss"],
  ssr:true,
  modules: [
    'nuxt-icon',
    '@nuxt/image-edge',
    // "@nuxtjs/i18n",
    '@vueuse/nuxt',
    // 'vue-toastification/nuxt',
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],


  ],
  pluginsIgnore: [
    /^ignored-plugin/,
    /another-ignored-plugin/,
  ],
  plugins: [

    // {src: '~/node_modules/bootstrap/dist/js/bootstrap.js', mode: 'client'}
    { src: './plugins/useBootstrap.client.ts', mode: 'client' },
    { src: './plugins/showToast.client.js', mode: 'client' },
    // { src: './plugins/paypal.client.js' }
    // { src: 'https://checkout.stripe.com/checkout.js'}
  ]
  //    build: { vendor: 'vue-paypal-checkout'},
})
