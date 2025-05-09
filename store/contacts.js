import {defineStore} from 'pinia'

export const useContactsStore = defineStore({
    id: 'contacts-store',
    state: () => {
        return {
            _contacts: null,
        }
    },
    getters: {
        contacts: async (state) => {
            if (!state._contacts) {
				try {
					const contactsResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/contacts`);
					const contacts = contactsResponse?.results[0] || {};
					state._contacts = contacts;
				} catch (error) {
					console.log(error);
					state._contacts = {};
				}
            }
            return state._contacts;
        },
    }
})















