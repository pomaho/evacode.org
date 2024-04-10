<template>
  <div>
    <Header/>
    <ShopBeautySlider />
    <ShopBeautyAbout />
    <CartModalCartRightModel :openCart="showcartmodal" @closeCart="closeCart" />
    <WidgetsNewsletterPopup />
    <Footer />
  </div>
</template>
<script>
import { mapState } from 'pinia'
import { useProductStore } from '~~/store/products'

export default {

  data() {
    return {
      products: [],
      category: [],
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {}
    }
  },
  computed: {
    ...mapState(useProductStore, {
      productslist: 'productslist'
    }),
  },

  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        this.products.push(item)
        if (item.collection) {
          item.collection.map((i) => {
            const index = this.category.indexOf(i)
            if (index === -1) this.category.push(i)
          })
        }
      })
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
    },
    showCompare(item, productData) {
      this.showcomparemodal = item
      this.comapreproduct = productData
    },
    closeCompareModal(item) {
      this.showcomparemodal = item
    },
    showCart(item) {
      this.showcartmodal = item
    },
    closeCart(item) {
      this.showcartmodal = item
    },
    closeViewModal(item) {
      this.showquickviewmodel = item
    }
  },
  mounted() {
    this.productsArray()
  },
}
</script>
