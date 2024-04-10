<template>
    <div>
        <div class="row">
            <div class="col-xl-12">
                <div class="filter-main-btn" @click="filter = !filter">
                    <button class="filter-btn btn btn-theme">
                        <i class="fa fa-filter" aria-hidden="true"></i> Фильтр
                    </button>
                </div>
            </div>
        </div>
        <div class="collection-filter" :class="filter ? 'openFilterbar' : ''">
            <div class="collection-filter-block">
                <!-- brand filter start -->
                <div class="collection-mobile-back">
                    <span class="filter-back" @click="filter = !filter">
                        <i class="fa fa-angle-left" aria-hidden="true"></i> back
                    </span>
                </div>
                <div class="collection-collapse-block open">
                    <h3 class="collapse-block-title">Категории</h3>

                    <div class="collection-collapse-block-content" :style="{ display: 'block'}">
                        <div class="collection-brand-filter">
                            <ul class="category-list">
                                <li>
                                    <nuxt-link :to="{ path: '/collection/leftsidebar/all' }">Все товары</nuxt-link>
                                </li>
                                <li v-for="(category, index) in filterbyCategory" :key="index">
                                    <nuxt-link :to="{ path: '/collection/leftsidebar/' + category }"
                                        @click="getCategoryFilter(category)">{{ category }}</nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <!-- side-bar banner start here -->
            <div class="collection-sidebar-banner">
                <a href="#">
                    <img :src="bannerimagepath" class="img-fluid" />
                </a>
            </div>
            <!-- side-bar banner end here -->
        </div>
        <!-- silde-bar colleps block end here -->
    </div>
</template>

<script>

import {
    Swiper,
    SwiperSlide
} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {
    mapState
} from 'pinia'
import {
    useProductStore
} from '~~/store/products'
import {
    useFilterStore
} from '~~/store/filter'

export default {
     setup() {
        return {
            modules: [Navigation],
        };
    },
     components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            min: 0,
            max: 0,
            start: 0,
            bannerimagepath: '/images/side-banner.png',
            selectedcolor: [],
            selectedbrand: [],
            selectedsize: [],
            applyFilter: [],
            activeItem: 'category',
            filter: false,

            active: 'category',
            live: false,
            live1: false,
            live2: false,
            live3: false,
            live4: false
        }
    },

    computed: {
        ...mapState(useProductStore, {
            currency: 'currency',
            productslist: 'productslist'
        }),
        curr() {
            return useProductStore().changeCurrency
        },

        filterbyCategory() {
            return useFilterStore().filterbyCategory
        },
        price() {
            return useProductStore().price
        }
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
        },
        getImgUrl(path) {
            return ('/images/' + path)
        },
        discountedPrice(product) {
            const price = (product.price - (product.price * product.discount / 100)) * this.curr.curr
            return price
        },
        isActive(filterItem) {
            return this.applyFilter.indexOf(filterItem) > -1
        },
        getCategoryFilter(category) {
            useFilterStore().getCategoryFilter(category)
        }
    },

     mounted() {

        var vm = this,
            max = Math.max(...this.price),
            min = Math.min(...this.price)
        vm.start = max
        vm.min = min,
            vm.max = max
        vm.value = [0, Infinity]
        this.$emit('priceVal', this.value)
    },
}
</script>
<style scoped>
.collapse-block-title:after {
  content: none;
}
</style>
