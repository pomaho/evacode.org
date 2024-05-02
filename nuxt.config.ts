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
            url: process.env.SITE_URL,
        }
    },
    // sitemap: {
    //     urls: async () => {
    //         // fetch your URLs from a database or other source
    //         const productsResponse = await fetch(`${process.env.BASE_API_URL}/market/get_all_goods`);
    //         const products = await productsResponse.json();
    //         return products.result.map((product: any) => {
    //             return `${process.env.SITE_URL}/product/sidebar/${product.id}`;
    //         });
    //     }
    // },
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
