<template>
<NuxtLayout >

    <Head>

    </Head>
    <NuxtPage />
</NuxtLayout>
</template>

<script>
import {
    useCartStore
} from '~~/store/cart'
export default {
    mounted() {
        let localStorageProducts = JSON.parse(localStorage.getItem('product'))
        if (localStorageProducts ?.length) {
            useCartStore().setInitialCart(localStorageProducts)
        }
        window.addEventListener('beforeunload', (event) => {
            localStorage.setItem('product', JSON.stringify(useCartStore().cart))
        });
    },
}
</script>
