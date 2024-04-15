<template>
  <div>
    <Header/>
    <WidgetsBreadcrumbs title="Корзина"/>
    <section class="cart-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <table class="table cart-table table-responsive-xs" v-if="cart.length">
              <thead>
              <tr class="table-head">
                <th scope="col">Изображение</th>
                <th scope="col">Товар</th>
                <th scope="col">Цена</th>
                <th scope="col">Количество</th>
                <th scope="col">Удалить</th>
                <th scope="col">Сумма</th>
              </tr>
              </thead>
              <tbody v-for="(product, index) in cart" :key="index">
              <tr>
                <td>
                  <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">
                    <img :src="product.images[0].url" alt/>
                  </nuxt-link>
                </td>
                <td>
                  <nuxt-link :to="{ path: '/product/sidebar/' + product.id }">{{ product.title }}</nuxt-link>
                  <div class="mobile-cart-content row">
                    <div class="col-xs-3">
                      <div class="qty-box">
                        <div class="input-group">
                            <span class="input-group-prepend">
                              <button type="button" class="btn quantity-left-minus" data-type="minus" data-field
                                      @click="decrement(product)">
                                <i class="ti-angle-left"></i>
                              </button>
                            </span>
                          <input type="text" name="quantity" class="form-control input-number" v-model="product.quantity"/>
                          <span class="input-group-prepend">
                              <button type="button" class="btn quantity-right-plus" data-type="plus" data-field
                                      @click="increment(product)">
                                <i class="ti-angle-right"></i>
                              </button>
                            </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-xs-3">
                      <h2 class="td-color">
                        {{ curr.symbol }} {{ (product.retail_price * curr.curr) * product.quantity }}</h2>
                    </div>
                    <div class="col-xs-3">
                      <h2 class="td-color">
                        <a class="icon" href="#" @click.prevent="removeCartItem(product)">
                          <i class="ti-close"></i>
                        </a>
                      </h2>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>{{ curr.symbol }} {{ product.retail_price * curr.curr }}</h2>
                </td>
                <td>
                  <div class="qty-box">
                    <div class="input-group">
                        <span class="input-group-prepend">
                          <button type="button" class="btn quantity-left-minus" data-type="minus" data-field
                                  @click="decrement(product)">
                            <i class="ti-angle-left"></i>
                          </button>
                        </span>
                      <input type="text" name="quantity" class="form-control input-number"
                             :disabled="product.quantity > product.stock" v-model="product.quantity"/>
                      <span class="input-group-prepend">
                          <button type="button" class="btn quantity-right-plus" data-type="plus" data-field
                                  @click="increment(product)">
                            <i class="ti-angle-right"></i>
                          </button>
                        </span>
                    </div>
                  </div>
                </td>
                <td>
                  <a class="icon" href="#" @click.prevent="removeCartItem(product)">
                    <i class="ti-close"></i>
                  </a>
                </td>
                <td>
                  <h2 class="td-color">
                    {{ curr.symbol }} {{ (product.retail_price * curr.curr) * product.quantity }}</h2>
                </td>
              </tr>
              </tbody>
            </table>
            <table class="table cart-table table-responsive-md" v-if="cart.length">
              <tfoot>
              <tr>
                <td>Общая стоимость :</td>
                <td>
                  <h2>{{ curr.symbol }}{{ cartTotal * curr.curr }}</h2>
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
                <nuxt-link :to="{ path: '/collection/leftsidebar/0' }" class="btn btn-solid">продолжить покупки
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row cart-buttons" v-if="cart.length">
          <div class="col-6">
            <nuxt-link :to="{ path: '/collection/leftsidebar/0' }" :class="'btn btn-solid'">продолжить покупки
            </nuxt-link>
          </div>
          <div class="col-6">
            <nuxt-link :to="{ path: '/page/account/checkout' }" :class="'btn btn-solid'">заказать</nuxt-link>
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
  data() {
    return {
      counter: 1,
    }
  },
  computed: {

    cart() {
      return useCartStore().cartItems
    },
    cartTotal() {
      return useCartStore().cartTotalAmount
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
    }
  },
}
</script>
