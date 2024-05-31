<template>
  <div>
    <!-- Sample menu definition -->
    <div class="main-navbar">
      <div id="mainnav">
        <div class="toggle-nav" :class="leftSidebarVal ? 'toggle-button' : ''" @click="openmobilenav = true">
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }">
          <WidgetsHeaderWidgets/>
          <li class="back-btn">
            <div class="mobile-back text-end">
              <span @click="openmobilenav = false">Назад</span>
              <i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
            </div>
          </li>
          <li v-for="(menuItem, index) in menulist" :key="index" class="'dropdown'">
            <nuxt-link :to="menuItem.path"> {{menuItem.title}} </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'pinia'
import { useMenuStore } from '~/store/menu'
export default {
  props: ['leftSidebarVal'],
  data() {
    return {
      openmobilenav: false,
    }
  },
  computed: {
    ...mapState(useMenuStore, {
      menulist: 'data'
    })
  },
}
</script>

<style lang="scss" scoped>
.toggle-nav {
  &.toggle-button {
    z-index: 1;
  }
}
.router-link-exact-active {
  color: var(--theme-deafult);
}
</style>
