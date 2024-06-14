import {defineStore} from 'pinia'

export const useAboutStore = defineStore({
    id: 'about-store',
    state: () => {
        return {
            _aboutHome: null,
            _aboutPage: null,
            _aboutFooter: null,
        }
    },
    getters: {
        aboutHome: async (state) => {
            if (!state._aboutHome) {
                const aboutResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/about?name=about-home`);
                const about = aboutResponse?.results[0] || {};
                state._aboutHome = about;
            }
            return state._aboutHome;
        },
        aboutPage: async (state) => {
            if (!state._aboutPage) {
                const aboutResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/about?name=about-page`);
                const about = aboutResponse?.results[0] || {};
                state._aboutPage = about;
            }
            return state._aboutPage;
        },
        aboutFooter: async (state) => {
            if (!state._aboutFooter) {
                const aboutResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/about?name=about-footer`);
                const about = aboutResponse?.results[0] || {};
                state._aboutFooter = about;
            }
            return state._aboutFooter;
        },
		aboutTermsOfUse: async (state) => {
			if (!state._aboutTermsOfUse) {
				const aboutResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/about?name=about-terms-of-use`);
				state._aboutTermsOfUse = aboutResponse?.results[0] || {};
			}
			return state._aboutTermsOfUse;
		},
		aboutPrivacyPolicy: async (state) => {
			if (!state._aboutPrivacyPolicy) {
				const aboutResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/about?name=about-privacy-policy`);
				state._aboutPrivacyPolicy = aboutResponse?.results[0] || {};
			}
			return state._aboutPrivacyPolicy;
		},
	}
})















