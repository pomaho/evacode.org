<template>
  <div class="img-wrapper">
    <div class="lable-block">
      <span class="lable3" v-if="product.new">new</span>
      <span class="lable4" v-if="product.sale">on sale</span>
    </div>
    <div class="front">
      <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
        <img
            :src='getImgUrl(imageSrc ? imageSrc : product.images[0].url )'
            :id="product.id"
            class="img-fluid bg-img media "
            :alt="product.title"
            :key="index"
        />
      </nuxt-link>
    </div>
    <div class="back" v-if="product.images.length>1">
      <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
        <img :src='getImgUrl(imageSrc ? imageSrc : product.images[1].url )' :key="index" :id="product.id" alt=""
             class="img-fluid  m-auto media"></nuxt-link>
    </div>
    <ul class="product-thumb-list">
      <li
          class="grid_thumb_img"
          :class="{active: imageSrc === image.url}"
          v-for="(image,index) in product.images"
          :key="index"
          @click="productVariantChange(image.url)"
      >
        <a href="javascript:void(0);">
          <img :src="getImgUrl(image.url)"/>
        </a>
      </li>
    </ul>
    <div class="cart-info cart-wrap">
      <button
          data-toggle="modal"
          data-target="#modal-cart"
          title="Добавить в корзину"
          @click="addToCart(product)"

          variant="primary"
      >
        <i class="ti-shopping-cart"></i>
      </button>
    </div>
  </div>
  <div class="product-detail">
    <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
      <h6>{{ product.title }}</h6>
    </nuxt-link>
    <h4>
      <del>{{ curr.symbol }}{{ (product.official_price * curr.curr) }}</del>
     {{ curr.symbol }}{{ (product.retail_price * curr.curr) }}
    </h4>
  </div>
</template>

<script>
import {mapState} from 'pinia'
import {useProductStore} from '~~/store/products'
import {useCartStore} from '~~/store/cart'

export default {
  props: ['product', 'index'],
  data() {
    return {
      symbol: '$',
      imageSrc: '',
      quickviewProduct: {},
      compareProduct: {},
      cartProduct: {},
      showquickview: false,
      showCompareModal: false,
      cartval: false,
      variants: {
        productId: '',
        image: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },
  emits: ['opencartmodel', 'openquickview', 'alertseconds', 'showCompareModal'],
  computed: {
    ...mapState(useProductStore, {
      productslist: 'productslist'
    }),
    curr() {
      return useProductStore().changeCurrency
    }
  },
  methods: {
    getImgUrl(path) {
      return path;
      // return ('/images/' + path)
    },
    addToCart: function (product) {

      this.cartval = true
      this.cartProduct = product
      this.$emit('opencartmodel', this.cartval, this.cartProduct)

      useCartStore().addToCart(product)
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs
      useNuxtApp().$showToast({msg: 'Product Is successfully added to your wishlist.', type: 'info'})
      useProductStore().addToWishlist(product)
    },
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    productVariantChange(imgsrc) {
      this.imageSrc = imgsrc
    },
    discountedPrice(product) {
      const price = (product.retail_price - (product.retail_price * product.discount / 100)) * this.curr.curr
      return price

    }
  },

}
</script>

<style scoped>
.img-wrapper {
  outline: 1px solid #c1b6b626;
}
.img-wrapper .front {
  width: 238px;
  height: 318px;
}
.product-detail {
  padding-top: 5px;
}
.product-detail h6 {
  height: 70px;
}
</style>
