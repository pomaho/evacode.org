import {defineStore} from 'pinia'

export const useAboutStore = defineStore({
    id: 'contacts-store',
    state: () => {
        return {
            _aboutHome: null,
            _aboutPage: null,
        }
    },
    getters: {
        aboutHome: async (state) => {
            if (!state._aboutHome) {
                const aboutResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/about`);
                const about = aboutResponse?.results[0] || {};
                state._aboutHome = about;
            }
            return state._aboutHome;
        },
        aboutPage: async (state) => {
            if (!state._aboutPage) {
                const aboutResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/about`);
                const about = aboutResponse?.results[1] || {};
                state._aboutPage = about;
            }
            return state._aboutPage;
        },
    }
})















