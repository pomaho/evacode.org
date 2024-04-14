<template>
  <div class="collection-filter-block">
    <!-- brand filter start -->
    <div class="collection-mobile-back">
        <span class="filter-back" @click="this.$emit('clickBack')">
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
                  :to="{ path: '/collection/leftsidebar/0' }">Все товары</nuxt-link>
            </li>
            <li v-for="(category, index) in categories" :key="index">
              <nuxt-link
                  :class="{
                        active: category.id === currentCategory
                      }"
                  v-if="category.id !== 1"
                  :to="`/collection/leftsidebar/${category.id}`"
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
const props = defineProps({
  currentCategory:{
    type: Number,
    default: 0,
  }
});

const {data: categoriesResponse} = await useAsyncData(
    'categoriesResponse',
    () => $fetch(`${useRuntimeConfig().public.apiBase}/market/categories/`),
);

const categories = computed(() => categoriesResponse.value.result);
</script>

<style scoped>
.category-list .router-link-active.active {
  color: var(--theme-deafult) !important;
}
</style>
