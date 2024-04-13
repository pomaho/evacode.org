import {defineStore} from 'pinia'

export const useProductStore = defineStore({
    id: 'product-store',
    state: () => {
        return {
            currency: {
                value: 'KRW',
                curr: 1,
                symbol: '₩'
            },
            order: [],
        }
    },
    actions: {
        createOrder(payload) {
            this.order = payload
        }
    },
    getters: {
        changeCurrency: (state) => {
            return state.currency
        },
        getOrder: (state) => {
            return state.order
        }
    },
})
