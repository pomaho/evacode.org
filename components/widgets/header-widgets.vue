<template>
  <div>
    <div class="icon-nav">
      <ul>
        <li class="onhover-div mobile-cart">
          <div>
            <img alt src="/images/icon/layout4/cart.png" class="img-fluid">
            <i class="ti-shopping-cart"></i>
            <span class="cart_qty_cls">{{cart.length}}</span>
          </div>
          <ul class="show-div shopping-cart" v-if="!cart.length">
            <li>Ваша корзина пуста.</li>
          </ul>
          <ul class="show-div shopping-cart" v-if="cart.length">
            <li v-for="(item,index) in cart" :key="index">
              <div class="media">
                <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                  <img alt class="mr-3" :src='getImgUrl(item.images[0].src)'>
                </nuxt-link>
                <div class="media-body">
                  <nuxt-link :to="{ path: '/product/sidebar/'+item.id}">
                    <h4>{{item.title}}</h4>
                  </nuxt-link>
                  <h4>
                    <span>{{item.quantity}} x {{ curr.symbol }}{{ item.price || currency }}</span>
                  </h4>
                </div>
              </div>
              <div class="close-circle">
                <a href="#" @click='removeCartItem(item)'>
                  <i class="fa fa-times" aria-hidden="true"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="total">
                <h5>
                  Итого :
                  <span>{{ curr.symbol }}{{ cartTotal || currency }}</span>
                </h5>
              </div>
            </li>
            <li>
              <div class="buttons">
                <nuxt-link :to="{ path: '/page/account/cart'}" :class="'view-cart'">
                  В корзину
                </nuxt-link>
                <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'checkout'">
                  Оформить
                </nuxt-link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useProductStore } from '~/store/products'
import {useCartStore} from '~/store/cart'
import { mapState } from 'pinia'
export default {
  data() {
    return {
      currencyChange: {},
      search: false,
      searchString: '',
      lang:[
        {
          code:'en',
          name:'English'
        },
        {
          code:'fr',
          name:'French'
        }
      ]
    }
  },
  computed: {
    ...mapState(useProductStore,{
      searchItems: 'searchProducts',
    }),
    language(){
      return this.lang.filter((lang) => lang.code != this.$i18n.locale)
    },
    ...mapState(useCartStore,{
      // cart:(store)=> store.cartItems,
      cartTotal:(store)=> store.cartTotalAmount,
    }),
    cart(){
      return useCartStore().cartItems
    },
    curr(){
      return useProductStore().changeCurrency
    }

  },
  watch:{
    searchString(){
      useProductStore().searchProduct(this.searchString)
    },
    cart(){
      useCartStore().cartItems
    },
  },
  methods: {
    getImgUrl(path) {
      return ('/images/' + path)
    },
    openSearch() {
      this.search = true
    },
    closeSearch() {
      this.search = false
    },
    searchProduct() {
    },
    removeCartItem: function (product) {
      useCartStore().removeCartItem(product)
      if(this.cart.length==0 && this.$route.name=== 'page-account-checkout'){
        this.$router.replace('/page/account/cart')
      }
    },
    setlang(name){
      this.$i18n.locale = name
    },
    updateCurrency: function (currency, currSymbol) {
      this.currencyChange = { value: currency, symbol: currSymbol }
      useProductStore().changeCurrency2(this.currencyChange)
    }
  },
}
</script>
