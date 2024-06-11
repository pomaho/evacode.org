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
      <sidebar-categories @clickBack="filter = !filter" :current-category="currentCategory"/>
    </div>
  </div>
</template>

<script setup>
import SidebarCategories from '~/components/widgets/sidebar-categories.vue';

import {useBannersStore} from '~/store/banners';
const bannerShopSide = await useBannersStore().bannerShopSide;
const filter = ref(false);
const props = defineProps({
  currentCategory: {
    type: Number,
    default: 0,
  }
})
</script>

<style scoped>
.collapse-block-title:after {
  content: none;
}
</style>
