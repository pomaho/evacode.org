<script setup lang="ts">

</script>

<template>
  <ul class="contact-list">
    <li><i class="fa fa-map-marker"></i>안산시 단원구 초지동 742-3, 2 этаж, 210 кабинет
      Gyeonggi-do, Ansan-si, Danwon-gu, Choji-dong, 742-3, 210호
    </li>
    <li><i class="fa fa-phone"></i>Телефон: <phone-link :phone="'+8210-7652-8595'"/> (там WhatsApp)</li>
    <li><i class="fa fa-envelope"></i>Email Us: <mail-link :email="'sales@evacode.org'"/></li>
  </ul>
</template>

<style scoped>
ul.contact-list  li {
  text-transform: none;
}
</style>
