<template>
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
const filter = ref(false);

watch(
    () => route.query.category,
    () => {
      currentCategory.value = parseFloat(route.query.category) || null;
    }
);
</script>

<style scoped>
.category-list .router-link-active.active {
  color: var(--theme-deafult) !important;
}
</style>
