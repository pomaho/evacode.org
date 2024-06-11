<template>
    <div>
        <section class="testimonials">
            <div class="container">
                <swiper
                    :loop="true"
                    :slidesPerView="1"
                    :breakpoints="{
                      '640': {
                        slidesPerView: 1,
                      },
                      '1024': {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      '1200': {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }"
                    :navigation="false"
                    :pagination="pagination"
                    :modules="modules"
                    class="swiper-wrapper"
                >
                    <swiper-slide class="swiper-slide">
                        <ShopBeautyTestimonialsTestimonialSlide/>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <ShopBeautyTestimonialsTestimonialSlide/>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <ShopBeautyTestimonialsTestimonialSlide/>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <ShopBeautyTestimonialsTestimonialSlide/>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <ShopBeautyTestimonialsTestimonialSlide/>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <ShopBeautyTestimonialsTestimonialSlide/>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript" setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper';
import {Pagination} from 'swiper';

const modules = [Navigation, Pagination];
const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return '<span class="' + className + ' evacode-slide-pagination"></span>';
    },
};

const slides = computed(() => slidesResponse.value?.results);

</script>
