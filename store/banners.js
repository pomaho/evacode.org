import {defineStore} from 'pinia'

export const useBannersStore = defineStore({
    id: 'contacts-store',
    state: () => {
        return {
            _bannerShop: null,
            _bannerShopSide: null,
        }
    },
    getters: {
        bannerShop: async (state) => {
            if (!state._bannerShop) {
                const bannerShopTopResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/banner?name=shop-top-banner`);
                const bannerShop = bannerShopTopResponse?.results[0] || {};
                state._bannerShop = bannerShop;
            }
            return state._bannerShop;
        },
        bannerShopSide: async (state) => {
            if (!state._bannerShopSide) {
                const bannerShopSideResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/banner?name=shop-side-banner`);
                const bannerShopSide = bannerShopSideResponse?.results[0] || {};
                state._bannerShopSide = bannerShopSide;
            }
            return state._bannerShopSide;
        },
    }
})















