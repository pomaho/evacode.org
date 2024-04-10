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
                                    :from="current === 1 ? 1 : itemsPerPage * (current - 1) + 1"
                                    :to="current === 1 ? itemsPerPage : itemsPerPage * current"
                                    :total="totalProductsCount"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="product-wrapper-grid">
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
                          <div class="col-grid-box col-xl-3 col-md-4 col-6" v-for="(product, index) in products" :key="index">
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
                      <div class="product-pagination mb-0" v-if="totalProductsCount > itemsPerPage">
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
                                    :from="current === 1 ? 1 : itemsPerPage * (current - 1) + 1"
                                    :to="current === 1 ? itemsPerPage : itemsPerPage * current"
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
    />
    <Footer/>
  </div>
</template>
<script setup>
import {useProductStore} from '~~/store/products'
import {useFilterStore} from '~~/store/filter'
import {useRoute} from 'vue-router';

const route = useRoute();
const current = ref(parseFloat(route.query.page) || 1);

const {data: productsResponse} = await useAsyncData(
    'productsResponse',
    () => $fetch(`http://127.0.0.1:8000/market/goods`, {
      query: {
        page: current.value
      }
    }),
    {
      watch: [current]
    }
);

const products = computed(() => productsResponse.value.results);
const totalProductsCount = computed(() => productsResponse.value.count);
const previous = computed(() => productsResponse.value.previous ? `?${productsResponse.value.previous.split('?')[1]}` : null);
const next = computed(() => productsResponse.value.next ? `?${productsResponse.value.next.split('?')[1]}` : null);
const paginates = computed(() => Math.round(totalProductsCount.value / itemsPerPage.value));

const itemsPerPage = ref(12);
const paginateRange = ref(3);

const pages = computed(() => {
  let start = current.value < paginateRange.value - 1 ? 1 : current.value - 1
  let end = current.value < paginateRange.value - 1 ? start + paginateRange.value - 1 : current.value + 1;

  start = Math.max(1, start);
  end = Math.min(end, paginates.value);

  const _pages = []
  for (let i = start; i <= end; i++) {
    _pages.push(i)
  }
  return _pages;
});

const showcartmodal = ref(false);
const cartproduct = ref({});

const productStore = useProductStore();
const curr = computed(() => productStore.changeCurrency);

const productslist = computed(() => productStore.productslist);
const currency = computed(() => productStore.currency);

const getCategoryFilter = () => {
  updatePaginate(1);
  useFilterStore().getCategoryFilter(route.params.id)
};

const updatePaginate = () => {
  let start = current.value < paginateRange.value - 1 ? 1 : current.value - 1
  let end = current.value < paginateRange.value - 1 ? start + paginateRange.value - 1 : current.value + 1;

  start = Math.max(1, start);
  end = Math.min(end, paginates.value);

  pages.value = []
  for (let i = start; i <= end; i++) {
    pages.value.push(i)
  }
};

const showCart = (item, product) => {
  showcartmodal.value = item
  cartproduct.value = product
};

const closeCartModal = (item) => {
  showcartmodal.value = item
};

watch(
    () => route.query.page,
    async () => {
      current.value = parseFloat(route.query.page) || 1;
    }
);
</script>
