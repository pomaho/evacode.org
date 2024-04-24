// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Evacode - интернет магазин корейской косметики',
            meta: [
                {
                    name: 'description',
                    content: 'Evacode - интернет магазин корейской косметики.- The History of Whoo, O HUI, SU:M37,' +
                        'CNP, The Saga of Soo, Sulwhasoo, Hera, Amore Pacifi'
                },
                {
                    name: 'og:description',
                    content: 'Evacode - интернет магазин корейской косметики.- The History of Whoo, O HUI, SU:M37,' +
                        'CNP, The Saga of Soo, Sulwhasoo, Hera, Amore Pacifi'
                },
                {
                    name: 'twitter:description',
                    content: 'Evacode - интернет магазин корейской косметики.- The History of Whoo, O HUI, SU:M37,' +
                        'CNP, The Saga of Soo, Sulwhasoo, Hera, Amore Pacifi'
                },
                {
                    name: 'og:title',
                    content: 'Evacode - интернет магазин корейской косметики'
                },
            ],
            link: [
                {rel: 'icon', type: 'image/png', href: '/images/evacode/favicon.ico'}
            ],
        },
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.BASE_API_URL,
        }
    },
    sitemap: {
        sources: [
            '/api_nuxt/__sitemap__/urls',
        ]
    },
    site: {
        url: process.env.SITE_URL,
        trailingSlash: true,
    },
    css: ['@/assets/scss/app.scss'],
    ssr: true,
    modules: [
        '@nuxt/image-edge',
        '@nuxtjs/robots',
        '@vueuse/nuxt',
        'nuxt-simple-sitemap',
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
    ]
})
