<template>
  <Header/>
  <div>
    <WidgetsBreadcrumbs title="Магазин"/>
    <section class="section-b-space ratio_asos">
      <div class="collection-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <WidgetsCollectionSidebar @categoryfilter="getCategoryFilter"/>
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
                          <div
                              :class="{
                                'col-grid-box': true,
                                'col-xl-3 col-md-4 col-6': col4 == true,
                                'col-md-4 col-6': col3 == true,
                                'col-6': col2 == true,
                                'col-xxl-2 col-xl-3 col-md-4 col-6': col6 == true,
                                'col-12': listview == true
                              }"
                               v-for="(product, index) in products" :key="index">
                            <div class="product-box">
                              <ProductBoxProductBox1
                                  @opencartmodel="showCart"
                                  :product="product"
                                  :index="index"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-pagination mb-0" v-if="totalProductsCount > paginate">
                        <div class="theme-paggination-block">
                          <div class="row">
                            <div class="col-xl-6 col-md-6 col-sm-12">
                              <WidgetsShopProductsPagination
                                  :previous="previous"
                                  :next="next"
                                  :current="current"
                                  :pages="pages"
                              />
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
    <cart-modal-popup
        :openCart="showcartmodal"
        :product="cartproduct"
        @closeCart="closeCartModal"
        :products="products"
    />
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
    return {
      productsResponse: {},
      products: [],
      pages:[],
      totalProductsCount: 0,
      col2: false,
      col3: true,
      col4: false,
      col6: false,
      listview: false,
      current: parseFloat(this.$route.query.page) || 1,
      previous: '',
      next: '',
      paginate: 12,
      paginateRange: 3,
      showcartmodal: false,
      cartproduct: {},
    }
  },
  computed: {
    ...mapState(useProductStore, {
      productslist: 'productslist',
      currency: 'currency'
    }),
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
    getCategoryFilter() {
      this.updatePaginate(1)
      useFilterStore().getCategoryFilter(this.$route.params.id)
    },
    updatePaginate() {
      let start = this.current < this.paginateRange - 1 ? 1 : this.current - 1
      let end = this.current < this.paginateRange - 1 ? start + this.paginateRange - 1 : this.current + 1;

      start = Math.max(1, start);
      end = Math.min(end, this.paginates);

      this.pages = []
      for (let i = start; i <= end; i++) {
        this.pages.push(i)
      }

      return this.pages
    },
    showCart(item, product) {
      this.showcartmodal = item
      this.cartproduct = product
    },
    closeCartModal(item) {
      this.showcartmodal = item
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
      await this.updateProducts();
    });
  }
}
</script>
