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
                        <i class="fa fa-angle-left" aria-hidden="true"></i> Назад
                    </span>
        </div>
        <div class="collection-collapse-block open">
          <h3 class="collapse-block-title">Категории</h3>

          <div class="collection-collapse-block-content" :style="{ display: 'block'}">
            <div class="collection-brand-filter">
              <ul class="category-list">
                <li>
                  <nuxt-link
                      :class="{
                        active: !currentCategory
                      }"
                      :to="{ path: '/collection/shop' }">Все товары</nuxt-link>
                </li>
                <li v-for="(category, index) in categories" :key="index">
                  <nuxt-link
                      :class="{
                        active: category.id === currentCategory
                      }"
                      v-if="category.id !== 1"
                      :to="`/collection/shop/?category=${category.id}`"
                  >
                    {{ category.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <!-- side-bar banner start here -->
      <div class="collection-sidebar-banner">
        <a href="#">
          <img :src="bannerimagepath" class="img-fluid"/>
        </a>
      </div>
      <!-- side-bar banner end here -->
    </div>
    <!-- silde-bar colleps block end here -->
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
const currentCategory = ref(parseFloat(route.query.category) || null);

const {data: categoriesResponse} = await useAsyncData(
    'categoriesResponse',
    () => $fetch(`http://127.0.0.1:8000/market/categories/`),
);

const categories = computed(() => categoriesResponse.value.result);
const bannerimagepath = ref('/images/side-banner.png');
const filter = ref(false);
const active = ref('category');

watch(
    () => route.query.category,
    () => {
      currentCategory.value = parseFloat(route.query.category) || null;
    }
);

</script>

<style scoped>
.collapse-block-title:after {
  content: none;
}
.category-list .router-link-active.active {
  color: var(--theme-deafult) !important;
}
</style>
