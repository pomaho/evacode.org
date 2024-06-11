<template>
 <Header/>
  <div>
    <section class="faq-section section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="accordion theme-accordion" id="accordionExample">
              <div class="card" v-for="(delivery, index) in deliveries" :key="index">
                <div class="card-header" :id="`headingOne${index}`">
                  <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-bs-toggle="collapse"
                                           :data-bs-target="`#collapseOne${index}`" :aria-expanded="index === 0"
                                           :aria-controls="`collapseOne${index}`" v-html="delivery.delivery_type">
                    </button>
                  </h5>
                </div>
                <div :id="`collapseOne${index}`" :class="{
                  collapse: true,
                  show: index === 0,
                }" :aria-labelledby="`headingOne${index}`"
                     data-bs-parent="#accordionExample">
                  <div class="card-body" v-html="delivery.delivery_description">
                  </div>
                </div>
              </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import {useDeliveryStore} from '~/store/delivery';
const deliveries = await useDeliveryStore().deliveries;
useHead({
  titleTemplate: `%s - Доставка`,
  meta: [
    {
      name: 'description',
      content: 'Evacode - интернет магазин корейской косметики - Доставка'
    },
  ]
});
</script>
