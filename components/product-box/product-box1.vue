<template>
  <div class="img-wrapper">
    <div class="lable-block">
      <span class="lable3" v-if="product.new">Новый</span>
      <span class="lable4" v-if="product.sale">sale</span>
    </div>
    <div class="front">
      <nuxt-link :class="'product-detail-link'" :to="{ path: '/product/sidebar/'+product.id}">
        <img
            :src='imageSrc ? imageSrc : product.images[0].url'
            :id="product.id"
            class="img-fluid bg-img media "
            :alt="product.title"
            :key="index"
        />
      </nuxt-link>
    </div>
    <div class="back" v-if="product.images.length>1">
      <nuxt-link :class="'product-detail-link'" :to="{ path: '/product/sidebar/'+product.id}">
        <img :src='imageSrc ? imageSrc : product.images[1].url' :key="index" :id="product.id" alt=""
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
          <img :src="image.url"/>
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
     {{ getPrice(product.retail_price) }}
      <del>{{ curr.symbol }}{{ (product.official_price * curr.curr) }}</del>
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
      _imageSrc: '',
      cartProduct: {},
      cartval: false,
    }
  },
  emits: ['opencartmodel'],
  computed: {
    curr() {
      return useProductStore().changeCurrency
    },
    imageSrc() {
      const isImageFromProduct =
          this.product.images &&
          this.product.images.length &&
          this.product.images.map((image)=>image.url).indexOf(this._imageSrc) !== -1;
      return isImageFromProduct ? this._imageSrc : '';
    }
  },
  methods: {
    addToCart: function (product) {

      this.cartval = true
      this.cartProduct = product
      this.$emit('opencartmodel', this.cartval, this.cartProduct)

      useCartStore().addToCart(product)
    },
    productVariantChange(imgsrc) {
      this._imageSrc = imgsrc
    },
    getPrice: function (price) {
      return useProductStore().getPrice(price);
    }
  },
}
</script>

<style scoped>
.img-wrapper {
  outline: 1px solid #c1b6b626;
}

.img-wrapper .back {
  width: auto;
  height: 100%;
  background: white;
}
.img-wrapper .front img,
.img-wrapper .back img {
  left: 50%;
  top: 50%;
  position: relative;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  /*comment*/
}
.product-detail {
  padding-top: 5px;
}
.product-detail h6 {
  height: 70px;
  overflow: hidden;
}
.product-detail h4 {
  margin-top: 5px;
}

.product-detail-link {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
