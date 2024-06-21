<template>
    <div>
        <Header/>
        <section class="cart-section section-b-space">
            <div class="container">
                <h1 class="cart-headline">Корзина</h1>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="cart-tables" v-if="cart.length">
                            <WidgetsCartProduct v-for="(product, index) in cart" :key="index" :product="product" />
                        </div>
                        <table class="table cart-table cart-table-total table-responsive-md" v-if="cart.length">
                            <tfoot>
                            <tr>
                                <td class="total-title">Общая стоимость</td>
                            </tr>
                            <tr>
                                <td class="total-sum">
                                    <h2>{{ getPrice(cartTotal) }}
                                        <del>{{ getPrice(cartOfficialTotal) }}</del>
                                    </h2>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                        <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length">
                            <img src='/images/evacode/icon-empty-cart.png' class="img-fluid" alt="empty cart"/>
                            <h3 class="mt-3">
                                <strong>Ваша корзина пуста</strong>
                            </h3>
                            <h4 class="mb-3">Добавьте что-нибудь чтобы быть счастливее :)</h4>
                            <div class="col-12">
                                <nuxt-link :to="{ path: '/collection/leftsidebar/0' }" class="btn btn-solid">продолжить
                                    покупки
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row cart-buttons" v-if="cart.length">
                    <div class="col-6">
                        <nuxt-link :to="{ path: '/collection/leftsidebar/0' }" :class="'evacode-btn'">продолжить
                            покупки
                        </nuxt-link>
                    </div>
                    <div class="col-6">
                        <nuxt-link :to="{ path: '/page/account/checkout' }" :class="'btn btn-solid'">заказать
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Footer/>
</template>
<script>
import {useProductStore} from '~~/store/products'
import {useCartStore} from '~~/store/cart'

export default {
    computed: {
        cart() {
            return useCartStore().cartItems
        },
        cartTotal() {
            return useCartStore().cartTotalAmount
        },
        cartOfficialTotal() {
            return useCartStore().cartTotalOfficialAmount;
        },
        curr() {
            return useProductStore().changeCurrency
        }
    },
    methods: {
        removeCartItem(product) {
            useCartStore().removeCartItem(product)
        },
        increment(product, qty = 1) {
            useCartStore().updateCartQuantity({
                product: product,
                qty: qty
            })
        },
        decrement(product, qty = -1) {
            useCartStore().updateCartQuantity({
                product: product,
                qty: qty
            })
        },
        getPrice: function (price) {
            return useProductStore().getPrice(price);
        }
    },
}
</script>
