<template>
    <div>
        <section class="section-cancellation section-b-space">
            <div class="container">
                <img class="cancellation-image" src="/images/new_evacode/cancellation.png" />
                <h2 class="cancellation-title">Возврат и отмена</h2>
                <div class="container-wrapper">
                    <div class="row">
                        <div class="col-xl-6 col-12 text-column" v-html="deliveries[deliveries.length - 1].delivery_description">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
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

<style scoped>

</style>
