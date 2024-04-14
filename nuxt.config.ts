// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    routeRules: {},

    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Evacode - интернет магазин корейской косметики',
            meta: [
                {name: 'description', content: 'Evacode - интернет магазин корейской косметики.'}
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/images/evacode/favicon.ico'}
            ],
        },
    },
    runtimeConfig: {
        public: {
            apiBase: 'http://127.0.0.1:8000/api'
        }
    },

    css: ['@/assets/scss/app.scss'],
    ssr: true,
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/sitemap',
        '@nuxt/image-edge',
        '@vueuse/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
    pluginsIgnore: [
        /^ignored-plugin/,
        /another-ignored-plugin/,
    ],
    plugins: [
        {src: './plugins/useBootstrap.client.ts', mode: 'client'},
        {src: './plugins/showToast.client.js', mode: 'client'},
    ]
})
