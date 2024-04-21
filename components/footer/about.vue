<template>
  <div v-if="aboutFooter">
    <div class="footer-logo"><img :src="aboutFooter.image" alt=""></div>
    <div v-html="aboutFooter.description"></div>
  </div>
</template>

<script setup>
import {useAboutStore} from '~/store/about';
const aboutFooter = await useAboutStore().aboutFooter;
</script>

<style scoped>
.footer-logo img {
  width: 100%;
}
</style>
