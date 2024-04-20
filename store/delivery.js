import {defineStore} from 'pinia'

export const useDeliveryStore = defineStore({
    id: 'contacts-store',
    state: () => {
        return {
            _deliveries: null,
        }
    },
    getters: {
        deliveries: async (state) => {
            if (!state._deliveries) {
                const deliveriesResponse = await $fetch(`${useRuntimeConfig().public.apiBase}/core/delivery`);
                const deliveries = deliveriesResponse?.results || [];
                state._deliveries = deliveries;
            }
            return state._deliveries;
        },
    }
})















