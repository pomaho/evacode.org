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
                {rel: 'icon', type: 'image/png', href: '/images/evacode/favicon.ico'},
                {rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@100;200;300;400;700;900&display=swap'},
                {rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;700;900&display=swap'},
                {rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;700;900&display=swap'}
            ],
            script:[
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-22XGNP36M1',
                    tagPosition: 'bodyOpen',
                },
                {
                    innerHTML:
                            `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag("js", new Date());
                            gtag("config", "G-22XGNP36M1");`,
                    tagPosition: 'bodyOpen',
                }
            ],
        },
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.BASE_API_URL,
            url: process.env.SITE_URL,
        }
    },
    site: {
        url: process.env.SITE_URL,
        trailingSlash: true,
    },
    css: ['@/assets/scss/app.scss'],
    ssr: true,
    modules: [
        'maz-ui/nuxt',
        'nuxt3-localforage',
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
    vite: {
        optimizeDeps: {
            include: ['localforage'],
        },
    },
    pluginsIgnore: [
        /^ignored-plugin/,
        /another-ignored-plugin/,
    ],
    plugins: [
        {src: './plugins/useBootstrap.client.ts', mode: 'client'},
    ]
})
