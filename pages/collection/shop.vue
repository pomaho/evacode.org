<template>
  <Header/>
  <div>
    <WidgetsBreadcrumbs title="Магазин"/>
    <section class="section-b-space ratio_asos">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <WidgetsCollectionSidebar @allFilters="allfilter" @priceVal="pricefilterArray"
                                        @categoryfilter="getCategoryFilter"/>
            </div>
            <div class="collection-content col">
              <div class="page-main-content">
                <div class="row">
                  <div class="col-12">
                    <div class="top-banner-wrapper">
                      <a href="#">
                        <img src='/images/mega-menu/2.jpg' class="img-fluid" alt/>
                      </a>
                    </div>
                    <ul class="product-filter-tags">
                      <li class="me-1" v-for="(tag, index) in allfilters" :key="index">
                        <a href="javascript:void(0)" class="filter_tag">{{ tag }}<i class="ti-close"
                                                                                    @click="removeTags(tag)"></i></a>
                      </li>
                      <li class="clear_filter" v-if="allfilters.length > 0"><a href="javascript:void(0)"
                                                                               class="clear_filter"
                                                                               @click="removeAllTags()">Очистить</a>
                      </li>
                    </ul>
                    <div class="collection-product-wrapper">
                      <div class="product-top-filter">
                        <div class="row">
                          <div class="col-12">
                            <div class="product-filter-content">
                              <div class="search-count">
                                <WidgetsShowedProductsLabel
                                  :from="current === 1 ? 1 : paginate * (current - 1) + 1"
                                  :to="current === 1 ? paginate : paginate * current"
                                  :total="totalProductsCount"
                                />
                              </div>
                              <div class="collection-view">
                                <ul>
                                  <li @click="gridView()">
                                    <i class="fa fa-th grid-layout-view"></i>
                                  </li>
                                  <li @click="listView()">
                                    <i class="fa fa-list-ul list-layout-view"></i>
                                  </li>
                                </ul>
                              </div>
                              <div class="collection-grid-view">
                                <ul>
                                  <li>
                                    <img src='/images/icon/2.png' @click="grid2()"
                                         class="product-2-layout-view"/>
                                  </li>
                                  <li>
                                    <img src='/images/icon/3.png' @click="grid3()"
                                         class="product-3-layout-view"/>
                                  </li>
                                  <li>
                                    <img src='/images/icon/4.png' @click="grid4()"
                                         class="product-4-layout-view"/>
                                  </li>
                                  <li>
                                    <img src='/images/icon/6.png' @click="grid6()"
                                         class="product-6-layout-view"/>
                                  </li>
                                </ul>
                              </div>
                              <div class="product-page-filter">
                                <select @change="onChangeSort($event)">
                                  <option value="all">Сортировка</option>
                                  <option value="a-z">По алфавиту, A-Z</option>
                                  <option value="z-a">По алфавиту, Z-A</option>
                                  <option value="low">Цена, низ до верх</option>
                                  <option value="high">Цена, верх до низ</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-wrapper-grid" :class="{ 'list-view': listview == true }">
                        <div class="row">
                          <div class="col-12">
                            <div class="text-center section-t-space section-b-space" v-if="totalProductsCount == 0">
                              <img :src='"/images/empty-search.jpg"' class="img-fluid" alt/>
                              <h3 class="mt-3">Извините! Не найден товар который Вы искали!!!</h3>
                              <div class="col-12 mt-3">
                                <nuxt-link :to="{ path: '/' }" class="btn btn-solid">Продолжить покупки</nuxt-link>
                              </div>
                            </div>
                          </div>
                          <div class="col-grid-box"
                               :class="{ 'col-xl-3 col-md-4 col-6': col4 == true, 'col-md-4 col-6': col3 == true, 'col-6': col2 == true, 'col-xxl-2 col-xl-3 col-md-4 col-6': col6 == true, 'col-12': listview == true }"
                               v-for="(product, index) in products" :key="index">
                            <div class="product-box">
                              <ProductBoxProductBox1 @opencartmodel="showCart" @showCompareModal="showCompare"
                                                     @openquickview="showQuickview" @alertseconds="alert"
                                                     :product="product"
                                                     :index="index"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-pagination mb-0" v-if="totalProductsCount > paginate">
                        <div class="theme-paggination-block">
                          <div class="row">
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <nav aria-label="Page navigation">
                                <ul class="pagination">
                                  <li class="page-item">
                                    <nuxt-link v-if="previous != null" class="page-link" :to="previous" tabindex="-1">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                      </span>
                                    </nuxt-link>
                                    <a v-else class="page-link" href="#">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                      </span>
                                    </a>
                                  </li>
                                  <li class="page-item" v-for="(page_index, index) in this.pages" :key="index"
                                      :class="{ 'active': page_index == current }">
                                    <nuxt-link class="page-link" :to="`?page=${ page_index }`" tabindex="-1">
                                      {{ page_index }}
                                    </nuxt-link>
                                  </li>
                                  <li class="page-item">
                                    <nuxt-link v-if="next != null" class="page-link" :to="next" tabindex="-1">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                      </span>
                                    </nuxt-link>
                                    <a v-else class="page-link" href="#">
                                      <span aria-hidden="true">
                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <div class="product-search-count-bottom">
                                <WidgetsShowedProductsLabel
                                    :from="current === 1 ? 1 : paginate * (current - 1) + 1"
                                    :to="current === 1 ? paginate : paginate * current"
                                    :total="totalProductsCount"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WidgetsQuickview :openModal="showquickviewmodel" :productData="quickviewproduct" @closeView="closeViewModal"/>
    <WidgetsComparePopup :openCompare="showcomparemodal" :productData="comapreproduct"
                         @closeCompare="closeCompareModal"/>
    <cart-modal-popup :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal"
                      :products="filterProduct"/>
    <Footer/>
  </div>
</template>
<script>
import {useProductStore} from '~~/store/products'
import {useFilterStore} from '~~/store/filter'
import {mapState} from 'pinia'
import axios from 'axios';
export default {
  data() {
    debugger;
    return {
      productsResponse: {},
      products: [],
      totalProductsCount: 0,
      bannerimagepath: '/images/side-banner.png',
      col2: false,
      col3: true,
      col4: false,
      col6: false,
      listview: false,
      priceArray: [],
      allfilters: [],
      items: [],
      current: parseFloat(this.$route.query.page) || 1,
      previous: '',
      next: '',
      paginate: 12,
      paginateRange: 3,
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissSecs: 5,
      dismissCountDown: 0,
    }
  },
  computed: {
    ...mapState(useProductStore, {
      productslist: 'productslist',
      currency: 'currency'
    }),
    filterProduct() {
      return useFilterStore().filterProducts
    },
    tags() {
      return useFilterStore().setTags
    },
    curr() {
      return useProductStore().changeCurrency
    }
  },

  methods: {
    async setProductsResponse() {
      let page = this.current ? `?page=${this.current}` : '';
      const {data} = await axios.get(`http://127.0.0.1:8000/market/goods/${page}`);
      this.productsResponse = data;
    },
    onChangeSort(event) {
      useFilterStore().sortProducts(event.target.value)
    },
    gridView() {
      this.col4 = true
      this.col2 = false
      this.col3 = false
      this.col6 = false
      this.listview = false
    },
    listView() {
      this.listview = true
      this.col4 = false
      this.col2 = false
      this.col3 = false
      this.col6 = false
    },
    grid2() {
      this.col2 = true
      this.col3 = false
      this.col4 = false
      this.col6 = false
      this.listview = false
    },
    grid3() {
      this.col3 = true
      this.col2 = false
      this.col4 = false
      this.col6 = false
      this.listview = false
    },
    grid4() {
      this.col4 = true
      this.col2 = false
      this.col3 = false
      this.col6 = false
      this.listview = false
    },
    grid6() {
      this.col6 = true
      this.col2 = false
      this.col3 = false
      this.col4 = false
      this.listview = false
    },
    removeTags(val) {
      this.allfilters.splice(this.allfilters.indexOf(val), 1)
    },
    removeAllTags() {
      this.allfilters.splice(0, this.allfilters.length)
    },
    getCategoryFilter() {
      this.updatePaginate(1)
      useFilterStore().getCategoryFilter(this.$route.params.id)
    },
    allfilter(selectedVal) {
      this.allfilters = selectedVal
      useFilterStore().setTags(selectedVal)
      this.getPaginate()
      this.updatePaginate(1)
    },
    pricefilterArray(item) {
      this.getCategoryFilter()
      useFilterStore().priceFilter(item)
      this.getPaginate()
      this.updatePaginate(1)
    },
    getPaginate() {
      this.paginates = Math.round(this.filterProduct.length / this.paginate)
      this.pages = []
      for (let i = 0; i < this.paginates; i++) {
        this.pages.push(i + 1)
      }
    },
    updatePaginate() {
      let start = 0
      let end = 0
      if (this.current < this.paginateRange - 1) {
        start = 1
        end = start + this.paginateRange - 1
      } else {
        start = this.current - 1
        end = this.current + 1
      }
      if (start < 1) {
        start = 1
      }
      if (end > this.paginates) {
        end = this.paginates
      }
      this.pages = []
      for (let i = start; i <= end; i++) {
        this.pages.push(i)
      }
      return this.pages
    },
    alert(item) {
      this.dismissCountDown = item
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
    showCart(item, productData) {
      this.showcartmodal = item
      this.cartproduct = productData
    },
    closeCartModal(item) {
      this.showcartmodal = item
    },
    closeViewModal(item) {
      this.showquickviewmodel = item
    },
    async updateProducts() {
      this.current = parseFloat(this.$route.query.page) || 1

      await this.setProductsResponse();

      this.products = this.productsResponse.results;
      this.totalProductsCount = this.productsResponse.count;
      this.next = this.productsResponse.next ? `?${this.productsResponse.next.split('?')[1]}` : null;
      this.previous = this.productsResponse.previous ? `?${this.productsResponse.previous.split('?')[1]}` : null;

      this.paginates = Math.round(this.totalProductsCount / this.paginate);

      this.updatePaginate();
    }
  },
  async mounted() {
    await this.updateProducts();
    this.$watch(() => this.$route.query.page, async () => {
      debugger;
      await this.updateProducts();
    });
  }
}
</script>
