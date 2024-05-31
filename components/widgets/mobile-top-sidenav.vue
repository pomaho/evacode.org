<template>
  <div class="mobile-top-sidenav">
    <div class="back-btn">
      <div class="mobile-back text-end">
        <span @click="openmobilenav()">Назад</span>
        <i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
      </div>
    </div>
    <WidgetsBrandLogo />
    <WidgetsCurrency />
    <WidgetsContactPhone />
  </div>
</template>

<script>
export default {
  props: ['leftSidebarVal', 'openmobilenav'],
}
</script>

<style scoped>

</style>
