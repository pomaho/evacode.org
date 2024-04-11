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
      <sidebar-categories />
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
import SidebarCategories from '~/components/widgets/sidebar-categories.vue';
const bannerimagepath = ref('/images/side-banner.png');
const filter = ref(false);
</script>

<style scoped>
.collapse-block-title:after {
  content: none;
}
</style>
