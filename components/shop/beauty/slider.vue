<template>
  <div>
    <!-- <h2 class="title">{{ $t('home.title') }}</h2> -->
    <!-- <h2 class="subtitle">{{ $t('home.introduction') }}</h2> -->
    <!-- Home slider -->
    <section class="p-0">
      <div class="slide-1 home-slider">

        <swiper :loop="true" :navigation="true" :modules="modules" class="swiper-wrapper">

          <swiper-slide class="swiper-slide" v-for="(slide, index) in slides" :key="index">
            <div class="home text-center" v-bind:style="{ 'background-image': 'url(' + slide.image + ')' }">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="slider-contain">
                      <div>
                        <h4>{{ slide.title }}</h4>
                        {{ slide.description }}
                        <nuxt-link :to="{ path: '/collection/leftsidebar/0' }" class="btn btn-solid">купить!</nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

      </div>
    </section>
    <!-- Home slider end -->
  </div>
</template>

<script type="text/javascript" setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

const modules = [Navigation];
const {data: slidesResponse} = await useAsyncData(
    'slidesResponse',
    () => $fetch(`${useRuntimeConfig().public.apiBase}/core/slide`),
    {
      server: false,
    }
);

const slides = computed(() => slidesResponse.value?.results);

</script>
