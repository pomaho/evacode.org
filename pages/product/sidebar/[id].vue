<template>
<Header/>
  <div>
    <WidgetsBreadcrumbs :title="getDetail.title" />
    <section class="section-b-space">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <WidgetsProductSidebar />
            </div>
            <div class="col-lg-9 col-sm-12 col-xs-12 productdetail">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <swiper @swiper="onSwiper" :slidesPerView="1" :spaceBetween="20" class="swiper-wrapper h-auto">
                      <swiper-slide class="swiper-slide" v-for="(product, index) in getDetail.images" :key="index">
                        <img :src="getImgUrl(product.src)" :id="product.image_id" class="img-fluid bg-img"
                          :alt="product.alt" />
                      </swiper-slide>
                    </swiper>
                    <div class="row">
                      <div class="col-12 slider-nav-images">
                        <swiper :slidesPerView="3" slide-active-class="true" :spaceBetween="20" class="swiper-wrapper">
                          <swiper-slide class="swiper-slide" v-for="(product, index) in getDetail.images" :key="index"
                            :class="slideId == index ? 'product-slider-active' : ''">
                            <img :src="getImgUrl(product.src)" :id="product.image_id" class="img-fluid bg-img"
                              alt="product.alt" @click="slideTo(index)" />
                          </swiper-slide>
                        </swiper>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h2>{{ getDetail.title }}</h2>
                      <h4 v-if="getDetail.sale">
                        <del>{{ curr.symbol }}{{ (getDetail.price * curr.curr).toFixed(2) }}</del>
                        <span>{{ getDetail.discount }}% off</span>
                      </h4>
                      <h3 v-if="getDetail.sale">{{ curr.symbol }}{{ discountedPrice(getDetail) }}</h3>
                      <h3 v-else>{{ curr.symbol }}{{ (getDetail.price * curr.curr).toFixed(2) }}</h3>
                      <ul class="color-variant">
                        <li v-bind:class="{ active: activeColor == variant }"
                          v-for="(variant, variantIndex) in Color(getDetail.variants)" :key="variantIndex">
                          <a :class="[variant]" v-bind:style="{ 'background-color': variant }"
                            @click="sizeVariant(getDetail.variants[variantIndex].image_id, variantIndex, variant)"></a>
                        </li>
                      </ul>
                      <div class="pro_inventory" v-if="getDetail.stock < 8">
                        <p class="active"> Поспешите! У нас осталось всего {{ getDetail.stock }} шт. на складе. </p>
                      </div>
                      <div class="product-description border-product">
                        <h5 class="avalibility" v-if="counter <= getDetail.stock">
                          <span>В наличии</span>
                        </h5>
                        <h5 class="avalibility" v-if="counter > getDetail.stock">
                          <span>Отсутствует</span>
                        </h5>
                        <h6 class="product-title">количество</h6>
                        <div class="qty-box">
                          <div class="input-group">
                            <span class="input-group-prepend">
                              <button type="button" class="btn quantity-left-minus" data-type="minus" data-field
                                @click="decrement()">
                                <i class="ti-angle-left"></i>
                              </button>
                            </span>
                            <input type="text" name="quantity" class="form-control input-number"
                              :disabled="counter > getDetail.stock" v-model="counter" />
                            <span class="input-group-prepend">
                              <button type="button" class="btn quantity-right-plus" data-type="plus" data-field
                                @click="increment()">
                                <i class="ti-angle-right"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="product-buttons">
                        <nuxt-link :to="{ path: '/page/account/cart' }">
                          <button class="btn btn-solid" title="Добавить в корзину" @click="addToCart(getDetail, counter)"
                            :disabled="counter > getDetail.stock">Добавить в корзину</button>
                        </nuxt-link>
                      </div>
                      <div class="border-product">
                        <h6 class="product-title"> описание товара</h6>
                        <p>{{ getDetail.description.substring(0, 200) + "...." }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WidgetsRelatedProducts :productTYpe="productTYpe" :productId="productId" />
      <div class="modal fade " id="modal-1" aria-hidden="true" tabindex="-1" role="dialog"
        aria-labelledby="modal-cartLabel">
        <div class="modal-dialog modal-md modal-dialog-centered">
          <div class="modal-content">
            <div class="row">
              <div class="col-lg-12">
                <!-- <button class="close" type="button" data-bs-dismiss="modal">
                  <span>×</span>
                </button>
                {{ getDetail.title }} -->
                <div class="modal-header"><h5 class="modal-title">{{ getDetail.title }}</h5><button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button></div>
              </div>
              <div>
                <img src="/images/size-chart.jpg" alt="size-chart" class="img-fluid size-chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>
<script>


import {
  Swiper,
  SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import { mapState } from 'pinia'
import { useProductStore } from "~~/store/products";
import { useCartStore } from "~~/store/cart";

export default {
  components: {

     Swiper, SwiperSlide,
  },

  data() {
    return {
      slideId: 0,
      counter: 1,
      activeColor: '',
      selectedSize: '',
      qty: '',
      size: [],
      productTYpe: '',
      productId: '',

    }
  },
  computed: {
    ...mapState(useProductStore, {
      currency: 'currency'
    }),

    curr() {
      return useProductStore().changeCurrency
    },
    getDetail: function () {

      return useProductStore().getProductById(this.$route.params.id)


    },

  },


  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    priceCurrency: function () {
      useProductStore().changeCurrency()
    },
    addToWishlist: function (product) {
      useProductStore().addToWishlist(product)
    },
    discountedPrice(product) {
      const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
      return price

    },
    // Related Products display
    relatedProducts() {
      this.productTYpe = this.getDetail.type
      this.productId = this.getDetail.id
    },
    // Display Unique Color
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    // add to cart
    addToCart: function (product, qty) {
      product.quantity = qty || 1
      useCartStore().addToCart(product)
    },
    buyNow: function (product, qty) {
      product.quantity = qty || 1
      useCartStore().addToCart(product)
      this.$router.push('/page/account/checkout')
    },
    // Item Count
    increment() {
      this.counter++
    },
    decrement() {
      if (this.counter > 1) this.counter--
    },
    // Change size variant
    changeSizeVariant(variant) {
      this.selectedSize = variant
    },
    getImgUrl(path) {
      return ('/images/' + path)
    },
    slideTo(id) {
      this.swiper.slideTo(id)

      this.slideId = id
    },


    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId)
      this.size = []
      this.activeColor = color
      this.getDetail.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size)
        }
      })
    }
  },
   mounted() {

    // For displaying default color and size on pageload
    this.uniqColor = this.getDetail.variants[0].color
    this.sizeVariant(this.getDetail.variants[0].image_id)
    // Active default color
    this.activeColor = this.uniqColor
    this.changeSizeVariant(this.getDetail.variants[0].size)
    // related product type
    this.relatedProducts()

  },
}
</script>
