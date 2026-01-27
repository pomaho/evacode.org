<template>
    <div>
        <section v-if="deliveries.length" class="section-deliveries section-b-space">
            <div class="container">
                <div class="container-wrapper">
                    <div class="row">
                        <div class="col-12">
                            <div class="accordion theme-accordion" id="accordionExample">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li
                                        class="nav-item"
                                        role="presentation"
                                        v-for="(delivery, index) in deliveries" :key="index"
                                    >
                                        <button
                                            class="nav-link"
                                            type="button"
                                            role="tab"
                                            data-bs-toggle="tab"
                                            :class="{
                                            active: index === 0,
                                        }"
                                            :id="`tab-${index}`"
                                            :data-bs-target="`#tab${index}`"
                                            :aria-selected="index === 0"
                                            :aria-controls="`collapseOne${index}`"
                                            v-html="delivery.delivery_type"
                                        >
                                        </button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div
                                        v-for="(delivery, index) in deliveries" :key="index"
                                        class="tab-pane fade show"
                                        :class="{
                                        active: index === 0,
                                    }"
                                        :id="`tab${index}`"
                                        role="tabpanel"
                                        :aria-labelledby="`tab-${index}`"
                                        v-html="delivery.delivery_description"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import {useDeliveryStore} from '~/store/delivery';

const deliveries = ref([]);

onMounted(async () => {
    deliveries.value = await useDeliveryStore().deliveries;
});
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
