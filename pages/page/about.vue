<template>
    <Header/>
    <div>
        <!-- about section start -->
        <section class="about-section-with-img">
            <div class="container-img container">
                <div class="about-background">
                    <WidgetsBrandLogo :logo_type="'white'" />
                    <h2>{{ about.title }}</h2>
                </div>
            </div>
            <div class="container-img-fluid container-fluid about-background">
                <h2>{{ about.title }}</h2>
            </div>
        </section>
        <section class="about-page section-b-space">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <div class="banner-section">
                            <img src="/images/new_evacode/about-logo.png" alt/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-12">
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
