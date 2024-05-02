import {defineStore} from 'pinia'

export const useProductStore = defineStore({
    id: 'product-store',
    state: () => {
        return {
            currency: {
                value: 'KRW',
                curr: 1,
                symbol: '₩',
                locale: 'ko-KR',
            },
            order: [],
        }
    },
    actions: {
        createOrder(payload) {
            this.order = payload
        },
        getPrice(price) {
            return new Intl.NumberFormat(this.currency.locale, { style: "currency", currency: this.currency.value }).format(
                price * this.currency.curr,
            );
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
