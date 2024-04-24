import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
    // fetch data directly in the correct type
    const products = await $fetch<ReturnType<any>>(`${process.env.BASE_API_URL}/market/get_all_goods`);
    return products.result.map((product: ReturnType<ReturnType<any>>) => {
        return `${process.env.SITE_URL}/product/sidebar/${product.id}`;
    });
})
