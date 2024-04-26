<template>
  <Header/>
  <div>
    <WidgetsBreadcrumbs title="О нас"/>
    <!-- about section start -->
    <section class="about-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-section">
              <img :src="about.image" class="img-fluid" alt/>
            </div>
          </div>
          <div class="col-12">
            <h4>{{ about.title }}</h4>
            <div v-html="about.description"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- about section end -->
  </div>
  <Footer/>
</template>

<script setup>
import {useAboutStore} from '~/store/about';
const about = await useAboutStore().aboutPage;
useHead({
  titleTemplate: `%s - ${about.title}`,
  meta: [
    {
      name: 'description',
      content: 'Evacode - интернет магазин корейской косметики - О нас'
    },
  ]
});
</script>
