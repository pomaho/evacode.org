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
              <img :src="aboutbanner" class="img-fluid" alt/>
            </div>
          </div>
          <div class="col-12">
            <h4>{{ aboutTitle }}</h4>
            <div v-html="aboutText"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- about section end -->
  </div>
  <Footer/>
</template>
<script>
import {
  Swiper,
  SwiperSlide
} from 'swiper/vue';
import 'swiper/css';

export default {
  components: {Swiper, SwiperSlide},
  data() {
    return {
      aboutbanner: '/images/about/about-us.jpg',
      aboutTitle:
          'О нас',
      aboutText:
          '<p>Вас приветствует компания люксовой корейской косметики «EvaCode», которая функционирует на рынке более 7-ми лет.</p>' +
          '<p>Мы гордимся, что сотрудничаем с официальными поставщиками и предлагаем исключительно оригинальные</p>' +
          '<p>товары таких больших корпораций, как LG Household & HealthCare и Amore Pacific. </p>' +
          '<p>Наш магазин расположен в Южной Корее, но мы уверены, для красоты не должно быть границ, поэтому осуществляем доставку косметики практически во все страны мира. </p>' +
          '<br />' +
          '<p>У нас представлены знаменитые бренды косметики:</p>' +
          '<p>- The History of Whoo</p>' +
          '<p>- O HUI</p>' +
          '<p>- SU:M37</p>' +
          '<p>- CNP</p>' +
          '<p>- The Saga of Soo</p>' +
          '<p>- Sulwhasoo</p>' +
          '<p>- Hera</p>' +
          '<p>- Amore Pacific и другие</p>' +
          '<br />' +
          '<p>В нашем штате работают свыше 20 консультантов по всему миру, которые в любое время суток помогут подобрать индивидуальный уход для лица, тела и волос, при этом – оформить заказ и довести вас до желаемого результата. </p>' +
          '<br />' +
          '<p>Ценности нашей компании – осознанный подход к красоте и здоровью наших клиентов, а также качество поставляемой продукции.</p>' +
          '<br />' +
          '<p>Мы стремимся слышать всех женщин, где бы они ни жили и чем бы ни занимались, и удовлетворять их потребности. </p>'
    }
  },


}
</script>
